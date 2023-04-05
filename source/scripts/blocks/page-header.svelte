<script context="module">
	import { getTelLink, getWordAfterNum } from '../common/utils.js';
	import { indexHref, isIndex, storedOffers } from '../common/stores.js';
	import Cart from './cart.svelte';
	import DropdownLinks from './dropdown-links.svelte';
	import Login from './login.svelte';
	import Popover from './popover.svelte';
	import Search from './search.svelte';

	const CART_WORDS = ['товар', 'товара', 'товаров'];
	const SERVICE_CLASS =
		'page-header__nav-link page-header__nav-link--service page-header__nav-link';
</script>

<script>
	export let goods = [],
		navLinks = [],
		tel = '';

	let cartTitle = '';

	$: cartTitle = `${$storedOffers.length || 'Нет'} ${getWordAfterNum(
		$storedOffers.length,
		CART_WORDS
	)}`;
</script>

<header class="page-header">
	<nav class="page-header__nav">
		<a class="page-header__logo-link" href={$indexHref} aria-current={$isIndex ? 'page' : null}>
			<img src="images/logo.svg" alt="Логотип Gllacy." width="137" height="56" />
		</a>

		<ul class="page-header__nav-list">
			{#each navLinks as { children = [], title, url }}
				<li class="page-header__nav-item">
					{#if children.length}
						<Popover className="page-header__nav-link" arrow={true} {title}>
							<DropdownLinks links={children} />
						</Popover>
					{:else}
						<a class="page-header__nav-link" href={url}>{title}</a>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>

	<ul class="page-header__services">
		<li>
			<a class="page-header__tel" href={getTelLink(tel)}>{tel}</a>
		</li>

		<li>
			<Popover className="{SERVICE_CLASS}--search" right title="Поиск" hideTitle>
				<Search />
			</Popover>
		</li>
		<li>
			<Popover className="{SERVICE_CLASS}--login" right bigShadow title="Вход">
				<Login />
			</Popover>
		</li>
		<li>
			<Popover className="{SERVICE_CLASS}--cart" right bigShadow title={cartTitle}>
				<Cart {goods} />
			</Popover>
		</li>
	</ul>
</header>
