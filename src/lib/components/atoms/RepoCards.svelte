<script lang="ts">
	import TagList from '$lib/components/molecules/TagList.svelte';
	import ExternalRepo from '$lib/icons/externalRepo.svelte';

	let { title, content, tags, repo } = $props();
</script>

<div class="card">
	<div class="title-wrapper">
		<h3>{title}</h3>
		<a href={repo} target="_blank">
			<ExternalRepo />
		</a>
	</div>
	<p>{content}</p>
	{#if tags}
		<TagList {tags} />
	{/if}
</div>

<style lang="scss">
	.card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
		background-color: var(--color--page-background);
		padding: 3rem;
		border: 1px solid var(--color--border);

		h3 {
			font-size: 1.5rem;
			color: var(--color--text);
		}

		p {
			margin-top: 1rem;
			line-height: 1.5rem;
			color: var(--color--text-secondary);
		}

		.title-wrapper {
			display: flex;
			justify-content: space-between;
			width: 100%;
		}
	}
</style>
