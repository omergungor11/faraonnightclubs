import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "node_modules/**",
    ],
  },
  ...coreWebVitals,
  ...typescript,
  {
    // shadcn/ui boilerplate — vendored, not maintained by us.
    // React 19 compiler rules flag it, but we don't hand-edit these files.
    files: ["components/ui/**", "hooks/**"],
    rules: {
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/purity": "warn",
    },
  },
];

export default eslintConfig;
