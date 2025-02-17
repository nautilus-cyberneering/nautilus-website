<script lang="ts">
	import ArticleCard from '$lib/components/atoms/ArticleCard.svelte';
	import HomeWrapper from '$lib/components/molecules/HomeWrapper.svelte';
</script>

<HomeWrapper>
	<div class="article">
		<h2>Latest articles</h2>
		<div class="article-wrapper">
			<ArticleCard />
			<ArticleCard />
			<ArticleCard />
		</div>
	</div>
	<a href="/">View all articles</a>
</HomeWrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.article {
		text-align: left;

		h2 {
			text-align: center;
			margin-top: 6rem;
		}
	}

	.article-wrapper {
		display: flex;
		flex-direction: column;
		margin: 3rem 1.5rem 0 1.5rem;
		gap: 1.5rem;
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
