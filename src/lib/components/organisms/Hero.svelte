<div class="svg-container">
	<div class="svg-content">
		<h1 class="hero-heading">Pioneering<br /><span>Open Source</span><br />ecosystems</h1>
		<div class="hero-para">
			<p>
				At <strong>Nautilus Cyberneering</strong> we are all about creating new Open Source
				Ecosystems. We define <strong>Open Source Ecosystems</strong> as thriving user-creator
				communities who develop together open source software that is secure, respectful and which
				adds <strong>value for future generations</strong>.
			</p>
			<p>This is what we call <strong>Cyberneering</strong>.</p>
		</div>
	</div>
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.svg-container {
		position: relative;
		background-image:
			radial-gradient(circle, rgba(250, 250, 250, 0.72), rgba(250, 250, 250, 1)),
			url('/images/nautilus-hero-bg.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgba(245, 245, 245, 0.96);
		padding-inline: 1.5rem;
		text-align: center;

		.svg-content {
			width: 872px;
		}

		span {
			color: rgba(238, 134, 97, 1);
		}

		.hero-heading {
			font-size: 3rem;
			font-weight: 600;
			line-height: 1.05;
			padding-top: 9.5rem;

			@include bp.for-tablet-portrait-up {
				font-size: 3.75rem;
			}
		}

		.hero-para {
			padding-top: 3rem;
		}

		p {
			font-size: 1.1rem;
		}

		p:nth-of-type(2) {
			padding-top: 1.5rem;
			padding-bottom: 5rem;
		}
	}

	.svg-container::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 5%;
		background: linear-gradient(to bottom, rgba(250, 250, 250, 0) 0%, rgba(250, 250, 250, 1) 100%);
	}
</style>
