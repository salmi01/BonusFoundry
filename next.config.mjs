import createMDX from "@next/mdx";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const withMDX = createMDX({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  outputFileTracingRoot: __dirname
};

export default function config(phase) {
  return withMDX({
    ...nextConfig,
    // A production build must not remove assets used by the dev server.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next"
  });
}
