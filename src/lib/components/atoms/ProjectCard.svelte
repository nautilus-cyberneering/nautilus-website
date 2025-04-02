<script lang="ts">
	let { title, timeFrame, content } = $props();
</script>

<div class="card">
	<h2>{title}</h2>
	<h6>{timeFrame}</h6>
	<p>{content}</p>
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.card {
		background-color: var(--color--page-background);
		border: 1px solid var(--color--border);
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		h2 {
			color: var(--color--text);
		}

		h6 {
			color: rgba(163, 163, 163, 1);
		}

		p {
			line-height: 1.5;
			color: var(--color--text-secondary);
		}

		@include bp.for-tablet-portrait-up {
		}

		@include bp.for-desktop-up {
			margin: 0 auto;
			width: 648px;
			padding: 3rem;
		}
	}
</style>
