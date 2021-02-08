const typescript = require('rollup-plugin-typescript2');
const dts = require('rollup-plugin-dts').default;
const postcss = require('rollup-plugin-postcss');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const pkg = require('./package.json');

export default [
  {
    input: './src/components/index.ts',
    output: {
      file: './lib/bundle.d.ts',
      name: pkg.name
    },
    plugins: [
      dts()
    ]
  },
  {
    input: './src/components/index.ts',
    output: {
      file: './lib/bundle.js',
      name: pkg.name,
      format: 'umd',
      sourcemap: true
    },
    plugins: [
      postcss({
        extract: true,
        modules: true,
        use: [ 'sass' ],
        minimize: true
      }),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true
      }),
      nodeResolve(),
      commonjs()
    ]
  }
];
