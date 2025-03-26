<script lang="ts">
	let { url } = $props();
	import QrCode from './QrCode.svelte';
</script>

<div class="wrapper">
	<QrCode {url} />
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.wrapper {
		display: flex;
		flex-direction: column;
		background-color: var(--color--page-background);
		margin-top: 2rem;

		@include bp.for-desktop-up {
			flex-direction: row;
		}
	}
</style>
