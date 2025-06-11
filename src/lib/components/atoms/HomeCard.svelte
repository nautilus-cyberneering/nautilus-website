<script lang="ts">
	import TagList from '$lib/components/molecules/TagList.svelte';
	let {
		title,
		content,
		svg,
		tags = [],
		link1 = '',
		link1Text = '',
		link2 = '',
		link2Text = ''
	} = $props();
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
	{#if tags.length}
		<TagList {tags} />
	{/if}
	{#if link1 && link2}
		<div class="links">
			<div>
				<a href={link1} class="link" target="_blank">{link1Text}</a>
			</div>
			<div>
				<a href={link2} class="link" target="_blank">{link2Text}</a>
			</div>
		</div>
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
			font-size: 30px;
			margin-block: 1.5rem 1rem;
			color: var(--color--text);
		}

		p {
			font-size: 18px;
			color: var(--color--text-secondary);
		}

		.links {
			display: flex;
			justify-content: space-between;
			width: 100%;
			padding-top: 1rem;

			div {
				color: var(--color--text-tag);
				padding: 4px 12px;
				background-color: var(--color--tag-background);
				border-radius: 50px;
			}
		}
	}
</style>
