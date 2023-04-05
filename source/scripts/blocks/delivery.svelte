<script context="module">
	import Tooltip from './tooltip.svelte';
</script>

<section class="delivery">
	<div class="delivery__content">
		<h2 class="delivery__title">Доставка любимого мороженого на дом</h2>
		<p class="delivery__text">
			Хочется полакомиться любимым десертом, но&nbsp;нет времени съездить в магазин? Закажите
			доставку мороженого на дом, и курьер привезёт вам ваш заказ в течение часа!
		</p>
	</div>

	<form class="delivery__form" action="https://echo.htmlacademy.ru" method="post">
		<p class="delivery__text">
			Укажите адрес и дату доставки, и мы свяжемся с&nbsp;вами, чтобы подтвердить заказ.
		</p>

		<p class="delivery__field-group field-group">
			<span class="field-group__text">
				<label class="field-group__label" for="field-delivery-date">Дата</label>
				<Tooltip className="delivery__tooltip" id="delivery-date">
					Укажите желаемую дату доставки
				</Tooltip>
			</span>
			<input
				class="field-group__field field"
				id="field-delivery-date"
				name="date"
				type="text"
				placeholder="01.04.2020"
				required
			/>
		</p>

		<p class="delivery__field-group delivery__field-group--2 field-group">
			<label class="field-group__label" for="field-delivery-tel">Телефон</label>
			<input
				class="field-group__field field"
				id="field-delivery-tel"
				name="tel"
				type="tel"
				placeholder="+7 800 999-00-00"
				required
			/>
		</p>

		<p class="delivery__field-group delivery__field-group--3 field-group">
			<span class="field-group__text">
				<label class="field-group__label" for="field-delivery-address">Адрес</label>
				<Tooltip className="delivery__tooltip" id="delivery-address">
					Введите название улицы, дома и квартиры
				</Tooltip>
			</span>
			<input
				class="field-group__field field"
				id="field-delivery-address"
				name="address"
				type="text"
				placeholder="ул. Большая Конюшенная, 19/8"
			/>
		</p>

		<button class="delivery__submit button button--primary" type="submit">Отправить</button>
	</form>
</section>
