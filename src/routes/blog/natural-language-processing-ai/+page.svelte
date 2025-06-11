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
			The company that I currently work for, <a
				href="https://nautilus-cyberneering.dev/"
				target="_blank">Nautilus Cyberneering</a
			>, has a 5 year project for which the so called
			<strong>Natural Language Processing AI</strong> is key. We essentially want to create a virtual
			artificial intelligence assistant that you can run from your own local computer and communicate
			with you through a command line interface.
		</p>

		<p>
			This assistant we envision, will do all sorts of things that a private user may consider of
			value. The user will basically interact with the “machine” indicating what he wants to achieve
			or do, and the “machine” will respond to his input.
		</p>

		<p>
			As you can imagine such an application will require a good understanding of human language and
			it could look like this:
		</p>

		<figure>
			<img src="/images/posts-images/natural-language-processing-ai/AI-BUDDY.png" alt="ai buddy" />
			<figcaption>Clearly not exactly like in the picture but you get the point. : )</figcaption>
		</figure>

		<p>
			Human communication and understanding is rather complex, as you well know. Hence to achieve
			this we will employ <strong>“Natural Language Processing”</strong> artificial intelligence
			models also abbreviated as <strong>NLP</strong>.
		</p>

		<h2>Starting My Research</h2>
		<p>
			Given this I wanted to begin forming my opinion and test a few and ask around if anyone in my
			network had used any Natural Language Processing AI so far. It happened to be the case.
		</p>

		<p>
			Some good friends of mine were currently using <a href="https://openai.com/" target="_blank"
				>GPT-3</a
			>. They told me that to them it was another employee in their company. Knowing them I knew it
			was no overstatement, when they told me that they used it for code review and research.
			Especially since their business also happens to be in machine learning, AI and automation
			solution consulting. Consequently, I became even more interested.
		</p>

		<p>
			However, if you keep on reading please let me first start by saying that I do not consider
			myself an expert in this field, so please forgive any mistakes I may make during this post.
			Still you may find it interesting if you are also new to the topic.
		</p>

		<p>In this post I will do the following:</p>

		<ul>
			<li>Briefly explain what NLP is</li>
			<li>How do NLPs work</li>
			<li>NLP Creation Techniques</li>
			<li>Known NLP Models</li>
			<li>Share some links to the ones I found most interesting</li>
			<li>Give you some examples of their replies to my input</li>
			<li>Share some already usable tools</li>
		</ul>

		<h2>What is Natural Language Processing (NLP)?</h2>
		<p>These are two definitions from different sources:</p>

		<h3>Wikipedia</h3>
		<p>
			“Natural language processing (NLP) is a subfield of linguistics, computer science, and
			artificial intelligence concerned with the interactions between computers and human language,
			in particular how to program computers to process and analyze large amounts of natural
			language data. The goal is a computer capable of “understanding” the contents of documents,
			including the contextual nuances of the language within them.”
		</p>
		<a href="https://en.wikipedia.org/wiki/Natural_language_processing" target="_blank"
			>wikipedia.org</a
		>

		<h3>IBM</h3>
		<p>
			“Natural language processing strives to build machines that understand and respond to text or
			voice data—and respond with text or speech of their own—in much the same way humans do.”
		</p>
		<a href="https://www.ibm.com/think/topics/natural-language-processing" target="_blank"
			>ibm.com</a
		>

		<p>So to sum up:</p>
		<p>
			<strong>NLP</strong> is an artificial intelligence technology meant to power machines. It processes
			human language inputs written or spoken, understanding and responding to them.
		</p>

		<h2>How do NLPs Work?</h2>
		<p>The before mentioned summary sounds very simple, but it is not. An NLP system needs to:</p>

		<ul>
			<li>
				<strong>Recognize speech</strong>, which is convert voice data into text data, no matter how
				they speak, where they come from or what accents or mistakes they make.
			</li>
			<li><strong>Tag words</strong>, be they nouns, verbs, articles, etc.</li>
			<li>
				<strong>Decide on the intended meaning</strong> of a word given many possible meanings based
				on the context.
			</li>
			<li><strong>Differentiate between block elements</strong> such as sentences.</li>
			<li><strong>Establish relevant words</strong>, for example names of a person, state, etc.</li>
			<li>
				<strong>Make contextual cross references</strong>, from pronouns or descriptive words, etc.
			</li>
			<li>
				<strong>Infer the emotional load</strong> within a text, such as subjectivity, objectivity, sarcasm,
				etc.
			</li>
			<li><strong>Generate “human” responses</strong> from structured information.</li>
		</ul>

		<p>
			I do not know you, but I think that this is even difficult for a human. Recall for instance
			when you learn a language. All the different accents, double meanings, the different sense of
			humor, etc. Complex indeed.
		</p>

		<p>
			If you are curious you can read more <a
				href="https://en.wikipedia.org/wiki/Natural_language_processing"
				target="_blank">here</a
			>.
		</p>

		<h2>Natural Language Processing AI Model Creation Techniques</h2>
		<p>
			Creating a single working NLP model is difficult. Evidently, it takes a lot of effort. For
			many years different approaches came into existence to optimize and test this process.
			Research in this field has been going on for over half a century. You can get a brief overview
			of the past models in <a
				href="https://en.wikipedia.org/wiki/Natural_language_processing"
				target="_blank">Wikipedia</a
			>.
		</p>

		<p>
			The currently used machine learning methods are two. The two require extensive use of
			computational power and can be used in combination.
		</p>

		<p>
			One could write a book on each of them but this is not my intent so that I will try to briefly
			describe how I have understood them and include a link to more information.
		</p>

		<h3>Feature or Representation Learning</h3>
		<p>
			A system is set up to automatically discover and learn through prepared sets of labeled or
			unlabeled data. It essentially learns to recognize and associate features, common patterns,
			within a context and make associations of meaning. For more information <a
				href="https://en.wikipedia.org/wiki/Feature_learning"
				target="_blank">here</a
			>.
		</p>

		<h3>Deep Neural Network Learning</h3>
		<figure>
			<img
				src="/images/posts-images/natural-language-processing-ai/Neural-Network.png"
				style="background-color: white;"
				alt="ai buddy"
			/>
			<figcaption>Neural Network example with node tree</figcaption>
		</figure>

		<p>
			Is an approach in which there are different layers of inter connected nodes. Nodes are
			computational sets of rules that get adjusted in the form of weights during the training
			phase. The nodes pass information through them. The data that you input into the system
			proceeds through this network of decision rules and progresses through the different layers
			like a decision tree. For more information <a
				href="https://en.wikipedia.org/wiki/Deep_learning"
				target="_blank">here</a
			>.
		</p>

		<h2>Known Natural Language Processing AI Models</h2>
		<p>
			There currently exist many NLP models. It would seem that there is a race to develop the most
			powerful one. You will find WU DAO, GPT-3, GPT-J, Meta AI, Bert, etc.
		</p>

		<p>
			One of the challenges researchers are facing with such models is whether the models have
			learned reasoning or simply memorize training examples.
		</p>

		<p>
			Clearly as you can image, some are Open-Source and others not. Through the use and access to
			these available models many solutions are being. I will briefly highlight some facts about the
			ones that I have looked at most and which I found demo implementations for or solutions
			developed on them which you can try.
		</p>

		<h3>GPT Group</h3>
		<p>
			GPT stands for “Generative Pre-trained Transformer”. These are models trained to predict the
			next token in a sequence of tokens autonomously. A token being a set of characters when it
			comes to text characters.
		</p>

		<h3>GPT-3</h3>
		<p>
			This is the model that has recently created a lot of buzz since 2020 when it came out. In 2020
			it was the largest model ever trained. It has been already used to implement marketed
			solutions by different companies.
		</p>

		<p>
			The model was developed by <a href="https://openai.com/" target="_blank">OPENAI</a>. It
			started out as an open source project; however, nowadays its code base has been licensed out
			exclusively to Microsoft.
		</p>

		<p>
			It has been trained to perform <strong>generalist and niche tasks</strong> such as writing code
			in different programming languages such as Python.
		</p>

		<figure>
			<table border="1">
				<thead>
					<tr>
						<th></th>
						<th>GPT-2</th>
						<th>GPT-3</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>Date</strong></td>
						<td>2019-02</td>
						<td>2020-05</td>
					</tr>
					<tr>
						<td><strong>Parameters</strong></td>
						<td>1.5 Billion</td>
						<td>125 Million – 175 Billion</td>
					</tr>
					<tr>
						<td><strong>Training Data</strong></td>
						<td>10 Billion tokens</td>
						<td>499 Billion tokens</td>
					</tr>
				</tbody>
			</table>
			<figcaption>Model Progression OpenAI</figcaption>
		</figure>

		<p>Here are two interesting links:</p>

		<ul>
			<li>
				An in depth article by Lambda an AI infrastructure company providing computation: <a
					href="https://lambdalabs.com/blog/demystifying-gpt-3/"
					target="_blank">https://lambdalabs.com/blog/demystifying-gpt-3/</a
				>
			</li>
			<li>
				A link to their API if you are interested: <a href="https://openai.com/api/" target="_blank"
					>https://openai.com/api/</a
				>
			</li>
		</ul>

		<h3>GPT-J, GPT-Neo & GPT-NeoX</h3>
		<p>
			These three models have been developed by <a href="https://www.eleuther.ai/" target="_blank"
				>EleutherAI</a
			>. It is an <strong>Open-Source</strong> project. It is a grassroots collective of researchers
			working on open-source AI research. The models can from what I read be considered
			<strong>generalist</strong> models good for most of the purposes.
		</p>

		<figure>
			<table border="1">
				<thead>
					<tr>
						<th></th>
						<th>GPT-Neo</th>
						<th>GPT-J</th>
						<th>GPT-NeoX</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>Date</strong></td>
						<td>2021-03</td>
						<td>2021-06</td>
						<td>2022-02</td>
					</tr>
					<tr>
						<td><strong>Parameters</strong></td>
						<td>1.3 to 2.7 Billion</td>
						<td>6 Billion</td>
						<td>20 Billion</td>
					</tr>
				</tbody>
			</table>
			<figcaption>Model Progression EleutherAI</figcaption>
		</figure>

		<h4>Interesting Responses from GPT-J</h4>
		<p>
			Below you will find several screenshots of the responses that I got from their online test
			interface so that judge for yourself.
		</p>

		<figure>
			<img
				src="/images/posts-images/natural-language-processing-ai/test-1.png"
				style="background-color: white;"
				alt="ai buddy"
			/>
			<figcaption>AI responding to “Who is the greatest musician of all times?”</figcaption>
		</figure>

		<figure>
			<img
				src="/images/posts-images/natural-language-processing-ai/test-2.png"
				style="background-color: white;"
				alt="ai buddy"
			/>
			<figcaption>
				AI responding to “which is the best beginner programming language in your opinion?”
			</figcaption>
		</figure>

		<figure>
			<img
				src="/images/posts-images/natural-language-processing-ai/test-3.png"
				style="background-color: white;"
				alt="ai buddy"
			/>
			<figcaption>AI responding to “what is more important to work or to live?”</figcaption>
		</figure>

		<p>
			Here is the link to the online test instance where I got the responses from if you are
			interested: <a href="https://6b.eleuther.ai/" target="_blank">https://6b.eleuther.ai/</a>
		</p>

		<p>
			On the other hand you also can get paid access at <a href="https://goose.ai/" target="_blank"
				>goose.ai</a
			> and test the different EleutherAI models at very reasonable prices.
		</p>

		<h3>Wu Dao 2.0 – China’s Monster Natural Language Processing AI</h3>

		<p>
			This Natural Language Processing AI model is considered the “monster” and largest NLP model
			ever. It was generated by the Beijing Academy in june 2021. Its code base is open-source based
			on PyTorch and it is <strong>“multi-modal”</strong> being able to process images and text at the
			same time and being capable to learn from it. Something that the others are not capable of.
		</p>

		<p>It was trained on:</p>

		<ul>
			<li>1.2TB Chinese text data in Wu Dao Corpora.</li>
			<li>2.5TB Chinese graphic data.</li>
			<li>1.2TB English text data in the Pile dataset.</li>
		</ul>

		<p>
			It is supposedly capable of doing all the standard translation etc. but also composing poetry,
			drawing, singing, etc…
		</p>

		<figure>
			<table border="1">
				<thead>
					<tr>
						<th></th>
						<th>Wu Dao 2.0</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><strong>Date</strong></td>
						<td>2021-06</td>
					</tr>
					<tr>
						<td><strong>Parameters</strong></td>
						<td>1.75 Trillion</td>
					</tr>
					<tr>
						<td><strong>Training Data</strong></td>
						<td>4.9 TB</td>
					</tr>
				</tbody>
			</table>
			<figcaption>Model Specs Wu Dao 2.0</figcaption>
		</figure>

		<h2>Some Implemented Solutions</h2>
		<p>
			Here you will find some interesting implementations that you can start using today if you
			want.
		</p>

		<h3>Jasper</h3>
		<p>This is a tool that I think many digital copy writers will find handy to ease their work.</p>

		<a href="https://www.jasper.ai/" target="_blank">Jasper AI</a>

		<h3>Thoughts</h3>
		<p>Same applies to this solution which helps you speed up your tweets in your own style.</p>
		<a href="https://thoughts.sushant-kumar.com/" target="_blank"
			>https://thoughts.sushant-kumar.com/</a
		>

		<h3>DeepGenX</h3>
		<p>This is a solution for developers to write code faster and easier.</p>
		<a href="https://www.deepgenx.com/" target="_blank">https://www.deepgenx.com/</a>

		<p>
			Nevertheless, this is just three from many more. <a
				href="https://gpt3demo.com/"
				target="_blank">Here</a
			> is a more extensive list of such solutions.
		</p>

		<h2>Final Reflections</h2>
		<p>
			Like with the examples above, technology never seizes to amaze me. Evidently, there is great
			potential in their use. Yet, what are its resulting disadvantages?
		</p>

		<p>
			OpenAi, for instance decided when they developed their GPT-2 model to not make it fully
			available due to its potential to create fake news with it. In addition, later OpenAi went one
			step further and called out to create a general collaboration on AI safety in <a
				href="https://openai.com/index/cooperation-on-safety/"
				target="_blank">this post</a
			>.
		</p>

		<p>
			I agree with this line of thought. We have to weigh AI’s possibilities and dangers and check
			them against our values and beliefs. Technology in the end is nothing but tool, powerful
			though. Reason for which this old adage from before Christ rings true again:
		</p>

		<p>“With great power comes great responsibility.”</p>

		<p>
			AI has only started and we are still to see much more of it in the coming years. If you want
			to read another interesting example of Natural Language Processing AI at work, <a
				href="https://constantinbosse.com/2021/11/09/good-read-ai-summarizing-books/"
				target="_blank">here is another post of mine</a
			>.
		</p>
		<PrevNextPost currentPage={currentPost.slug} {allPosts} />
	</Post>
</Wrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints' as bp;

	h2,
	h3 {
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

	figure {
		text-align: center;
		margin-top: 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		img {
			max-width: 100%;
			height: auto;
			display: block;
		}

		figcaption {
			font-size: 0.875rem;
			color: var(--color--text);
			margin-top: 0.5rem;
			text-align: center;
		}
	}

	table {
		width: 100%;
		border-collapse: collapse;
		color: var(--color--text);
		margin-top: 2rem;
	}

	th,
	td {
		border: 1px solid var(--color--border);
		padding: 10px;
		text-align: left;
		color: var(--color--text);
	}

	th {
		background-color: var(--color--page-background);
		font-weight: bold;
		color: var(--color--text);
	}
</style>
