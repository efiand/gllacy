<script context="module">
	import Picture from './picture.svelte';
	import { storedOffers } from '../common/stores.js';
</script>

<script>
	export let className = '',
		goods = [];

	const addOffer = (id) => {
		const newOffers = $storedOffers.slice();
		const targetOffer = newOffers.find((offer) => offer.id === id);

		if (targetOffer) {
			targetOffer.quantity++;
		} else {
			newOffers.push({ id, quantity: 1 });
		}

		storedOffers.set(newOffers);
	};
</script>

<ul class="catalog {className}">
	{#each goods as { description, id, price, title }}
		<li class="catalog__card">
			<h3 class="catalog__title">{title}</h3>

			<Picture
				className="catalog__picture"
				extname="png"
				filename="good-{id}"
				width="168"
				height="168"
				alt="Изображение мороженого «{title}»."
			/>

			<p class="catalog__description">{@html description}</p>

			<div class="catalog__footer">
				<p class="catalog__price">{price} ₽/кг</p>

				<button class="catalog__cart" type="button" on:click={() => addOffer(id)}>
					<span class="visually-hidden">Добавить в корзину</span>
				</button>
			</div>
		</li>
	{/each}
</ul>
