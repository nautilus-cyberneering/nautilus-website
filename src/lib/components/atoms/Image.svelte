<script lang="ts">
	let { children } = $props();
</script>

<div class="card">
	{@render children?.()}
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	@include bp.for-tablet-portrait-up {
		.card {
			background-color: rgba(245, 245, 245, 1);
			border: 1px solid rgba(212, 212, 212, 1);
			flex: 1;
			object-fit: cover;
		}
	}
</style>
