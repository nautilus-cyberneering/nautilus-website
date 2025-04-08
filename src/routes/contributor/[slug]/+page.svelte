<script lang="ts">
	import type { PageData } from './$types';
	import BlogPreview from '$lib/components/molecules/BlogPreview.svelte';
	import HeroWrapper from '$lib/components/atoms/HeroWrapper.svelte';
	import Wrapper from '$lib/components/atoms/Wrapper.svelte';

	export let data: PageData;

	const { slug, posts } = data;

	function capitalizeWords(input: string): string {
		return input
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}

	const contributorName = capitalizeWords(slug);
</script>

<Wrapper>
	<HeroWrapper title={contributorName} />
	<p class="tag-count">
		We found <strong>{posts.length}</strong>
		{posts.length > 1 || posts.length === 0 ? 'posts' : 'post'} by
		<strong>{contributorName}</strong>
	</p>
	{#if posts.length === 0}
		<p class="no-posts-message">
			This author hasn't written any posts yet, but check back later for new content!
		</p>
		<a href="/blog" class="blog-link">Explore other blog posts</a>
	{/if}

	{#if posts.length > 0}
		<div class="grid">
			{#each posts as post}
				<BlogPreview post_data={post} />
			{/each}
		</div>
	{/if}
</Wrapper>

<style lang="scss">
	@use '$lib/scss/_breakpoints.scss' as bp;

	p {
		color: var(--text--color);
		text-align: center;
	}

	.tag-count {
		margin-top: 2rem;
	}

	.no-posts-message {
		padding: 1rem 2rem;
	}

	.blog-link {
		display: flex;
		justify-content: center;
		padding-bottom: 2rem;
	}

	.grid {
		padding-top: 3rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		max-width: 1200px;
		grid-gap: 24px;
		margin: 0 auto;
		padding-inline: 2rem;

		@include bp.for-phone-only {
			grid-template-columns: 1fr;
		}

		@include bp.for-tablet-landscape-up {
			grid-template-columns: 1fr 1fr;
		}

		@include bp.for-desktop-up {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
