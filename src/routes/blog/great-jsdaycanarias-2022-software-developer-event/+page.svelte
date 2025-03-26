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
			Last week my colleague <a href="https://www.linkedin.com/in/josecelano/">Jose Celano</a> and
			myself attended then
			<a href="https://jsdaycanarias.com/">jsdaycanarias 2022 software developer event</a>.
		</p>

		<p>
			Jose had attended before while it was my first time. The two of us went essentially to
			represent the Nautilus organization and promote our projects.
		</p>

		<p>
			The event was held on the island of <a
				href="https://www.google.com/maps/place/Tenerife/@28.3473676,-17.0955292,9.08z/data=!4m5!3m4!1s0xc4029effe8682ed:0xb01a4bf1c84baf3c!8m2!3d28.2915637!4d-16.6291304"
				>Tenerife</a
			>, Canary Islands, and hosted at the
			<a href="https://www.ull.es/">University of La Laguna</a>. It started on Thursday afternoon
			and continued until Sunday. The four days in total were filled with plenty of speeches,
			workshops and interesting conversations.
		</p>

		<!-- IMAGE -->

		<p>
			The event revolved around Java Script, touching on different topics such as Security, Web 3.0,
			databases, Rust compared to Java Script, etc. There were international speakers from the USA,
			Israel, Switzerland, etc. such as <a href="https://www.linkedin.com/in/adriennetacke/"
				>Adrienne Tacke</a
			>, <a href="https://www.linkedin.com/in/talliran/">Liran Tal</a> and
			<a href="https://www.linkedin.com/in/max-gfeller-038b1847/">Max Gfeller</a>.
		</p>

		<!-- IMAGES -->
		<p>
			During these days almost 400 people were present and took part in all the activities. In
			addition there were also several other companies present who had some stands, like <a
				href="https://www.hyve.net/en/">Hyve Innovation</a
			>
			and <a href="https://cloudinary.com/">Cloudinary</a> as sponsors.
		</p>

		<p>
			We had the opportunity to discuss our projects to several interested people in one on one
			conversations and we had displayed a roll- up with QR codes for additional information, but
			also to take a morning to visit the mountains and hike a little.
		</p>

		<!-- IMAGES -->

		<p>
			All in all it were 4 active days which make us consider next time to attend as speakers and
			talk about our work and Open Source projects. So get ready for it! Besides the island is worth
			a trip again.
		</p>

		<p>
			Also if you are curious about our projects <a
				href="https://nautilus-cyberneering.de/projects/">here</a
			> is a link to some more detail about it.
		</p>
	</Post>
</Wrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints' as bp;

	p {
		color: var(--color--text-secondary);
		margin-top: 1.5rem;
	}
</style>
