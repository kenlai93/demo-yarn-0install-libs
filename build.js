const esbuild = require('esbuild')

/** @type {esbuild.BuildOptions} */
const cjsOptions = {
  bundle: true,
  platform: 'node',
  entryPoints: ['./src/index.ts'],
  outfile: 'dist/index.cjs',
}

/** @type {esbuild.BuildOptions} */
const esmOptions = {
  ...cjsOptions,
  format: 'esm',
  outfile: 'dist/index.mjs',
}

const jobs = [esbuild.build(cjsOptions), esbuild.build(esmOptions)]

Promise.all(jobs)
