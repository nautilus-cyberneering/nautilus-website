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
		<p>
			We work on both external and internal projects. External from customers and internal to
			realize our own ideas. On this page you will only find a reference to our internal public
			projects.
		</p>
		<p class="para-margin">We have three types of internal projects:</p>
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
		<FeaturedProject />
		<div class="project-preview-wrapper">
			<p>
				For a complete overview of all our repositories please feel free to browse <a
					href="https://github.com/Nautilus-Cyberneering"
					>our organization’s repositories on GitHub</a
				> or check our current most active projects below.
			</p>
			<div class="project-preview">
				<ProjectPreview title={'Page title'} url={'url'} image={''} />
				<ProjectPreview title={'Page title'} url={'url'} image={''} />
				<ProjectPreview title={'Page title'} url={'url'} image={''} />
			</div>
		</div>
	</div>
</Wrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.projects-wrapper {
		margin: 0 auto;
		padding-top: 1.5rem;
		max-width: 400px;

		@include bp.for-tablet-portrait-up {
			max-width: 720px;
		}

		@include bp.for-desktop-up {
			max-width: 1200px;
			margin: 0 auto;
		}
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
		margin-top: 2rem;

		@include bp.for-desktop-up {
			max-width: 1200px;
			padding-top: 2rem;
			margin: 0 auto;
		}
	}

	.project-info {
		margin-top: 3rem;
	}

	.project-preview-wrapper {
		margin-top: 2rem;
	}

	.project-preview {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 2rem;
		gap: 1rem;
	}
</style>
