<script lang="ts">
	let { children } = $props();
</script>

<div class="wrapper">
	{@render children()}
</div>

<style>
	.wrapper {
		background-color: rgba(250, 250, 250, 1);
	}
</style>
