<script lang="ts">
	let { tag = 'Tag' } = $props();
</script>

<a href="/">
	{tag}
</a>

<style>
	a {
		color: rgba(82, 82, 82, 1);
		padding: 4px 12px;
		background-color: rgba(229, 229, 229, 1);
		border-radius: 50px;
	}
</style>
