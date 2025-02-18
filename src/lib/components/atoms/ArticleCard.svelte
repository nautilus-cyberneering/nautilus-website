<script lang="ts">
	import Tag from '$lib/components/atoms/Tag.svelte';
</script>

<a href="/">
	<img
		src="https://s3-alpha-sig.figma.com/img/223c/5f4d/2133f8c693541179796d6feae9e21499?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Nx2bmSF3WdU8ceN7r4GQzYf~sXIcItlcWU5JEu93lseEurI77VxA-susOvhRJMcNj66IcM6uPBTgemwN8kiqIL729JJ3FpXg0sIwJVNqkshvy2CVRU-H-0qSgBRKv8CrHuLgbEdon-LZ4auGZgyvd2q-Fxn5LYpUYxCq4JHbDhH7Vhii2QqOOmxmkR8sIw6S76gCMZbaq6xh9YpG1htjLvTZ1JOvSrnpTVgxj6Lx0--WG~vuUrZKLV~x2tAYGTkjuMf5VKDDLiB312Obr57IUEGepobr1n9raSzu6VfAym5Hy5YfKnryKztScBIWDGzs5D1RnO1cyxluqXTGQiQaRA__"
		alt=""
	/>
	<div class="article-wrapper">
		<h3>Article title that can take as much space as needed</h3>
		<p>
			Article content that should be truncated after a certain threshold to be defined. Lorem ipsum
			dolor sit amet consectetur.
		</p>
		<ul class="tags">
			<Tag />
			<Tag />
			<Tag />
		</ul>
	</div>
</a>

<style lang="scss">
	a {
		word-break: keep-all;
	}

	a:hover {
		text-decoration: none;
	}

	img {
		width: 100%;
		height: 284px;
		object-fit: cover;
	}

	.article-wrapper {
		padding: 1.5rem;
		background-color: rgba(245, 245, 245, 1);
		border: 1px solid rgba(212, 212, 212, 1);
	}

	p {
		margin-top: 0.5rem;
	}

	.tags {
		display: flex;
		gap: 0.5rem;
		margin-top: 1.5rem;
		margin-left: 0;
	}
</style>
