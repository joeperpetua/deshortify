require('esbuild').build({
  entryPoints: ['src/content.ts'],
  bundle: true,
  outfile: 'dist/content.js',
  minify: true,
  sourcemap: false,
  platform: 'browser',
  format: 'iife'
}).catch(() => process.exit(1));