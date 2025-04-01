<script lang="ts">
	let { title, url, image } = $props();
</script>

<div class="card">
	<div class="image-container">
		{#if image}
			<a href={url}>
				<img src={image} alt={title} />
			</a>
		{:else}
			<a href={url}>
				<img src="/images/posts-cover-images/NautilusDefault.png" alt={title} />
			</a>
		{/if}
	</div>
	<div class="content">
		<h2 class="title">{title}</h2>
		<a href="/">{title}</a>
	</div>
</div>

<style lang="scss">
	@use '$lib/scss/breakpoints.scss' as bp;

	.card {
		max-width: 700px;
		overflow: hidden;
		background: var(--color--page-background);
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		height: 100%;
		border: 1px solid var(--color--border);

		@include bp.for-desktop-up {
			flex-direction: row;
			align-items: center;
		}
	}

	.image-container img {
		width: 100%;
		height: 180px;
		object-fit: cover;
	}

	.content {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		flex-grow: 1;
	}

	.title {
		font-weight: bold;
		margin-bottom: 5px;
		font-size: 1.25rem !important;
		color: var(--color--text);
	}
</style>
