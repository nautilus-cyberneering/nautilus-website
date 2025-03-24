<script lang="ts">
	// re-add slug, contributor, contributorSlug and tags
	let { title, date, coverImage, children } = $props();

	import { formatDate } from '$lib/utils/date';
	// import Image from '$lib/components/atoms/Image.svelte';
	// import ShareButton from '$lib/components/singletons/ShareButton.svelte';
	// import Tag from '$lib/components/atoms/Tag.svelte';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="container">
	<main>
		<article>
			<img src={coverImage} alt={title} />
			<div class="header">
				<!-- {#if tags.length}
					<div class="tags">
						{#each tags as tag}
							<Tag {tag}>
								{tag}
							</Tag>
						{/each}
					</div>
				{/if} -->
				<h1>{title}</h1>
				<div class="note">
					<div>
						<!-- {#if contributor}
							<a class="author" href={'/contributor/' + contributorSlug}>{contributor}</a>
							-
						{/if} -->
						{formatDate(date)}
					</div>
					<!-- <ShareButton {slug} {title} /> -->
				</div>
			</div>
			<div class="layout">
				{@render children()}
			</div>
		</article>
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
			width: 100%;
			max-height: 880px;
		}

		.header {
			margin-inline: 1.5rem;

			@include bp.for-desktop-up {
				max-width: 872px;
				margin: 0 auto;
			}
		}

		h1 {
			margin-top: 4.5rem;
			font-size: 3rem;
			line-height: 1.2;
			color: var(--color--text);
		}

		.note {
			color: var(--color--text-secondary);
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
