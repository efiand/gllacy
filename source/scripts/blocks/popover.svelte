<script>
	export let arrow = false,
		className = '',
		hasBigShadow = false,
		hideTitle = false,
		right = false,
		title = '';

	let shadowModifier = hasBigShadow ? 'popover__dropdown--big-shadow' : '';
	let rightModifier = right ? 'popover__dropdown--right' : '';
</script>

<details class="popover">
	<summary class="popover__title {arrow ? 'popover__title--arrow' : ''} {className}">
		{#if hideTitle}
			<span class="visually-hidden">{title}</span>
		{:else}
			{title}
		{/if}
	</summary>

	<div class="popover__dropdown {shadowModifier} {rightModifier}">
		<slot />
	</div>
</details>
