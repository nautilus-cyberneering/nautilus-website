<script lang="ts">
	let { tag = 'Tag' } = $props();
</script>

<a href="/">
	{tag}
</a>

<style>
	a {
		color: var(--color--text-tag);
		padding: 4px 12px;
		background-color: var(--color--tag-background);
		border-radius: 50px;
	}
</style>
