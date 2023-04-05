<script context="module">
	import Announce from './announce.svelte';
	import Catalog from './catalog.svelte';
	import Characteristics from './characteristics.svelte';
	import Delivery from './delivery.svelte';
	import Promo from './promo.svelte';
	import Promotion from './promotion.svelte';
	import Subscribe from './subscribe.svelte';
</script>

<script>
	export let announce = {},
		characteristics = [],
		goods = [],
		promoGoods = [],
		promotions = [],
		socials = [];
</script>

<h1 class="visually-hidden">Gllacy</h1>

<Promo {promoGoods} {socials} />

<section class="section">
	<h2 class="section__heading">Заказывайте мороженое<br />и получайте подарки!</h2>

	<ul class="section__body grid">
		{#each promotions as promotion}
			<Promotion tagName="li" {...promotion} />
		{/each}
	</ul>
</section>

<section class="section">
	<h2 class="section__heading">Попробуйте самые популярные<br />вкусы нашего мороженого</h2>

	<Catalog className="section__body" {goods} />
</section>

<section class="section section--accent">
	<h2 class="visually-hidden">О Глейси</h2>
	<p class="section__heading">
		Магазин Глейси – это онлайн и офлайн-магазин по продаже мороженого собственного производства на
		развес
	</p>

	<Characteristics className="section__body" {characteristics} />
</section>

<div class="grid">
	<Announce {...announce} />

	<Subscribe />
</div>

<Delivery />
