<script>
	export let alias = '',
		description = '',
		tagName = 'div',
		title = '';
</script>

<svelte:element this={tagName} class="promotion promotion--{alias}">
	<h3 class="promotion__title">{title}</h3>

	<p class="promotion__description">{@html description}</p>

	<a class="promotion__link button" href="#!">Хочу подарок</a>
</svelte:element>
