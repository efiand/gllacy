<script>
	export let className = '',
		socials = [];
</script>

<ul class="socials {className}">
	{#each socials as { alias, title, url }}
		<li>
			<a class="socials__link socials__link--{alias}" href={url}>
				<span class="visually-hidden">{title}</span>
			</a>
		</li>
	{/each}
</ul>
