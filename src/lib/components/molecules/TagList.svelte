<script lang="ts">
	import Tag from '$lib/components/atoms/Tag.svelte';
	let { tags } = $props();
</script>

<ul>
	{#each tags as tag}
		<li><Tag {tag} /></li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		gap: 0.5rem;
		margin: 0;
		padding: 0;
		flex-wrap: wrap;
		margin-top: 1.5rem;
	}

	li {
		margin: 0;
		padding: 0;
		list-style: none;
	}
</style>
