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
		background-color: rgba(245, 245, 245, 1);
		border: 1px solid rgba(212, 212, 212, 1);
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		h6 {
			color: rgba(163, 163, 163, 1);
		}

		p {
			line-height: 1.5;
		}

		@include bp.for-tablet-portrait-up {
		}

		@include bp.for-desktop-up {
			width: 648px;
			padding: 3rem;
		}
	}
</style>
