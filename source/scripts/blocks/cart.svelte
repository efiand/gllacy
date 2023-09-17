<script context="module">
	import Picture from './picture.svelte';
	import { storedOffers } from '../common/stores.js';
</script>

<script>
	export let goods = [];
	let price = 0;

	$: price = $storedOffers.reduce(
		(cost, { id, quantity }) => cost + quantity * goods[id - 1].price,
		0
	);

	const deleteOffer = (id) => {
		storedOffers.set($storedOffers.filter((offer) => offer.id !== id));
	};
</script>

{#if $storedOffers.length}
	<form class="cart" action="https://echo.htmlacademy.ru">
		<p class="cart__title">Корзина</p>

		<table class="cart__offers">
			<thead class="visually-hidden">
				<tr>
					<th scope="col">Изображение</th>
					<th scope="col">Характеристики</th>
					<th scope="col">Стоимость</th>
					<th scope="col">Удалить</th>
				</tr>
			</thead>

			<tbody>
				{#each $storedOffers as { id, quantity }}
					{@const good = goods[id - 1]}

					<tr class="cart__row">
						<td class="cart__cell cart__cell--picture">
							<Picture
								filename="good-{id}"
								width="46"
								height="46"
								alt="Изображение мороженого «{good.title}»."
							/>
						</td>
						<td class="cart__cell">
							{good.title}
							<p class="cart__small">{quantity.toString().replace('.', ',')} кг х {good.price} ₽</p>
						</td>
						<td class="cart__cell cart__cell--price">{quantity * good.price} ₽</td>
						<td class="cart__cell cart__cell--delete">
							<input type="hidden" name="offers[]" value="[{id},{quantity}]" />

							<button
								class="cart__delete"
								type="submit"
								name="delete"
								value={id}
								on:click|preventDefault={() => deleteOffer(id)}
							>
								<span class="visually-hidden">Удалить товар из корзины</span>
							</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>

		<div class="cart__footer">
			<button class="button button--primary" type="submit">Оформить заказ</button>

			<p class="cart__note">Итого: {price}&nbsp;₽</p>
		</div>
	</form>
{:else}
	<p class="cart cart--empty">Ваша корзина пока пуста</p>
{/if}
