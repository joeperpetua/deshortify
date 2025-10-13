require('esbuild').build({
  entryPoints: ['src/content.ts', 'src/background.ts'],
  bundle: true,
  outdir: 'dist',
  minify: true,
  sourcemap: false,
  platform: 'browser',
  format: 'iife'
}).catch(() => process.exit(1));