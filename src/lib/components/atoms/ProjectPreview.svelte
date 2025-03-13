<script lang="ts">
	let { title, url } = $props();
</script>

<div class="wrapper">
	<div>
		<img src="images/qr-code.avif" alt="qr code" />
	</div>
	<div class="text">
		<h3>{title}</h3>
		<a href={url}>Stay in contact with us on {title}</a>
	</div>
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.wrapper {
		display: flex;
		flex-direction: column;
		background-color: var(--color--page-background);
		border: 1px solid var(--color--border);

		@include bp.for-desktop-up {
			flex-direction: row;
		}
	}

	img {
		object-fit: cover;
		height: 176px;
		width: 100%;
	}

	.text {
		padding: 1.5rem;

		h3,
		a {
			color: var(--color--text-secondary);
		}

		@include bp.for-desktop-up {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}
</style>
