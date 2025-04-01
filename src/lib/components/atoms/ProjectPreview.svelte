<script lang="ts">
	import DefaultNautilus from '$lib/icons/defaultNautilus.svelte';
	import DefaultNautilusDark from '$lib/icons/defaultNautilusDark.svelte';
	import { theme } from '$lib/stores/theme';
	let { title, url, image } = $props();
</script>

<div class="card">
	<div class="image-container">
		{#if image}
			<a href="/blog/{url}">
				<img src={image} alt={title} />
			</a>
		{:else}
			<div class="default-cover-image">
				{#if $theme === 'dark'}
					<a href="/blog/{url}">
						<DefaultNautilusDark />
					</a>
				{:else}
					<a href="/blog/{url}">
						<DefaultNautilus />
					</a>
				{/if}
			</div>
		{/if}
	</div>
	<div class="content">
		<h2 class="title">{title}</h2>
		<a href="/">{url}</a>
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
		padding-inline: 2rem;

		@include bp.for-desktop-up {
			flex-direction: row;
			align-items: center;
			gap: 2rem;
		}
	}

	.image-container img {
		width: 100%;
		height: 180px;
		object-fit: cover;
		border: 1px solid red;
	}

	.content {
		display: flex;
		flex-direction: column;
		padding: 15px;
		flex-grow: 1;
	}

	.title {
		font-weight: bold;
		margin-bottom: 5px;
		font-size: 1.25rem !important;
		color: var(--color--text);
	}
</style>
