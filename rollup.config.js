import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import license from 'rollup-plugin-license';
import yaml from '@rollup/plugin-yaml';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';



const JS_SRC = '_javascript';
const JS_DIST = 'assets/js/dist';
const isProd = process.env.NODE_ENV === 'production';

function build(filename) {
  return {

    input: [`${JS_SRC}/${filename}.js`],
    output: {
      file: `${JS_DIST}/${filename}.min.js`,
      format: 'iife',
      name: 'Azureeen',
      sourcemap: !isProd,
      globals: {
        'firebase/app':'firebase/app',
        'firebase/analytics':'firebase/analytics',
        'firebase/firestore':'firebase/firestore',
        '/_config.yml': 'data'
      }
    },
    watch: {
      include: `${JS_SRC}/**`
    },
    plugins: [
      yaml(),
      resolve({ preferBuiltins: true }),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/env'],
        plugins: ['@babel/plugin-proposal-class-properties']
      }),
      license({
        banner: {
          commentStyle: 'ignored',
          content: { file: path.join(__dirname, JS_SRC, '_copyright') }
        }
      }),
      isProd && terser(),
      builtins(),
      commonjs(),
    ]
  };
}

export default [
  //buildExternal('home'),
  build('commons'),
  build('home'),
  build('categories'),
  build('page'),
  build('post'),
  build('misc')
];
