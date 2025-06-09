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
			The tech world is ever-changing, and constantly evolving and a mix of different business
			philosophies coexist. You will find egalitarian, exclusive, collaborative, ruthlessly
			competitive, as well as the open and rigidly closed ideals all at once. There is what is
			called Closed Source and Open Source. Closed Source standing for proprietary code which is not
			available for the public, and Open Source the opposite.
		</p>

		<p>
			Open source has become a valuable asset for companies in the age of information, more so with
			AI and other new technologies.
		</p>

		<p>
			This article explores the principles of open-source, how companies profit from it, and how it
			is relevant, especially for the future development of AI.
		</p>

		<h2>Open Source guiding principles</h2>
		<p>
			In the late 1980s, companies like Microsoft dominated the software industry, having a tight
			control over software code. At this time many people began questioning whether they should
			continue to pay for proprietary software.
		</p>

		<img
			src="/images/posts-images/open-source-why-it-is-so-important-now-and-in-the-future/guiding_principles.jpg"
			alt="guiding principles"
		/>

		<p>
			The <a href="https://en.wikipedia.org/wiki/Open_source" target="_blank"
				>open-source movement</a
			>
			began as a reaction to this. Its main belief that
			<strong>software should be freely available and collaborative</strong>. The idea being that
			this approach does generate superior quality, stemming from a large community backing where
			anybody can improve it. The result being an always <strong>improving code spiral</strong> where
			value is constantly created for the community.
		</p>

		<h2>Relevance for companies and industry today</h2>
		<p>
			The impact of Open Source can be felt everywhere, just look at the software we use daily. In
			fact, one can argue that the open-source software movement has delivered <strong
				>some of the most important technologies of the past few decades</strong
			>.
		</p>

		<p>
			Proof is that <strong
				>probably all of our software is partially or exclusively based on Open-Source code</strong
			>. To list just a few of the relevant software examples, these are the
			<a href="https://en.wikipedia.org/wiki/Linux" target="_blank">Linux operating system</a>,
			<a href="https://en.wikipedia.org/wiki/Android_(operating_system)" target="_blank">Android</a
			>, and
			<a href="https://en.wikipedia.org/wiki/Firefox" target="_blank">Mozilla Firefox</a>.
		</p>

		<p>
			Also if you would like to read some articles about the value created by Open Source Software
			here are two:
		</p>

		<ul>
			<li>
				<a
					href="https://www.zdnet.com/article/open-source-software-is-it-about-free-or-is-it-about-freedom/"
					target="_blank">Open source matters, and it’s about more than just free software</a
				>
			</li>
			<li>
				<a
					href="https://www.zdnet.com/article/open-source-nine-out-of-ten-companies-use-it-but-how-much-is-it-really-worth/"
					target="_blank"
					>Open-source software: Nine out of 10 companies use it, but how much is it really worth?</a
				>
			</li>
		</ul>

		<h2>How did this come to be?</h2>
		<p>
			To answer this we have to look at the evident benefits that Open-Source has for companies and
			the software industry overall.
		</p>

		<p>For companies:</p>

		<ul>
			<li>
				<strong>Cost & time savings:</strong> They can save on time, development, and maintenance costs
				by using open-source code. Essentially, you do not have to reinvent the wheel and start from
				scratch.
			</li>
			<li>
				<strong>Customization:</strong> Companies can customize open-source software to fit their own
				needs and then redistribute it.
			</li>
			<li>
				<strong>Focus:</strong> You can focus on what you are an expert rather than having to reinvent
				the entire wheel.
			</li>
			<li>
				<strong>Large talent pool access:</strong> Open-source provides a larger pool of talent to draw
				from when hiring new developers.
			</li>
		</ul>

		<p>For the industry</p>

		<ul>
			<li>
				<strong>Competition opportunities:</strong> Open-Source has been incredibly successful in leveling
				the playing field between large and small companies. Large and small can have access to the same
				software base.
			</li>
			<li>
				<strong>Innovation:</strong> It has also spurred innovation and creativity, as developers are
				free to experiment with new ideas. The fact that you can reuse code and experiment with it speeds
				up innovation since it allows for agile iterations and input from many fronts.
			</li>
			<li>
				<strong>Security:</strong> The more people are involved in the development and the more users
				are using it the faster security holes get found and solved.
			</li>
		</ul>

		<p>
			As one can see Open source is an important part of the tech world and will continue to be so
			in the future.
		</p>

		<h2>Open Source and AI</h2>
		<p>
			Looking into the future and considering the speed at which new technologies are progressing,
			we can be sure that open-source will become even more important. The reasons are clear, all
			the resulting benefits that Open-Source has incorporated.
		</p>

		<p>
			Now, if we look specifically at AI development and two of its currently debated industry
			challenges, it is going to be even more relevant.
		</p>

		<p>
			First, the fast progression of AI models has made it evident that it is becoming increasingly
			difficult for any single company to keep pace with the rapid changes.
		</p>

		<p>
			Second, the unexpected behaviors such as model bias which has been discovered in AI models,
			and its social and ethical implications.
		</p>

		<p>
			<a
				href="https://www.forbes.com/sites/michaelperegrine/2022/04/26/the-looming-board-challenge-oversight-of-artificial-intelligence/?sh=371d436c287b"
				target="_blank">Here is a good article</a
			> from Forbes on these challenges.
		</p>

		<h2>Conclusion</h2>
		<p>
			These two challenges not only will make the Open Source approach more relevant but will make
			it <strong>mandatory</strong>.
		</p>

		<p>
			Following the Open Source ethos companies will be able to share code and data, pool their
			resources, and move forward together. In addition, they will reach a consensus faster. Sharing
			in the work and responsibility,
		</p>

		<p>
			This will aid in preventing avenues where detractors can slow down the wider adoption of AI in
			our daily lives. We here at Nautilus Cyberneering believe in Open Source and aim to make our
			humble contribution with our work.
		</p>

		<p>
			If you would like to know more about it, here are some links to our repositories and overview
			on our project webpage:
		</p>

		<ul>
			<li>
				<a href="https://github.com/Nautilus-Cyberneering" target="_blank">GitHub repositories</a>
			</li>
			<li>
				<a href="https://nautilus-cyberneering.dev/" target="_blank">Projects overview</a>
			</li>
		</ul>
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
