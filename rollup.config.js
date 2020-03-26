import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const banner = `/*!\r\n * ${pkg.displayName} <${pkg.homepage}>\r\n *\r\n * Copyright (c) 2014-${(new Date()).getUTCFullYear()} ${pkg.author}.\r\n * Licensed under the MIT license.\r\n * Version ${pkg.version}\r\n */\r\n`;

export default [

	// browser-fiendly UMD build
	{
		input: 'src/index.js',
		output: {
			name: 'DomKit',
			file: pkg.browser,
			format: 'umd',
			banner: banner
		},
		plugins: [
			resolve(),
			commonjs(),
			babel({
				exclude: 'node_modules/**'
			})
		]
	},

	// CommonJS (for Node) and ES5 (for bundlers)
	{
		input: 'src/index.js',
		external: ['jsdom', 'window'],
		output: [
			{ file: pkg.main, format: 'cjs', banner: banner },
			{ file: pkg.module, format: 'es', banner: banner }
		]
	}
];
