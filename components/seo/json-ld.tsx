import type { ReactElement } from "react";

// U+2028 / U+2029 are legal inside JSON strings but terminate a statement in
// some JS parsers. Built with fromCharCode / a RegExp string so this source
// file stays pure ASCII — a raw U+2028 in a regex literal is a syntax error.
const LINE_SEPARATOR = String.fromCharCode(0x2028);
const PARAGRAPH_SEPARATOR = String.fromCharCode(0x2029);

/**
 * JSON's structural characters are only `{}[],:"` plus whitespace and literal
 * tokens, so `<`, `>`, `&`, U+2028 and U+2029 can appear *only* inside string
 * literals. Escaping them to \uXXXX therefore parses back byte-identical while
 * making it impossible for content to emit a literal `</script>` that would
 * terminate the element early.
 */
const ESCAPES: Record<string, string> = {
  "<": "\\u003c",
  ">": "\\u003e",
  "&": "\\u0026",
  [LINE_SEPARATOR]: "\\u2028",
  [PARAGRAPH_SEPARATOR]: "\\u2029",
};

const UNSAFE = new RegExp("[<>&\\u2028\\u2029]", "g");

function serialize(data: unknown): string {
  return JSON.stringify(data).replace(UNSAFE, (char) => ESCAPES[char]);
}

/**
 * Renders a JSON-LD block into the server-rendered HTML.
 *
 * Deliberately a plain <script> in a Server Component rather than next/script:
 * any strategy other than `beforeInteractive` injects the tag after hydration,
 * and while Googlebot renders JS, Bing, social unfurlers, LLM crawlers and
 * validators generally read the initial HTML only.
 */
export function JsonLd({
  data,
  id,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
}): ReactElement {
  return (
    <script
      type="application/ld+json"
      {...(id ? { id } : {})}
      dangerouslySetInnerHTML={{ __html: serialize(data) }}
    />
  );
}
