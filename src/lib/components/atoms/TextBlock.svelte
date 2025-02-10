<script>
	let { heading, content } = $props();
</script>

<div class="content">
	<h2 class="hero-heading">
		{heading}
	</h2>
	<div class="hero-para">
		<p>
			{content}
		</p>
	</div>
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.content {
		text-align: center;
		margin-inline: 1.5rem;
	}

	.hero-heading {
		font-size: 48px;
		font-weight: 600;
		line-height: 1.05;
		padding-top: 6rem;
	}

	.hero-para {
		padding-top: 3rem;
	}

	p {
		font-size: 20px;
		max-width: 776px;
	}

	@include bp.for-tablet-portrait-up {
	}
</style>
