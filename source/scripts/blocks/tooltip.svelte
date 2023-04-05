<script>
	export let className = '',
		id = '';
</script>

<span class="tooltip {className}">
	<button class="tooltip__toggle" type="button" aria-labelledby="tooltip-{id}">
		<span class="visually-hidden">Подробнее</span>
	</button>
	<span class="tooltip__text" role="tooltip" id="tooltip-{id}">
		<slot />
	</span>
</span>
