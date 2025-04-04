<script lang="ts">
	import Tag from '$lib/components/atoms/Tag.svelte';

	let { post_data } = $props();
</script>

<div class="card">
	<div class="image-container">
		{#if post_data.coverImage}
			<a href="/blog/{post_data.slug}">
				<img src={post_data.coverImage} alt={post_data.title} />
			</a>
		{:else}
			<a href="/blog/{post_data.slug}">
				<img src="/images/posts-cover-images/NautilusDefault.png" alt={post_data.title} />
			</a>
		{/if}
	</div>
	<div class="content">
		<a href="/blog/{post_data.slug}">
			<h3 class="title">{post_data.title}</h3>
		</a>
		<p class="description">{post_data.excerpt}</p>
		<div class="tags">
			{#each post_data.tags as tag}
				<Tag {tag} />
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.card {
		width: 100%;
		overflow: hidden;
		background: var(--color--page-background);
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		height: 100%;
		border: 1px solid var(--color--border);
	}

	.image-container img {
		width: 100%;
		height: 180px;
		object-fit: cover;
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
		font-size: 20px;
		color: var(--color--text);
	}

	.description {
		color: var(--color--text-secondary);
		font-size: 0.9rem;
		line-height: 1.4;
		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		margin-bottom: 1.5rem;
	}

	.tags {
		margin-top: auto;
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
	}
</style>
