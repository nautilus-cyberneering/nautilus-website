<script lang="ts">
	import AboutCard from '$lib/components/atoms/AboutCard.svelte';
	import HeroWrapper from '$lib/components/atoms/HeroWrapper.svelte';
	import Globe from '$lib/icons/globe.svelte';
	import MultipleUser from '$lib/icons/multipleUser.svelte';
	import Handshake from '$lib/icons/handshake.svelte';
	import Wrapper from '$lib/components/atoms/Wrapper.svelte';
</script>

<Wrapper>
	<HeroWrapper title={'About our team'} />
	<div class="about-wrapper">
		<div class="about-section-flex">
			<AboutCard
				title={'What makes us tick'}
				content={'Things that define us as a team are our constant strive to learn and improve ourselves as people but also that we believe that all we do has an impact on others and our planet. We are convinced of technology’s great potential and value for individuals as well as companies.'}
				extraContent={''}
			/>
			<AboutCard
				title={'What we care for'}
				content={'We care for people, transparency, learning, sharing of knowledge, the responsible use and free availability of software and technology in addition to nature.'}
				extraContent={''}
			/>
		</div>
		<div class="about-section-flex">
			<AboutCard
				title={'Where we come from'}
				content={'We come from different professional backgrounds and countries. Most of us are developers but some of us are not. We all believe in software and its importance for our future.'}
				extraContent={''}
			/>
			<img src="images/team.png" alt="nautilus team" />
		</div>
		<div class="about-section-grid">
			<AboutCard
				title={'Working remotely around the globe'}
				content={'We have team members from Australia, Germany and Spain working all remotely together from places as far as Hong Kong.'}
				svg={Globe}
				extraContent={''}
			/>
			<AboutCard
				title={'A team that spans beyond definition'}
				content={'We consider anyone participating in our projects part of our team, no matter if they are employees or contributors.'}
				svg={MultipleUser}
				extraContent={''}
			/>
			<AboutCard
				title={'Collaborating with other companies'}
				content={'We have collaborated with other companies, such as Ethical Software Limited and Edataconsulting.'}
				svg={Handshake}
				extraContent={''}
			/>
			<AboutCard
				title={'Where we are'}
				content={"We're diving into the roots of decentralization by learning from protocols like BitTorrent. Instead of chasing trends, we're rebuilding what already works—peer-to-peer sharing, distributed indexes, and open standards—with modern tools and clean design."}
				extraContent={"We're creating open-source services and libraries that improve the BitTorrent ecosystem, making it easier to host, share, and discover content without relying on central platforms."}
			/>
			<AboutCard
				title={'Where we are headed'}
				content={"We're working to bring new life to proven decentralized tech. That means adding versioning, improving indexing, and building APIs that make it easier to create reliable peer-to-peer apps."}
				extraContent={'Our mission is to help shape a more open, resilient internet—one where control stays with the community, not the server.'}
			/>
		</div>
	</div>
</Wrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.about-wrapper {
		margin-top: 3rem;
		margin-inline: 1.5rem;

		@include bp.for-tablet-portrait-up {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		@include bp.for-desktop-up {
			max-width: 1200px;
			margin: 0 auto;
		}
	}

	.about-section-flex {
		display: flex;
		flex-direction: column;
		margin-top: 1.5rem;
		gap: 1.5rem;

		> * {
			width: 100%;
		}

		@include bp.for-tablet-portrait-up {
			flex-direction: row;
			align-items: stretch;

			> * {
				flex: 1;
				width: calc(50% - 0.75rem);
			}
		}
	}

	img {
		width: 100%;
		object-fit: cover;
		aspect-ratio: 16 / 9;

		@include bp.for-tablet-portrait-up {
			width: calc(50% - 0.75rem);
		}

		@include bp.for-desktop-up {
			height: 424px;
		}
	}

	.about-section-grid {
		margin-top: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		@include bp.for-tablet-portrait-up {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-auto-rows: auto;
			gap: 1.5rem;

			:global(> :nth-child(5)) {
				grid-column: span 2;
			}
		}

		@include bp.for-desktop-up {
			grid-template-columns: repeat(6, 1fr);
			grid-template-rows: repeat(2, 1fr);

			:global(> :nth-child(1)) {
				grid-area: 1 / 1 / 2 / 3;
			}
			:global(> :nth-child(2)) {
				grid-area: 1 / 3 / 2 / 5;
			}
			:global(> :nth-child(3)) {
				grid-area: 1 / 5 / 2 / 7;
			}
			:global(> :nth-child(4)) {
				grid-area: 2 / 1 / 3 / 4;
			}
			:global(> :nth-child(5)) {
				grid-area: 2 / 4 / 3 / 7;
			}
		}
	}
</style>
