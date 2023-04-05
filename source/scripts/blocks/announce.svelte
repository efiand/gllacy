<script>
	export let alias = '',
		link = {},
		title = '';
</script>

<article class="announce announce--{alias}">
	<h2 class="announce__title">{title}</h2>

	<a class="announce__link" href={link.url}>{@html link.title}</a>
</article>
