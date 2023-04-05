import { derived, writable } from 'svelte/store';

export const storedOffers = writable([]);
export const storedPageName = writable('index.html');

export const isIndex = derived(
	storedPageName,
	($storedPageName) => $storedPageName === 'index.html'
);
export const indexHref = derived(isIndex, ($isIndex) => ($isIndex ? null : 'index.html'));
