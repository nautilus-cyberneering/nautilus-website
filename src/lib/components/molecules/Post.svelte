<script lang="ts">
	import Tag from '$lib/components/atoms/Tag.svelte';
	let {
		title,
		date,
		contributor,
		contributorSlug,
		tags,
		coverImage = '',
		categories,
		children
	} = $props();

	import { formatDate } from '$lib/utils/date';
	// import ShareButton from '$lib/components/singletons/ShareButton.svelte';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="container">
	<main>
		{#if coverImage}
			<img src={coverImage} alt={title} />
		{:else}
			<img src="/images/posts-cover-images/NautilusDefault.png" alt={title} />
		{/if}

		<div class="header">
			<h1>{title}</h1>
		</div>
		<div class="layout">
			{@render children()}
		</div>
		<div class="author-info">
			<div>
				Published {formatDate(date)}
				{#if contributor}
					<p>
						By <a class="author" href={'/contributor/' + contributorSlug}>{contributor}</a>
					</p>
				{/if}
			</div>
			<div class="labels">
				{#if tags.length}
					<div class="tags">
						<p>Tags:</p>
						{#each tags as tag}
							<Tag {tag} />
						{/each}
					</div>
				{/if}
				{#if categories.length}
					<div class="categories">
						<p>Categories:</p>
						{#each categories as category}
							<Tag {category} />
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</main>
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.container {
		color: rgba(82, 82, 82, 1);
		margin: 0 auto;
		line-height: 1.5rem;
		border-bottom: 1px solid transparent;

		img {
			max-height: 880px;
			margin: 0 auto;

			@include bp.for-desktop-up {
				width: 1200px;
			}
		}

		.header,
		.author-info {
			margin-inline: 1.5rem;

			@include bp.for-desktop-up {
				max-width: 872px;
				margin: 0 auto;
			}
		}

		.author-info {
			display: flex;
			flex-direction: column;
			margin-top: 2rem;
			padding-top: 1rem;
			border-top: 2px solid var(--color--border);
			color: var(--color--text);
		}

		.labels {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}

		.tags,
		.categories {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 10px;

			p {
				color: var(--color--text);
			}
		}

		@include bp.for-tablet-portrait-up {
			.author-info {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
		}

		h1 {
			margin-top: 4.5rem;
			font-size: 3rem;
			line-height: 1.2;
			color: var(--color--text);
		}

		.layout {
			margin: 1.5rem;

			@include bp.for-desktop-up {
				max-width: 872px;
				margin: 0 auto;
			}
		}
	}
</style>
