<script context="module">
	import Socials from './socials.svelte';
</script>

<script>
	export let socials = [];
</script>

<footer class="page-footer">
	<Socials className="page-footer__socials" {socials} />
</footer>
