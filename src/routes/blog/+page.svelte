<script lang="ts">
	// import Wrapper from '$lib/components/atoms/Wrapper.svelte';
	// import HeroWrapper from '$lib/components/atoms/HeroWrapper.svelte';

	import type { BlogPost } from '$lib/utils/types';
	import BlogPreview from '$lib/components/molecules/BlogPreview.svelte';
	// import SearchBar from '$lib/components/organisms/SearchBar.svelte';

	interface Props {
		data: {
			allPosts: BlogPost[];
		};
	}

	let { data }: Props = $props();
</script>

<div class="container">
	<div class="header">
		<h1>Blog</h1>
	</div>

	{#if data.allPosts && data.allPosts.length > 0}
		<div class="grid">
			{#each data.allPosts as post}
				<BlogPreview post_data={post} />
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		padding-top: 3rem;
		background: var(--color--page-background);
		color: var(--color--text);
		padding-bottom: 64px;

		@include bp.for-desktop-up {
			max-width: 1176px;
		}
	}

	.header {
		margin: 0 auto;

		@include bp.for-tablet-portrait-up {
			width: 700px;
		}

		@include bp.for-desktop-up {
			width: 1100px;
		}

		h1 {
			padding-bottom: 1rem;
			font-size: 36px;
			color: var(--font-color);

			@include bp.for-tablet-portrait-up {
				padding-bottom: 0px;
			}
		}

		@include bp.for-tablet-portrait-up {
			display: flex;
			justify-content: space-between;
		}
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
