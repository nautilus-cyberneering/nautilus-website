<script lang="ts">
	import TextBlock from '$lib/components/atoms/TextBlock.svelte';
	import HomeWrapper from '$lib/components/molecules/HomeWrapper.svelte';
	// import WelcomeCard from '$lib/components/atoms/WelcomeCard.svelte';
	// import { welcome } from '$lib/constants/constants';
</script>

<HomeWrapper>
	<div class="container">
		<div class="text-container">
			<TextBlock
				heading={'You are welcome'}
				content={"You're welcome to contribute to our current project <a href='https://torrust.com/' target='_blank'>torrust.com</a>"}
			/>
		</div>
		<!-- <div class="card-container">
			{#each welcome as card}
				<WelcomeCard {card} />
			{/each}
		</div> -->
	</div>
</HomeWrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.container {
		background-color: var(--color--page-secondary);
		margin: 6rem auto 0;
		padding-bottom: 6rem;
		max-width: 100%;
	}

	.text-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* .card-container {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin: 3rem 1.5rem 0 1.5rem;

		@include bp.for-desktop-up {
			max-width: 1200px;
			margin: 0 auto;
			padding-top: 3rem;
		}
	}

	@include bp.for-tablet-portrait-up {
		.card-container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}
	} */
</style>
