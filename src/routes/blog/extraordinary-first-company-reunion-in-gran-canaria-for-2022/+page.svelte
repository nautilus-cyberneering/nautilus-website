<script lang="ts">
	let { data } = $props();
	let { currentPost } = data;
	import Post from '$lib/components/molecules/Post.svelte';
	import Wrapper from '$lib/components/atoms/Wrapper.svelte';
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
			Beginning of last month we had two intensive weeks of in person meetings and activities with
			the visit of our CEO and CTO, Cameron Garnham.
		</p>

		<p>
			It was a great opportunity to get together and enjoy some good food and weather while talking
			about different project related topics as well as getting to know each other.
		</p>

		<!-- IMAGES -->

		<h2>Discussions</h2>
		<p>Some of the things that we talked about were:</p>

		<ul>
			<li>The relevance of Blockchain for our project and its upcoming challenges.</li>
			<li>
				How <a href="https://en.wikipedia.org/wiki/Blockchain">Blockchain</a> works and why Blockchain
				is important for AI development.
			</li>
			<li>
				How <a href="https://en.wikipedia.org/wiki/Bitcoin">Bitcoin</a> works and its relevance as an
				example of Blockchain implementation for the economy.
			</li>
			<li>Bitcoin’s development process and which elements make sense to emulate for us.</li>
			<li>
				Our Spin-off projects’ (<a href="https://github.com/Nautilus-Cyberneering/git-queue"
					>Git-Queue</a
				>
				and <a href="https://github.com/Nautilus-Cyberneering/nautilus-librarian">Librarian</a>)
				usefulness to other repositories and which things to focus on.
			</li>
			<li>Our hiring and community building plans.</li>
			<li>The relevance of Open-Source to AI and software development overall.</li>
			<li>
				Review of the expertise that we are gathering and the perceived improvements that can be
				made to the tools that we are using.
			</li>
			<li>How AI models can be expanded using plants as additional neural networks.</li>
		</ul>

		<h2>Excursions</h2>
		<p>
			Many of the meetings were held on the go while exploring the island together. We had several
			excursions to the coast in the north and south as well as some visits to the islands inner,
			and a small detour to visit a Bonsai center in Teror.
		</p>

		<h2>Coast Trips</h2>
		<!-- IMAGES -->

		<h2>Mountain Trips</h2>
		<!-- IMAGES -->

		<h2>Bonsai Center</h2>
		<!-- IMAGES -->

		<h2>Team Building</h2>
		<p>
			All in all the two weeks were filled with interesting conversations and good team building
			exercises like hiking in the foggy and rainy mountains.
		</p>
		<!-- IMAGES -->

		<p>
			We look forward to the next meeting in September!!! If you want to know about how to become
			part of our team, <a href="https://nautilus-cyberneering.de/team/">check this out</a>.
		</p>
	</Post>
</Wrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints' as bp;

	h2 {
		margin-top: 3rem;
		line-height: 1.2;
		color: var(--color--text);
	}

	p {
		margin-top: 1.5rem;
	}

	p,
	li {
		color: var(--color--text-secondary);
	}
</style>
