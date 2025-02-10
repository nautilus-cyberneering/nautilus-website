<script lang="ts">
	import TextBlock from '$lib/components/atoms/TextBlock.svelte';
	import HomeCard from '$lib/components/atoms/HomeCard.svelte';
	import HomeWrapper from '$lib/components/molecules/HomeWrapper.svelte';
	let { cardInfo } = $props();
</script>

<HomeWrapper>
	<div>
		<TextBlock
			heading={'This is what we do'}
			content={'With this in mind our team of software and business developers from around the world work together towards this goal. The four activities Nautilus Cyberneering involves in, create value and build towards our objectives following the Open Source philosophy.'}
		/>
	</div>
	<div class="cards">
		{#if cardInfo.length > 0}
			{#each cardInfo as card}
				<HomeCard {card} />
			{/each}
		{/if}
	</div>
</HomeWrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.cards {
		display: flex;
		flex-direction: column;
		margin: 3rem 1.5rem 0 1.5rem;
		gap: 1.5rem;
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
			background-color: rgba(245, 245, 245, 1);
			border: 1px solid rgba(212, 212, 212, 1);
		}
	}
</style>
