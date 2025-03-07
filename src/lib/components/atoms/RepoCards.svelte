<script lang="ts">
	import TagList from '$lib/components/molecules/TagList.svelte';
	import ExternalRepo from '$lib/icons/externalRepo.svelte';

	let { title, content, tags } = $props();
</script>

<div class="card">
	<div class="title-wrapper">
		<h3>{title}</h3>
		<ExternalRepo />
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
		background-color: rgba(245, 245, 245, 1);
		padding: 3rem;
		border: 1px solid rgba(212, 212, 212, 1);

		h3 {
			font-size: 1.5rem;
		}

		p {
			margin-top: 1rem;
			line-height: 1.5rem;
		}

		.title-wrapper {
			display: flex;
			justify-content: space-between;
			width: 100%;
		}
	}
</style>
