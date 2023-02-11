import bundleScripts from 'gulp-esbuild';
import gulp from 'gulp';
import { isDev } from './common/constants.js';
import processSvelte from 'esbuild-svelte';
import server from 'browser-sync';
import useCondition from 'gulp-if';

const buildScripts = () =>
	gulp
		.src('source/scripts/main.js')
		.pipe(
			bundleScripts({
				bundle: true,
				format: 'iife',
				minify: !isDev,
				plugins: [processSvelte()]
			})
		)
		.pipe(gulp.dest('build/scripts'))
		.pipe(useCondition(isDev, server.stream()));

export default buildScripts;
