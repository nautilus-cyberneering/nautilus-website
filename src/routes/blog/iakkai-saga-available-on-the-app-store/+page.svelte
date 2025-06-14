<script lang="ts">
	let { data } = $props();
	let { currentPost, allPosts } = data;
	import Post from '$lib/components/molecules/Post.svelte';
	import Wrapper from '$lib/components/atoms/Wrapper.svelte';
	import PrevNextPost from '$lib/components/molecules/PrevNextPost.svelte';
</script>

<Wrapper>
	<Post
		title={currentPost.title}
		coverImage={currentPost.coverImage}
		date={currentPost.date}
		contributor={currentPost.contributor}
		contributorSlug={currentPost.contributorSlug}
		tags={currentPost.tags}
		categories={currentPost.categories}
	>
		<p>
			After some months of hard work we finally published the first application built entirely using
			Boken Engine, <strong>Iakkai Saga: The Curse of Blood</strong>.
		</p>

		<img
			src="/images/posts-images/iakkai-saga-available-on-the-app-store/app-store-preview-iakkai.png"
			alt="iakkai"
		/>

		<p>
			You can find it on the App Store <a
				href="https://apps.apple.com/app/id1580924283#?platform=ipad"
				target="_blank">here</a
			>
		</p>

		<p>Our goals at the beginning of the project were:</p>

		<ul>
			<li>Try to build a complete demo using all Boken Engine features.</li>
			<li>Make it fun</li>
		</ul>

		<p>
			Regarding our first goal we think Iakkai could be a good starting point to build your own app
			using Boken Engine. It could be used as a boilerplate for your own projects. We are planning
			to add more documentation about how to integrate Boken Engine on your own app but this sample
			should be useful to understand and play with all the Boken Engine features.
		</p>

		<p>
			If you want to use Boken Engine we think you should try first to setup and run Iakkai. You can
			also follow the instructions on the <a
				href="https://github.com/boken-engine/boken-engine"
				target="_blank">Boken Engine documentation</a
			>.
		</p>

		<p>
			Regarding making it fun, we chose a game topic that some mantainers know very well. In fact,
			all the application contents were done by <a
				href="https://github.com/yeraydavidrodriguez"
				target="_blank">Yeray</a
			>
			and <a href="https://github.com/cgbosse" target="_blank">Constantin</a> including script and graphics.
		</p>

		<p>We hope you enjoy it!</p>
		<PrevNextPost currentPage={currentPost.slug} {allPosts} />
	</Post>
</Wrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints' as bp;

	p {
		margin-top: 1.5rem;
	}

	p,
	li {
		color: var(--color--text-secondary);
	}

	img {
		margin-top: 2rem;
	}
</style>
