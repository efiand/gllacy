import bundleScripts from 'gulp-esbuild';
import gulp from 'gulp';
import { isDev } from './common/constants.js';
import processSvelte from 'esbuild-svelte';
import through2 from 'gulp-through2';
import useCondition from 'gulp-if';

const buildSsrScript = () =>
	gulp
		.src('source/scripts/blocks/page.svelte', { allowEmpty: true })
		.pipe(
			useCondition(
				!isDev,
				bundleScripts({
					bundle: true,
					format: 'esm',
					plugins: [
						processSvelte({
							compilerOptions: { generate: 'ssr' }
						})
					]
				})
			)
		)
		.pipe(useCondition(!isDev, gulp.dest('build/scripts')))
		.pipe(
			useCondition(
				!isDev,
				through2(async () => {
					global.app = (await import('../build/scripts/page.js')).default;
				})
			)
		);

export default buildSsrScript;
