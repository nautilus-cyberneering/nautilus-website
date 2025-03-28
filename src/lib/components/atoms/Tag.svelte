<script lang="ts">
	let { tag } = $props();
</script>

<a href="/tags/{tag}">
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
