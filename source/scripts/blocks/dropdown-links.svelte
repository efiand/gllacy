<script context="module">
	import { storedPageName } from '../common/stores.js';
</script>

<script>
	export let links = [];
</script>

<ul class="dropdown-links">
	{#each links as { title, url }}
		{@const current = url === $storedPageName}
		<li class="dropdown-links__item">
			<a
				class="dropdown-links__link {current ? 'dropdown-links__link--current' : ''}"
				aria-current={current ? 'page' : null}
				href={current ? null : url}
			>
				{@html title}
			</a>
		</li>
	{/each}
</ul>
