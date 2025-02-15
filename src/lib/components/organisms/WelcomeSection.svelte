<script lang="ts">
	import TextBlock from '$lib/components/atoms/TextBlock.svelte';
	import HomeWrapper from '$lib/components/molecules/HomeWrapper.svelte';
	import WelcomeCard from '$lib/components/atoms/WelcomeCard.svelte';
	import { welcome } from '$lib/constants/constants';
</script>

<HomeWrapper>
	<div class="container">
		<div class="text-container">
			<TextBlock
				heading={'You are welcome'}
				content={'Whether you are a “rookie” or a “veteran” in the Open Source Realm, come join us on this big adventure.'}
			/>
		</div>
		<div class="card-container">
			{#each welcome as card}
				<WelcomeCard {card} />
			{/each}
		</div>
	</div>
</HomeWrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.container {
		background-color: rgba(245, 245, 245, 1);
		margin: 6rem auto 0;
		padding-bottom: 6rem;
		max-width: 100%;
	}

	.text-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.card-container {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin: 3rem 1.5rem 0 1.5rem;
	}

	@include bp.for-tablet-portrait-up {
		.card-container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
