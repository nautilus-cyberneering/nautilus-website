<script lang="ts">
	import DefaultNautilus from '$lib/icons/defaultNautilus.svelte';
	import DefaultNautilusDark from '$lib/icons/defaultNautilusDark.svelte';
	import { theme } from '$lib/stores/theme';
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
	const displayImage = coverImage.trim() !== '' ? coverImage : DefaultNautilus;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="container">
	<main>
		{#if displayImage === coverImage}
			<img src={displayImage} alt={title} />
		{:else}
			<div class="default-cover-image">
				{#if $theme === 'dark'}
					<DefaultNautilusDark />
				{:else}
					<DefaultNautilus />
				{/if}
			</div>
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
						<span>{tags.join(', ')}</span>
					</div>
				{/if}

				{#if categories.length}
					<div class="categories">
						<p>Categories:</p>
						<span>{categories.join(', ')}</span>
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

		.default-cover-image {
			display: flex;
			justify-content: center;
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
		}

		.tags span,
		.categories span {
			margin-left: 8px;
		}

		.tags {
			display: flex;
			flex-direction: row;
		}

		.categories {
			display: flex;
			flex-direction: row;
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
