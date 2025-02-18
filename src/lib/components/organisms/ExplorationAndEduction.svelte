<script lang="ts">
	import TextBlock from '$lib/components/atoms/TextBlock.svelte';
	import HomeWrapper from '$lib/components/molecules/HomeWrapper.svelte';
	import RepoCards from '$lib/components/atoms/RepoCards.svelte';
</script>

<HomeWrapper>
	<TextBlock
		heading={'Exploration and education'}
		content={'Much of our work involves exploration. We look for tools and ways to build the components that we need to develop our projects. Along this path we gain deep understanding of existing technologies and tools which we then share. This exercise allows us to test our understanding of the technology.'}
	/>
	<h3>Repositories</h3>
	<div class="repo-wrapper">
		<RepoCards
			title={'Secure GIT Guide'}
			content={'Learn how to use GIT securely in development work, with articles covering GPG keys, signature user, best practices and more.'}
			tags={['GIT', 'Open source', 'In-house project']}
		/>
		<RepoCards
			title={'Open Source'}
			content={'Learn all you need to start your own Open Source project or begin contributing to one, with links, examples, templates, etc.'}
			tags={['GIT', 'Open source', 'In-house project']}
		/>
	</div>
</HomeWrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	h3 {
		margin-top: 3rem;
		font-size: 36px;
	}

	.repo-wrapper {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin: 3rem 1.5rem 0 1.5rem;
	}

	@include bp.for-tablet-portrait-up {
		.repo-wrapper {
			flex-direction: row;
		}
	}
</style>
