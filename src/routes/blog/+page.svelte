<script lang="ts">
	import { postsMetadata } from '$lib/data/postMetadata';
	import Wrapper from '$lib/components/atoms/Wrapper.svelte';
	import HeroWrapper from '$lib/components/atoms/HeroWrapper.svelte';
	// import Tag from '$lib/components/atoms/Tag.svelte';
	import TagList from '$lib/components/molecules/TagList.svelte';

	let allPosts = Object.values(postsMetadata);
	let filteredPosts = allPosts;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<Wrapper>
	<HeroWrapper title={'Blog'} />
	<div class="grid">
		{#each filteredPosts as post}
			<div class="grid-item">
				<a href="/blog/{post.slug}">
					{#if post.coverImage}
						<div class="container">
							<img src={post.coverImage} alt={post.title} />
							<div class="text-container">
								<h2>{post.title}</h2>
								{#if post.excerpt}
									<p>{post.excerpt}</p>
									<!-- {:else}
                                    <p>{formattedDate}</p> -->
								{/if}
							</div>
						</div>
					{/if}
				</a>
				{#if post.tags.length > 0}
					<div class="tags">
						<TagList tags={post.tags} />
					</div>
				{/if}
			</div>
		{/each}
	</div>
</Wrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		margin: 3rem 1.5rem 0 1.5rem;

		.grid-item {
			background-color: var(--color--page-background);
			border: 1px solid var(--color--border);
		}

		img {
			width: 100%;
			height: 176px;
			object-fit: cover;
		}

		.text-container {
			padding: 1.5rem 1.5rem 0 1.5rem;

			h2 {
				color: var(--color--text);
			}

			p {
				color: var(--color--text-secondary);
			}
		}

		.tags {
			padding: 0 1.5rem 1.5rem 1.5rem;
		}

		@include bp.for-tablet-portrait-up {
			grid-template-columns: repeat(2, 1fr);
		}

		@include bp.for-desktop-up {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
