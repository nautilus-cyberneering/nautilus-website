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
			In this post you will learn about my experience as a non-developer helping to take a closed
			source software project, a non-linear visual story framework for IOS Swift, into the Open
			Source realm and develop a demo for it.
		</p>

		<p>Here is a brief overview of the post’s content:</p>

		<ul>
			<li>Project Background and Team</li>
			<li>The Process</li>
			<li>Learning</li>
			<li>Solving Problems</li>
			<li>Where this path has taken me today.</li>
		</ul>

		<h2>Project Background and Team</h2>
		<p>
			It has been about 8 months now that I started contributing to a new Open-Source project called <a
				href="https://github.com/boken-engine/boken-engine"
				target="_blank">Boken Engine</a
			>
			– An iOS Swift framework for creating slides-based, non-linear visual stories and presentations.
			The project however, started beginning of last year as a closed source development for one of my
			former employer’s <a href="https://www.hyve.net/en/" target="_blank">HYVE</a> customers.
		</p>

		<p>
			I got involved since our customer wanted us to explore among other topics the business aspects
			for this new Open-Source project. so that in January 2021 I started collaborating as a member
			of a team of 4.
		</p>

		<p>
			My colleagues were all software developers, but they all had little experience with
			Open-Source projects and were thus also interested in working on the project.
		</p>

		<h2>The Process</h2>
		<p>
			The steps we took in brief for converting the closed source project into Open Source are
			essentially 3 for the various topics that we looked into methodically:
		</p>

		<ol>
			<li>Research</li>
			<li>Discuss & Decide</li>
			<li>Implement</li>
		</ol>

		<h2>Research & Topics</h2>
		<p>
			There were different topics that had to be looked into so that we split up the research and
			the code creation for the nonlinear visual story framework.
		</p>

		<p>We approached different topics during our research, touching among others on:</p>

		<ul>
			<li>Where to host it</li>
			<li>Licensing</li>
			<li>Community management</li>
			<li>Business modelling</li>
			<li>Marketing strategy</li>
		</ul>

		<p>
			In my case, I was to investigate the different possible business models that existed for
			Open-Source Software projects and document all these, which I did.
		</p>

		<p>All was documented and used to take decisions for the development of the project.</p>

		<p>
			We tried to make the process completely transparent and useful for others, who ever considered
			embarking on the Open-Source Software adventure. Here you have an overview of the
			documentation that was generated during the process.
		</p>

		<p>
			If you are curious, you can find this information <a
				href="https://github.com/boken-engine/boken-engine/tree/master/doc"
				target="_blank">here</a
			>.
		</p>

		<h2>Discussing & Deciding</h2>
		<p>Each time some research was done we would discuss it internally and decide on it.</p>

		<p>
			We tried to make our thought process transparent and document it in such a way that it would
			create a precedent on how things have been done for anyone who were to join later.
		</p>

		<p>
			It became evident from the research and our internal discussions that as a small team it was
			easy to make decisions but with time the process had to be adapted once the project community
			got some traction.
		</p>

		<h2>Implementation</h2>
		<p>
			Once we had decided on something we did it. For instance, the first thing we had to decide on,
			was where to host our Open-Source project. We decided to do so on GitHub. Given that none of
			us had had much experience in the contribution and organization of Open-Source projects we
			learned mostly by doing as the project developed. Fact is we are still doing so, which makes
			it even more interesting for me.
		</p>

		<h2>Learning</h2>
		<p>
			It has been a steep learning curve, especially for me whom I had not used Git before and had
			to get used to it. On the other hand, it has also been an exciting project so far since all my
			colleagues had to learn new tools and look for solutions to each problem that we encountered.
			All the problems that we encountered we discussed and documented when it was of technical
			nature for future reference, learning how to use the Discussion feature by Github etc.
		</p>

		<h2>Solving Problems</h2>
		<p>
			As the project progressed, we ran into situations where we had no experience at all, and our
			initial plans were not possible, so we had to improvise and look for solutions. One of these
			was when the moment came to hire an external artist for the demo story’s background images and
			character sprites.
		</p>

		<p>
			We selected an artist but at the last moment with already the deadline coming close he could
			not work with us. As a team we decided to do everything in-house since we had almost all the
			necessary skills. One of my colleagues took care of the background images and I took charge of
			the sprites. I had never published a piece of art of mine, nor created art for such a large
			project following specific requirements, and less so digitally so that it was a steep learning
			curve for me.
		</p>

		<p>
			In my specific case I tested and learned to use 2 different digital drawing applications and
			created artwork with it. The applications that I used were <a
				href="https://affinity.serif.com/es/"
				target="_blank">Affinity Designer</a
			>
			and the other
			<a
				href="https://www.painterartist.com/en/product/painter/?sourceid=ptr2022-xx-ppc_brkws&x-vehicle=ppc_brkws&trial=big&gclid=Cj0KCQjwvO2IBhCzARIsALw3ASpWjLuJtJRBQShzjV1uHHgrA9xFzTPNNYCF6nzAeen0lCqHNKF_MHcaAtszEALw_wcB"
				target="_blank">Corel Painter 2022</a
			>.
		</p>

		<p>Here is a small sample of the Art that I created for the Iakkai Saga App:</p>

		<img
			src="/images/posts-images/contributing-to-an-open-source-project-as-a-non-developer/Sprites-03.png"
			alt="sprites"
		/>

		<p>
			The hardware that I used was a WACOM Cintiq 13” tablet. It was a great experience which I
			really enjoyed, and I can only recommend both application and the tablet. In my case in the
			end, I preferred the Affinity application for its lower price tag, though I must say that it
			is not as complete as Corel Painter 2022 which offer many other possible workflows. Some of my
			colleagues also learned and documented it, for example here is a link to two articles by my
			colleagues:
		</p>

		<ul>
			<li>
				<a href="https://www.boken-engine.dev/2021-06-28-a-challenging-journey/" target="_blank"
					>A Challenging Journey</a
				>
			</li>
			<li>
				<a href="https://www.boken-engine.dev/2021-08-17-Iaaki-Saga-for-macOS/" target="_blank"
					>Iakkai Saga for macOS</a
				>
			</li>
		</ul>
		<p>
			If you want to read more articles in the future here is our website and blog: <a
				href="https://www.boken-engine.dev/"
				target="_blank">https://www.boken-engine.dev/</a
			>
		</p>

		<h2>Where the Path has taken me</h2>
		<p>
			As of today, I continue contributing to the Boken project, helping in non-development topics,
			such as art creation, reviewing of written texts, etc. and it feels great to be part of a team
			and creating something, especially since the Demo is now published in its first version.
		</p>

		<p>
			Our Demo is called “Iakkai – Curse of Blood”. We got it approved last week and you can find it
			here. Besides this experience has opened my eyes to new interesting learning topics and skills
			that I can develop but also opened a new opportunity that I have decided to explore.
		</p>

		<p>
			I can only encourage anyone to check out OSS projects and contribute to these even if they are
			not developers, since you can always add value with your knowledge and time. <a
				href="https://opensource.com/life/16/1/8-ways-contribute-open-source-without-writing-code"
				target="_blank">Here</a
			> is a post in case you want to know a little more about it.
		</p>
		<PrevNextPost currentPage={currentPost.slug} {allPosts} />
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

	img {
		margin-top: 2rem;
	}
</style>
