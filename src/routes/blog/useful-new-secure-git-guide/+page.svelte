<script lang="ts">
	let { data } = $props();
	let { currentPost, allPosts } = data;
	import Post from '$lib/components/molecules/Post.svelte';
	import Wrapper from '$lib/components/atoms/Wrapper.svelte';
	import PrevNextPost from '$lib/components/molecules/PrevNextPost.svelte';
	import Project from '$lib/components/atoms/Project.svelte';
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
			Last month we launched our Secure Git Guide. We decided to create it so that other developers
			can benefit from our insights from the work that we are doing involving advanced Git.
		</p>

		<p>
			For our new projects our team has intensely worked with the intricacies of Git and GitHub and
			still is doing so. There were several challenges that our developers had to deal with and
			things that they discovered.
		</p>

		<p>If you use git check it out we touch upon the following topics:</p>

		<ul>
			<li>GPG and how we use it for projects.</li>
			<li>GPG basic and more advanced uses in relation to GIT and GitHub.</li>
			<li>GitHub secrets, tokens, etc.</li>
			<li>GIT vs GitHub differences.</li>
			<li>etc.</li>
		</ul>

		<p>
			Here is the link to out <a href="https://secure-git.guide/">Secure Git Guide</a> if you have
			suggestions, would like to contribute or are dealing with any specific challenges we are
			always looking forward to be of help and improve the guide. If any of the above is your case,
			feel free to create an issue in our GitHub repository
			<a href="https://github.com/Nautilus-Cyberneering/secure-git-guide/issues/new">here</a>.
		</p>

		<p>
			Besides this if you are curious about any of our main project repositories they are these:
		</p>

		<div class="projects">
			<Project
				title={'AI & ML'}
				para={'Command line AI assistant base module and the necessary infrastructure to train and expand it, with additional AI modules.'}
				linkUrl={'https://github.com/Nautilus-Cyberneering/ai_assistant_roadmap'}
				linkName={'AI Buddy Assistant'}
				image={'/images/posts-images/useful-new-secure-git-guide/AI-ASSISTANT.jpg'}
				alt={'AI buddy assistant'}
				projectType={'In-House'}
				openSource={'100%'}
			/>
			<Project
				title={'Rust'}
				para={'Highly efficient Torrent indexing and tracking server solution written in Rust for private hosting and operation.'}
				linkUrl={'https://github.com/Nautilus-Cyberneering/ai_assistant_roadmap'}
				linkName={'Torrust'}
				image={'/images/posts-images/useful-new-secure-git-guide/Torrust-Square.jpg'}
				alt={'Torrust'}
				projectType={'Sponsored'}
				openSource={'100%'}
			/>
		</div>

		<p>More on our company <a href="https://nautilus-cyberneering.de/">here</a>.</p>

		<p>Thank you for reading and we hope that you will learn something new!</p>
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

	.projects {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background-color: var(--color--page-secondary);
		padding: 1rem;

		@include bp.for-tablet-portrait-up {
			flex-direction: row;
		}
	}
</style>
