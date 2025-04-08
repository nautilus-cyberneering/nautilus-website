<script lang="ts">
	import { page } from '$app/state';
	import type { BlogPost } from '$lib/utils/types';
	import TagCard from '$lib/components/molecules/TagCard.svelte';
	import HeroWrapper from '$lib/components/atoms/HeroWrapper.svelte';
	import Wrapper from '$lib/components/atoms/Wrapper.svelte';

	const categoryId = page.params.categoryId;
	const blogPosts: BlogPost[] = page.data.posts;

	$: postsWithCategories = blogPosts.filter((post) => post?.tags?.includes(categoryId));
</script>

<Wrapper>
	{#if blogPosts && blogPosts.length}
		<HeroWrapper title={categoryId} />
		<div class="container">
			<p class="tag-count">
				We found <strong>{postsWithCategories.length}</strong>
				{postsWithCategories.length > 1 ? 'posts' : 'post'} with the category
				<strong>{categoryId}</strong>
			</p>
			{#each blogPosts as post}
				{#if post?.tags}
					{#if post.tags && post.tags.includes(categoryId)}
						<TagCard
							title={post?.title || 'Default title'}
							coverImage={post?.coverImage || '/images/posts-cover-images/NautilusDefault.png'}
							slug={post?.slug || 'Default slug'}
							excerpt={post?.excerpt || 'Default excerpt'}
							date={post?.date || 'Default date'}
						/>
					{/if}
				{/if}
			{/each}
		</div>
	{/if}
</Wrapper>

<style lang="scss">
	.container {
		max-width: 800px;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin: 0 auto;
		padding-inline: 2.5rem;
		padding-top: 2rem;

		p {
			text-align: center;
			color: var(--color--text);
		}
	}
</style>
