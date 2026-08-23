/** @type {import('next').NextConfig} */
const nextConfig = {
  // `typescript.ignoreBuildErrors` was removed: it let a malformed
  // `generateMetadata` or a mistyped Metadata field ship to production as
  // missing head tags with nothing failing. `tsc --noEmit` currently passes
  // clean, so there is no backlog to gate.

  images: {
    // `unoptimized: true` was removed. It disabled the entire image pipeline —
    // no AVIF/WebP, no resizing, no srcset — so every <Image> degraded to a
    // plain <img> serving the original file, and the `quality` and `priority`
    // props were silently inert. The homepage LCP image is a 1.1 MB
    // 4970x3337 JPEG being painted into a 390px-wide mobile hero.
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
