<script lang="ts">
	let { title } = $props();
</script>

<div class="svg-container">
	<div class="svg-content">
		<h1 class="hero-heading">{title}</h1>
	</div>
</div>

<style>
	.svg-container {
		position: relative;
		background-image: radial-gradient(circle, rgba(250, 250, 250, 0.72), rgba(250, 250, 250, 1)),
			url('https://s3-alpha-sig.figma.com/img/e587/a55e/ea04ef86d8fa13f21055f6b2327c557b?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MXWWabS5GgZDoxej37lWJWdDuEfBKdOZQz4r~U64~11u0iTIb07YPhQ6Ar6VCts8TEGkRFKwYPL3kXd1aqC5vujN-52TNdCDlAAGohjhjLmpzwthLflUyVtIiqf19SNbagwFE07PEZukTU36AXALWLgX34fGkZYNueph71BIP8-TOT2TLQQ316a~JRtiC4rJrXAJMyEtbVhYCL5iV-JUiMPNUsc~CwQfFIJOjAMMuBzNVuuA9notDl4SVe57o23-snaqjdYSpEa1wShNgsbTz-oEclcVnapbAfohamKl0N~IzCknmmPfVrlZZuS5UGeMEGm7UZTCWrVxIXRA-~8RXg__');
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

		.hero-heading {
			font-size: 3rem;
			font-weight: 600;
			line-height: 1.05;
			padding-top: 9.5rem;
			padding-bottom: 8rem;
		}
	}

	.svg-container::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 60%;
		background: linear-gradient(to bottom, rgba(250, 250, 250, 0) 0%, rgba(250, 250, 250, 1) 100%);
	}
</style>
