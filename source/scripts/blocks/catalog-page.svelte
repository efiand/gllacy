<script context="module">
	import Catalog from './catalog.svelte';
</script>

<script>
	export let goods = [];
</script>

<h1>Каталог</h1>

<section class="section">
	<h2 class="visually-hidden">Каталог товаров</h2>

	<Catalog className="section__grid" {goods} />
</section>
