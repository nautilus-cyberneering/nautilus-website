<script lang="ts">
	import '$lib/scss/global.scss';
	import '../app.css';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />