<script lang="ts">
	import type { BlogPost } from '$lib/utils/types';
	import BlogPreview from '$lib/components/molecules/BlogPreview.svelte';
	import SearchBar from '$lib/components/organisms/SearchBar.svelte';
	import HeroWrapper from '$lib/components/atoms/HeroWrapper.svelte';
	import Wrapper from '$lib/components/atoms/Wrapper.svelte';

	interface Props {
		data: {
			allPosts: BlogPost[];
		};
	}

	let { data }: Props = $props();
	let { allPosts: blogPosts = [] } = data || {};
	let searchTerm = $state('');

	type Post = {
		title: string;
		date: string;
		contributor: string;
		slug: string;
	};

	let posts = $state<Post[]>([]);

	if (blogPosts && blogPosts.length > 0) {
		posts = blogPosts.filter((post: BlogPost) => {
			const title = post?.title ?? '';
			const contributor = post?.contributor ?? '';
			const excerpt = post?.excerpt ?? '';

			return (
				title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				contributor.toLowerCase().includes(searchTerm.toLowerCase()) ||
				excerpt.toLowerCase().includes(searchTerm.toLowerCase())
			);
		});
	}
</script>

<Wrapper>
	<HeroWrapper title={'Blog'} />

	<div class="header">
		<SearchBar bind:searchTerm {blogPosts} />
	</div>

	{#if posts && posts.length > 0}
		<div class="grid">
			{#each posts as post}
				<BlogPreview post_data={post} />
			{/each}
		</div>
	{/if}
</Wrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.header {
		margin-top: 2rem;
	}

	.grid {
		display: grid;
		padding-top: 3rem;
		padding-inline: 2.5rem;
		grid-template-columns: 1fr 1fr;
		grid-gap: 24px;
		width: 100%;
		flex-grow: 1;

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
