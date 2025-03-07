<script lang="ts">
	let { title, content, svg = null } = $props();

	const SvgComponent = svg;
</script>

<div class="card {SvgComponent ? 'center' : 'left'}">
	{#if SvgComponent}
		<span class="svg-container">
			<SvgComponent />
		</span>
	{/if}
	<h3>{title}</h3>
	<p>{content}</p>
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.card {
		background-color: rgba(245, 245, 245, 1);
		border: 1px solid rgba(212, 212, 212, 1);
		padding: 3rem;

		@include bp.for-tablet-portrait-up {
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			flex: 1;
		}

		@include bp.for-desktop-up {
			flex: unset;
		}

		h3 {
			font-size: 1.5rem;
			margin-top: 1.5rem;

			@include bp.for-desktop-up {
				margin-top: 3rem;
				font-size: 1.875rem;
			}
		}

		p {
			font-size: 1.125rem;
			margin-top: 1rem;
		}
	}

	.center {
		text-align: center;
	}

	.left {
		text-align: left;
	}

	.svg-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 80px;
		margin: 0 auto;

		@include bp.for-desktop-up {
			width: 128px;
		}
	}
</style>
