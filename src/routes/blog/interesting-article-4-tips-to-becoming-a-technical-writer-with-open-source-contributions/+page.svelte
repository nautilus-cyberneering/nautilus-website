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
			This is an excellent article by Ashley Hardin giving some useful tips that essentially states
			that:
		</p>

		<ul>
			<li>You do not need to be a developer to contribute to any Open-Source project.</li>
			<li>Contributing to Open-Source can be beneficial to your career.</li>
			<li>Helping others can be fun and rewarding.</li>
		</ul>

		<p>
			From reading this article you will get a clear understanding of how as an non developer you
			can help and grow projects that you care for and how appreciated your work can be as well as
			the personal benefits that you can derive from contributing.
		</p>

		<figure>
			<img
				src="/images/posts-images/interesting-article-4-tips-to-becoming-a-technical-writer-with-open-source-contributions/image.png"
				alt=""
			/>
			<figcaption>
				<a href="https://opensource.com/article/21/11/technical-writing-open-source" target="_blank"
					>https://opensource.com/article/21/11/technical-writing-open-source</a
				>
			</figcaption>
		</figure>

		<h3>My personal experience</h3>
		<p>
			Open-Source projects like our’s do require extensive documentation where every help is
			appreciated. Developers usually like doing what they do best, and writing documentation is not
			always their strength or their preferred activity.
		</p>

		<p>
			Well written technical documentation, well structured and easy to read is often challenging to
			find so that anyone with writing skills can become a valued contributor. Especially since good
			documentation helps attract other contributors.
		</p>

		<p>
			From my own experience having contributed to several of our current projects, sometimes only
			correcting spelling mistakes has made it easier to understand my colleagues words and to
			improve my writing at the same time.
		</p>

		<p>
			For me so far it has been a win-win, improving my writing skills as well as my understanding
			of technology and learning of new tools such as GIT.
		</p>

		<p>
			Also I anticipate that our company’s long term project, will bring many opportunities for me
			to broaden my understanding especially in the area of AI, where we are currently defining all
			the steps to be taken to create our vision for a customizabe AI assistant that will be able to
			run locally on any of your devices. If you are curious this is <a
				href="https://github.com/Nautilus-Cyberneering/ai_assistant_roadmap"
				target="_blank">the first rough draft of our roadmap</a
			>.
		</p>

		<h3>Finding interesting Open-Source projects</h3>
		<p>
			There are thousands of projects. Think about the things that you care about and search for it
			you will be surprised!
		</p>

		<p>
			For example here is a small list of projects in case that you are interested in the
			environment and sustainability:
		</p>

		<ul>
			<li>
				<a
					href="https://planet4.greenpeace.org/tag/community/#partners-open-sourcers"
					target="_blank">Greenpeace</a
				>
			</li>
			<li>
				<a href="https://wiki.ecohackerfarm.org/start" target="_blank">Eco Hacker Farm</a>
			</li>
			<li>
				<a href="https://wiki.opensourceecology.org/wiki/Project_needs" target="_blank"
					>Open Source Ecology</a
				>
			</li>
		</ul>

		<p>
			…. and <a href="https://awesomeopensource.com/projects/sustainability" target="_blank">here</a
			>
			is an even greater list on this topic, or check out
			<a href="https://awesomeopensource.com/" target="_blank">awesomeopensource.com</a>, which has
			sorted and organized over 9 million open-source projects.
		</p>

		<p>Why don't you give it a shot?</p>
		<PrevNextPost currentPage={currentPost.slug} {allPosts} />
	</Post>
</Wrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints' as bp;

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

	img {
		margin-top: 2rem;
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
			color: rgba(82, 82, 82, 1);
			margin-top: 0.5rem;
			text-align: center;
		}
	}
</style>
