<script lang="ts">
	let { children } = $props();
</script>

<div class="container">
	{@render children()}
</div>

<style>
	.container {
		color: rgba(245, 245, 245, 0.96);
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 100vw;
		background-color: var(--color--page-background);
	}
</style>
