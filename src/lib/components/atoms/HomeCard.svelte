<script lang="ts">
	import TagList from '$lib/components/molecules/TagList.svelte';
	let { title, content, svg, tags = [] } = $props();
	const SvgComponent = svg;
</script>

<div class="card">
	{#if SvgComponent}
		<span>
			<SvgComponent />
		</span>
	{/if}
	<h3>{title}</h3>
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
		background-color: rgba(250, 250, 250, 1);
		padding: 3rem;
		border: 1px solid rgba(212, 212, 212, 1);

		h3 {
			font-size: 30px;
			margin-block: 1.5rem 1rem;
		}

		p {
			font-size: 18px;
		}
	}
</style>
