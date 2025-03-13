<script lang="ts">
	import Tag from '$lib/components/atoms/Tag.svelte';
</script>

<div class="article-wrapper">
	<a href="/">
		<img
			src="https://nautilus-cyberneering.de/wp-content/uploads/2022/07/Torrust-Header-1500x600-v02.jpg"
			alt=""
		/>
		<div class="text">
			<h3>Article title that can take as much space as needed</h3>
			<p>
				Article content that should be truncated after a certain threshold to be defined. Lorem
				ipsum dolor sit amet consectetur.
			</p>
		</div>
	</a>
	<ul class="tags">
		<Tag />
		<Tag />
		<Tag />
	</ul>
</div>

<style lang="scss">
	a {
		word-break: keep-all;
	}

	a:hover {
		text-decoration: none;
	}

	img {
		display: block;
		width: 100%;
		height: 284px;
		object-fit: cover;
	}

	.article-wrapper {
		background-color: var(--color--page-background);
		border: 1px solid var(--color--border);
		width: 100%;
	}

	.text {
		padding: 1.5rem 1.5rem 0 1.5rem;
	}

	h3 {
		color: var(--color--text);
	}

	p {
		margin-top: 0.5rem;
		color: var(--color--text-secondary);
	}

	.tags {
		display: flex;
		gap: 0.5rem;
		margin-top: 1.5rem;
		margin-left: 0;
		padding: 0 1.5rem 1.5rem 1.5rem;
	}
</style>
