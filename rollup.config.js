import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

const banner = ``;
/*!
 * ${pkg.displayName} <${pkg.homepage}>
 *
 * Copyright (c) 2014-present ${pkg.author}.
 * Licensed under the MIT license.
 * Version ${pkg.version}
 */

export default [

	// browser-fiendly UMD build
	{
		input: 'src/index.js',
		output: {
			name: 'DomKit',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(),
			commonjs()
		]
	},

	// CommonJS (for Node) and ES5 (for bundlers)
	{
		input: 'src/index.js',
		external: ['jsdom', 'window'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
];
