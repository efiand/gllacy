<script context="module">
	import { storedOffers, storedPageName } from '../common/stores.js';
	import CatalogPage from './catalog-page.svelte';
	import ErrorPage from './error-page.svelte';
	import IndexPage from './index-page.svelte';
	import PageFooter from './page-footer.svelte';
	import PageHeader from './page-header.svelte';

	const Component = {
		'404.html': ErrorPage,
		'catalog.html': CatalogPage,
		'index.html': IndexPage
	};
</script>

<script>
	export let appData = {};

	let { error, offers, pageDescription, pageName, pageTitle } = appData;
	let title = `Gllacy${pageTitle ? ` : ${pageTitle}` : ''}`;

	storedOffers.set(offers);
	storedPageName.set(pageName);
</script>

<svelte:head>
	<title>{title}</title>
	{#if pageDescription}
		<meta name="description" content={pageDescription} />
	{/if}
</svelte:head>

<PageHeader {...appData} />

<main class="page__main">
	{#if error}
		<ErrorPage {...appData} />
	{:else}
		<svelte:component this={Component[pageName]} {...appData} />
	{/if}
</main>

<PageFooter {...appData} />
