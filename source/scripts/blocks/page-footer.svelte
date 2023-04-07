<script context="module">
	import Socials from './socials.svelte';
</script>

<script>
	export let footerLinks = [],
		socials = [];
</script>

<footer class="page-footer">
	<Socials className="page-footer__socials" {socials} />

	<ul class="page-footer__list">
		{#each footerLinks as { fav = false, title, url }}
			<li class="page-footer__item">
				<a class="page-footer__link {fav ? 'page-footer__link--fav' : ''}" href={url}>{title}</a>
			</li>
		{/each}
	</ul>

	<p class="page-footer__copyright">
		<a class="page-footer__logo-link" href="https://htmlacademy.ru">
			<img
				class="page-footer__logo"
				src="images/logo-htmlacademy.svg#logo"
				width="93"
				height="27"
				alt="Логотип HTML Academy"
			/>
		</a>

		Сделано в <a class="page-footer__copyright-link" href="https://htmlacademy.ru">.html academy</a>
		© 2021
	</p>
</footer>
