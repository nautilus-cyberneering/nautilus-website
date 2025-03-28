<script lang="ts">
	// import ArticleCard from '$lib/components/atoms/ArticleCard.svelte';
	import HomeWrapper from '$lib/components/molecules/HomeWrapper.svelte';
	import type { BlogPost } from '$lib/utils/types';
	import BlogPreview from '$lib/components/molecules/BlogPreview.svelte';

	interface Props {
		data: {
			allPosts: BlogPost[];
		};
	}

	let { data }: Props = $props();
</script>

<HomeWrapper>
	<div class="article">
		<h2>Latest articles</h2>
		{#if data.allPosts && data.allPosts.length > 0}
			<div class="article-wrapper">
				{#each data.allPosts as post}
					<BlogPreview post_data={post} />
				{/each}
			</div>
		{/if}
	</div>
	<a href="/blog">View all articles</a>
</HomeWrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.article {
		text-align: left;

		h2 {
			text-align: center;
			margin-top: 6rem;
			color: var(--color--text);
		}
	}

	.article-wrapper {
		display: flex;
		flex-direction: column;
		margin: 3rem 1.5rem 0 1.5rem;
		gap: 1.5rem;
		max-width: 1200px;
	}

	a {
		color: rgba(238, 134, 97, 1);
		display: block;
		text-align: center;
		margin-top: 3rem;
	}

	@include bp.for-tablet-portrait-up {
		.article-wrapper {
			flex-direction: row;
		}
	}
</style>
