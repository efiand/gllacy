<script>
	export let alt = '',
		className = null,
		extname = 'webp',
		filename = '',
		height = null,
		lazy = true,
		width = null;

	let loading = lazy ? 'lazy' : null;
</script>

<picture class={className}>
	<img
		src="images/{filename}.{extname}"
		srcset="images/{filename}@2x.{extname} 2x"
		{width}
		{height}
		{alt}
		{loading}
	/>
</picture>
