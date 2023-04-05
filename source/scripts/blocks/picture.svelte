<script>
	export let alt = '',
		className = null,
		extname = 'jpg',
		filename = '',
		height = null,
		lazy = true,
		width = null;

	let loading = lazy ? 'lazy' : null;
</script>

<picture class={className}>
	<source type="image/webp" srcset="images/{filename}.webp 1x, images/{filename}@2x.webp 2x" />
	<img
		src="images/{filename}.{extname}"
		srcset="images/{filename}@2x.{extname} 2x"
		{width}
		{height}
		{alt}
		{loading}
	/>
</picture>
