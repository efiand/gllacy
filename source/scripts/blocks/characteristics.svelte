<script>
	export let characteristics = [],
		className = '';
</script>

<ul class="characteristics {className}">
	{#each characteristics as { content, marker }}
		<li class="characteristics__item characteristics__item--{marker}">
			{@html content}
		</li>
	{/each}
</ul>
