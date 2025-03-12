<script lang="ts">
	let { children } = $props();
</script>

<div class="wrapper">
	{@render children()}
</div>

<style>
	.wrapper {
		background-color: var(--color--page-background);
	}
</style>
