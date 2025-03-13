<script lang="ts">
	import HeroWrapper from '$lib/components/atoms/HeroWrapper.svelte';
	import Wrapper from '$lib/components/atoms/Wrapper.svelte';
	import ProjectCard from '$lib/components/atoms/ProjectCard.svelte';
	import FeaturedProject from '$lib/components/molecules/FeaturedProject.svelte';
	import ProjectPreview from '$lib/components/atoms/ProjectPreview.svelte';
</script>

<Wrapper>
	<HeroWrapper title={'Projects'} />
	<div class="projects-wrapper">
		<div class="hero-text">
			<p>
				We work on both external and internal projects. External from customers and internal to
				realize our own ideas. On this page you will only find a reference to our internal public
				projects.
			</p>
			<p class="para-margin">We have three types of internal projects:</p>
		</div>
		<div class="project-cards">
			<ProjectCard
				title={'Vision'}
				timeFrame={'Long term (2-5 years)'}
				content={'Realize a product and/or service vision geared towards the community to cater to specific need, or interest.'}
			/>
			<ProjectCard
				title={'Stepping stone'}
				timeFrame={'Short term (3-9 months)'}
				content={'Create and test the necessary components for our long term projects.'}
			/>
			<ProjectCard
				title={'Spin-off'}
				timeFrame={'Short term (3-6 months)'}
				content={'Adapt projects where we see potential of immediate value creation for a more general use by the community.'}
			/>
		</div>
		<div class="project-info">
			<p>
				One of our lead values is to create immediate value with everything that we do, which is why
				Open-Source code is our approach. The code is available to anyone through public
				repositories on GitHub and we often enter into collaborations with other companies.
			</p>
			<p class="para-margin">
				If you are curious about our roadmap for the coming years and the individual Short-Term
				projects you can find it <a
					href="https://github.com/Nautilus-Cyberneering/ai_assistant_roadmap">here</a
				>.
			</p>
		</div>
		<div class="featured-project">
			<FeaturedProject />
		</div>
		<div class="project-preview-wrapper">
			<p>
				For a complete overview of all our repositories please feel free to browse <a
					href="https://github.com/Nautilus-Cyberneering"
					>our organization’s repositories on GitHub</a
				> or check our current most active projects below.
			</p>
			<div class="project-preview">
				<ProjectPreview title={'Page title'} url={'/'} />
				<ProjectPreview title={'Page title'} url={'/'} />
				<ProjectPreview title={'Page title'} url={'/'} />
			</div>
		</div>
	</div>
</Wrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.projects-wrapper {
		margin-top: 1.5rem;
		margin-inline: 1.5rem;
	}

	p {
		color: var(--color--text-secondary);
	}

	.para-margin {
		margin-top: 1.5rem;
	}

	.project-cards {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-top: 1.5rem;
	}

	.project-info {
		margin-top: 3rem;
	}

	.project-preview-wrapper {
		margin-top: 3rem;

		.project-preview {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 1.5rem;
			margin-top: 3rem;
		}

		@include bp.for-tablet-portrait-up {
			.project-preview {
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				grid-template-rows: repeat(2, 1fr);
				grid-column-gap: 1.5rem;
				grid-row-gap: 1.5rem;

				:global(> :nth-child(1)) {
					grid-area: 1 / 1 / 2 / 3;
				}
				:global(> :nth-child(2)) {
					grid-area: 1 / 3 / 2 / 5;
				}
				:global(> :nth-child(3)) {
					grid-area: 2 / 2 / 3 / 4;
				}
			}
		}

		@include bp.for-desktop-up {
			.project-preview {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;
				max-width: 776px;
				margin: 0 auto;
				padding-block: 3rem 6rem;
			}
		}
	}

	@include bp.for-tablet-portrait-up {
		.project-cards {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: repeat(2, 1fr);
			grid-column-gap: 1.5rem;
			grid-row-gap: 1.5rem;

			:global(> :nth-child(1)) {
				grid-area: 1 / 1 / 2 / 3;
			}
			:global(> :nth-child(2)) {
				grid-area: 1 / 3 / 2 / 5;
			}
			:global(> :nth-child(3)) {
				grid-area: 2 / 2 / 3 / 4;
			}
		}
	}

	@include bp.for-desktop-up {
		.hero-text,
		.project-info,
		.featured-project,
		.project-preview-wrapper p {
			max-width: 776px;
			margin: 0 auto;
		}

		.featured-project {
			max-width: 872px;
		}

		.project-cards {
			display: flex;
			flex-direction: row;
			margin-block: 3rem;
		}
	}
</style>
