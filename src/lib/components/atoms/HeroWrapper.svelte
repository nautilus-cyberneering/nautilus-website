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
		background-image:
			radial-gradient(circle, var(--radial--gradient-1), var(--radial--gradient-2)),
			url('/images/nautilus-pages-bg.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		display: flex;
		align-items: center;
		justify-content: center;
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
			color: var(--color--text);
		}
	}

	.svg-container::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 60%;
		background: linear-gradient(to bottom, rgba(250, 250, 250, 0) 0%, rgba(250, 250, 250, 0) 100%);
	}
</style>
