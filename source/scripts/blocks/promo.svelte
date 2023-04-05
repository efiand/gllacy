<script context="module">
	import Picture from './picture.svelte';
	import Socials from './socials.svelte';
	import { fade } from 'svelte/transition';
</script>

<script>
	export let promoGoods = [],
		socials = [];

	let index = 0;
	let prevIndex = promoGoods.length - 1;
	let nextIndex = 1;

	$: {
		prevIndex = (index === 0 ? promoGoods.length : index) - 1;
		nextIndex = index === promoGoods.length - 1 ? 0 : index + 1;

		if (typeof document !== 'undefined') {
			document.body.style.setProperty('--page-bg-color', promoGoods[index].color);
		}
	}
</script>

<section class="promo">
	<h2 class="visually-hidden">Лучшие вкусы</h2>

	<ul class="promo__list">
		{#each promoGoods as { id, description, title }, i}
			{#if i === index}
				<li class="promo__item" transition:fade>
					<div class="promo__content">
						<h3 class="promo__title">{@html title}</h3>

						<p class="promo__description">{@html description}</p>

						<a class="promo__button button" href="#!">Заказать</a>
					</div>

					<Picture
						className="promo__picture"
						filename="promo-{id}"
						extname="png"
						width="323"
						height="507"
						alt="Изображение мороженого № {id}."
					/>
				</li>
			{/if}
		{/each}
	</ul>

	<button class="promo__ring promo__ring--prev" type="button" on:click={() => (index = prevIndex)}>
		<span class="visually-hidden">К слайду № {prevIndex + 1}</span>
	</button>
	<button class="promo__ring promo__ring--next" type="button" on:click={() => (index = nextIndex)}>
		<span class="visually-hidden">К слайду № {nextIndex + 1}</span>
	</button>

	<ul class="promo__tiles">
		{#each [...promoGoods.slice(index + 1), ...promoGoods.slice(0, index)] as { id }, i}
			<li>
				<button
					class="promo__tile promo__tile--{id}"
					type="button"
					on:click={() => (index = id - 1)}
				>
					<span class="visually-hidden">К слайду № {id}</span>
				</button>
			</li>
		{/each}
	</ul>

	<ul class="promo__pager">
		{#each promoGoods as { id }, i}
			<li>
				<button
					class="promo__pager-item {i === index ? 'promo__pager-item--current' : ''}"
					type="button"
					on:click={() => (index = i)}
				>
					<span class="visually-hidden">К слайду № {id}</span>
				</button>
			</li>
		{/each}
	</ul>

	<Socials className="promo__socials" {socials} />
</section>
