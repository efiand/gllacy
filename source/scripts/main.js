import App from './apps/page.js';

new App({
	hydrate: true,
	props: { appData: window.appData.page },
	target: document.querySelector('.page')
});
