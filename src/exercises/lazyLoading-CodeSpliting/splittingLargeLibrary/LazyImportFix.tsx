import { format } from "date-fns"

// Instead of importing at the top, you lazy load the entire component that depends on the library.

const LazyImportFix = () => {
  const today = new Date();
  return <p>📅 Today is {format(today, "MMMM dd, yyyy")}</p>;
}

/* Ways to Know if a Library is Heavy */

// Check Bundle Size Websites
// Use Bundlephobia → type the library name, e.g. date-fns, lodash, moment.
// It shows:
/* Minified size (raw size before gzip/brotli compression)

Gzipped size (what actually ships over the network)

Dependencies it pulls in */

/* After running npm run build, check the output in build/static/js/. */
// Most bundlers (like Vite, CRA, Webpack) will show bundle size per chunk.
// Some tools give a visual breakdown:
// Webpack Bundle Analyzer (npm install --save-dev webpack-bundle-analyzer)
// Vite-bundle-visualizer (npm install vite-bundle-visualizer)
// These tools generate a treemap of your bundle so you can literally see which library is the “big block.”

// Any library >30 KB gzipped is a good candidate for lazy loading if not used often.
export default LazyImportFix