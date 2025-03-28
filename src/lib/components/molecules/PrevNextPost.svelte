<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { BlogMetadata } from '$lib/utils/types';

	export let currentPage: string;
	export let allPosts: BlogMetadata[];

	$: sortedPosts = [...allPosts].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	$: currentIndex = sortedPosts.findIndex((post) => post.slug === currentPage);

	$: prevPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null;
	$: nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null;
</script>

<div class="container">
	<div class="previousPost">
		{#if prevPost}
			<div class="arrow arrowPrevious">
				<Icon
					icon="ic:baseline-arrow-back"
					width="24"
					height="24"
					style="color: var(--color--text)"
				/>
				<a href="/blog/{prevPost.slug}">{prevPost.title}</a>
			</div>
		{:else}
			<h3 class="inactive">You are reading our most recent post.</h3>
		{/if}
	</div>

	<div class="nextPost">
		{#if nextPost}
			<div class="arrow arrowNext">
				<a href="/blog/{nextPost.slug}">{nextPost.title}</a>
				<Icon
					icon="ic:outline-arrow-forward"
					width="24"
					height="24"
					style="color: var(--color--text)"
				/>
			</div>
		{:else}
			<h3 class="inactive">You're up to date. More to come soon!</h3>
		{/if}
	</div>
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.container {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		font-size: 16px;
		border: 1px solid var(--color--border);
		padding-inline: 2.5rem;
		margin: 0 auto;
		margin-top: 2rem;

		@include bp.for-tablet-portrait-up {
			flex-direction: row;
		}
	}

	.nextPost,
	.previousPost {
		flex: 1;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}

	.nextPost {
		text-align: right;
	}

	.previousPost {
		text-align: left;
	}

	a {
		word-break: keep-all;
		color: var(--color--text);
	}

	.arrow {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.arrow a {
		color: var(--color--text);
	}

	.arrow a:hover {
		color: rgba(238, 134, 97, 1);
	}

	.arrowNext {
		justify-content: flex-end;
		color: var(--color--text);
	}

	.arrowPrevious {
		justify-content: flex-start;
	}

	.inactive {
		color: var(--color--text);
		font-size: 16px;
	}
</style>
