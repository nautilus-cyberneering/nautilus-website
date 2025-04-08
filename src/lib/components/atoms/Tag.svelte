<script lang="ts">
	let { tag, category } = $props<{ tag?: string; category?: string }>();

	let value = tag || category;
	let type = tag ? 'tags' : category ? 'categories' : null;
</script>

{#if value && type}
	<a href="/{type}/{value}">
		{value}
	</a>
{/if}

<style>
	a {
		color: var(--color--text-tag);
		padding: 4px 12px;
		background-color: var(--color--tag-background);
		border-radius: 50px;
	}
</style>
