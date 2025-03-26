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
		<p>Have you ever thought about what happens when there is AI unexpected behavior?</p>

		<p>
			AI has been making waves in the past few years, with some spectacular successes. However, as
			AI starts to be applied more widely in society, we need to start thinking about the ethical
			implications of its behavior. One issue that is starting to come up is AI’s unexpected
			behavior.
		</p>

		<h2>An example of AI unexpected behavior</h2>
		<p>
			One example of AI’s unexpected behavior in the positive sense is the GO contest from 2016,
			where the <a href="https://en.wikipedia.org/wiki/AlphaGo">AlphaGo</a> AI beat the human
			champion four out of five times. The AI system did this by making moves that no one had ever
			seen before. If you are interested to another article making an analysis of this match and
			expands on the topic of unexpected behavior you can find it
			<a
				href="https://www.aitrends.com/ai-insider/novelty-in-the-game-of-go-provides-bright-insights-for-ai-and-autonomous-vehicles/"
				>here</a
			>.
		</p>

		<p>
			Now after considering this example this raises an important question: should we be worried
			about AI systems that behave in ways that we don’t expect?
		</p>

		<h2>Is unexpected behavior appropriate?</h2>
		<!-- IMAGE -->
		<p>
			There are two sides to this argument. On the one hand, AI systems that exhibit novelty can be
			advantageous. They can come up with solutions to problems that humans would never have thought
			of. On the other hand, when for example human lives are at stake (as in the case of
			self-driving cars), we need to be extra careful about AI systems that behave in unexpected
			ways. Another example are the detected racist wording by for example some Natural Language
			Processing (NLP) AIs.
		</p>

		<p>
			The two arguments are valid and as usual, it will depend on their ultimate use case and
			context. Nevertheless, if we want to further explore the implications of such novelty we first
			have to understand how it comes to be.
		</p>

		<h2>How does this AI unexpected behavior or novelty result</h2>
		<p>
			In the article <a
				href="https://www.aitrends.com/ai-insider/novelty-in-the-game-of-go-provides-bright-insights-for-ai-and-autonomous-vehicles/"
				>“Novelty In The Game Of Go Provides Bright Insights For AI And Autonomous Vehicles”</a
			> by Dr. Lance Eliot this gets briefly explained. As he indicates this novelty can result from
			the sheer processing power and the underlying AI algorithms.
		</p>
		<p>
			Dr. Eliot also mentions that in AI models trained using Machine Learning (ML) or Deep Learning
			(DL) such systems can have picked up on subtle patterns, replicating these in their
			algorithms, which then can result in unexpected behavior such as possible gender bias, etc. If
			you are interested in reading more from Dr. Eliot on bias <a
				href="https://www.forbes.com/sites/lanceeliot/2020/01/04/overcoming-racial-bias-in-ai-systems-and-startlingly-even-in-ai-self-driving-cars/?sh=34de133f723b"
				>here</a
			> is an article of his.
		</p>

		<h2>Model training</h2>
		<!-- IMAGE -->
		<p>
			Now, if you are new to AI and do not know how the models are trained let me give you an
			example. Imagine a base algorithm like a small kid. This kid receives education and is exposed
			to new information. With this information it forms its mind, behavior and how it deals with
			situations.
		</p>

		<p>
			With AI models it is essentially the same. A simple algorithm grows and turns into complex
			model through training. The training in essence is nothing else than feeding it with huge
			amounts of data. Then the data can be of two types structured or unstructured, which
			essentially means filtered by humans in advance or not.
		</p>

		<p>
			Additionally, depending on whether it is ML or DL, AI models are trained supervised, or
			unsupervised. Unsupervised, meaning that no human interaction was necessary for this process.
		</p>

		<p>
			Now, given these different factors, AI models can display unexpected results. As you can
			imagine this makes it difficult to predict with 100% certainty how they will behave in the
			future, representing a problem.
		</p>

		<h2>Current AI models and transparency</h2>
		<p>
			After several years of research in this field, there are already many models in production.
			People are using many of the existing models without their information being publicly
			available and with their source code being opaque.
		</p>

		<p>
			This fact is a serious issue, it prevents users from establishing whether the models are in
			line with their needs and ethical standards.
		</p>

		<!-- IMAGE -->
		<p>
			We need to have a better understanding of how AI systems make decisions so that we can trust
			them. The first step towards this to understand how they have been made, having access to the
			source code.
		</p>

		<h2>Conclusion</h2>
		<p>
			Today there is much debate on this topic, and there are initiatives like the <a
				href="https://modelcards.withgoogle.com/about">AI model cards</a
			>
			which aim to increase transparency around AI models. This is a good start, but we need to do more
			to ensure that AI systems are accountable and a general approach is needed, the
			<a href="https://en.wikipedia.org/wiki/Open_source">Open Source</a> approach.
		</p>

		<p>
			Why this approach? Because the Open Source philosophy is by default public and transparent.
			This is vital if we want to build trust in AI systems and continue building upon these in the
			future.
		</p>

		<p>
			Only with Open Source AI models, we can create a level playing field, where everybody has
			access to the same information and where there is no <strong>“black box”</strong> AI, but a
			<strong>“glass box”</strong> AI.
		</p>

		<p>
			What are your thoughts on this? Have you ever encountered an AI system that behaved
			unexpectedly? Have you ever given thought to how the AI industry should deal with its source
			code packages? Let me know in the comments below.
		</p>

		<p>
			If you would like to read more about Open Source and its importance <a
				href="https://nautilus-cyberneering.de/2022/05/24/open-source-why-it-is-so-important-now-and-in-the-future/"
				>here</a
			> is another of our posts.
		</p>

		<p>
			Please feel free to share this blog post on your social media channels or with anyone who
			might be interested. Thank you for reading! 🙂
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

	p {
		color: var(--color--text-secondary);
	}
</style>
