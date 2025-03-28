<script lang="ts">
	import TextBlock from '$lib/components/atoms/TextBlock.svelte';
	import HomeCard from '$lib/components/atoms/HomeCard.svelte';
	import HomeWrapper from '$lib/components/molecules/HomeWrapper.svelte';

	import Developing from '$lib/icons/developing.svelte';
	import Helping from '$lib/icons/helping.svelte';
	import Sharing from '$lib/icons/sharing.svelte';
	import Collaborating from '$lib/icons/collaborating.svelte';
</script>

<HomeWrapper>
	<div>
		<TextBlock
			heading={'This is what we do'}
			content={'With this in mind our team of software and business developers from around the world work together towards this goal. The four activities Nautilus Cyberneering involves in, create value and build towards our objectives following the Open Source philosophy.'}
		/>
	</div>
	<div class="cards">
		<HomeCard
			title={'Developing'}
			content={'We explore and build secure, automated software infrastructures for open source ecosystems with a focus on security, git and GitHub.'}
			svg={Developing}
		/>
		<HomeCard
			title={'Helping'}
			content={'We contribute to outside open source projects that we believe will create value for the community. We invest our time and money to help them grow.'}
			svg={Helping}
		/>
		<HomeCard
			title={'Sharing'}
			content={'We educate and share relevant information with the community through blog posts, technical articles, webinars, and information repositories.'}
			svg={Sharing}
		/>
		<HomeCard
			title={'Collaborating'}
			content={'Collaboration is the base of our work. In everything we do it is a core activity. Internally and externally without it nothing is possible.'}
			svg={Collaborating}
		/>
	</div>
</HomeWrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.cards {
		display: flex;
		flex-direction: column;
		margin: 3rem 1.5rem 0 1.5rem;
		gap: 1.5rem;
		max-width: 1200px;
	}

	@include bp.for-tablet-portrait-up {
		.cards {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, 1fr);
			grid-column-gap: 1.5rem;
			grid-row-gap: 1.5rem;
			padding: 1.5rem;
			margin: 3rem 1.5rem 0 1.5rem;
			background-color: var(--color--page-secondary);
			border: 1px solid var(--color--border);
		}
	}
</style>
