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
			End of last month we presented at a webinar organized by the German Chamber of Commerce in
			Spain.
		</p>

		<p>
			We were invited to collaborate during this session by the company <a
				href="https://edataconsulting.com/"
				target="_blank">edataconsulting</a
			> with whom we are working on a project.
		</p>

		<p>
			<strong>edataconsulting</strong> talked about the metaverse and we spoke about AI. The aim in this
			session was to create a good base understanding for non technical people and share some advice
			on where to start using these technologies.
		</p>

		<p>
			<a
				href="https://www.youtube.com/watch?app=desktop&v=Aki_7JfpBrI&feature=emb_logo&ab_channel=sociosahk"
				target="_blank">This</a
			>
			is a link to the webinar in case that you are interested and if you want to get a copy of the slides
			<a
				href="https://github.com/Nautilus-Cyberneering/.github/blob/main/events/webinars/20220331_TOPIC_AI/20220331%20-%20Webinar%20AHK%20-%20Nautilus%20-%20Presentation%20-%20AI.pdf"
				target="_blank">here they are</a
			>.
		</p>

		<p>
			Here is also a link to another blog post where I expand on the content that I share during the
			webinar.
		</p>

		<img
			src="/images/posts-images/webinar-ai-metaverse-what-they-are-and-how-they-can-add-value-to-my-business/AI-vs-Human-Brain-2.webp"
			alt="webinar"
		/>
		<a href="https://constantinbosse.com/2022/04/22/ai-explained-in-simple-words/" target="_blank">
			AI Explained in Simple Words
		</a>
		<PrevNextPost currentPage={currentPost.slug} {allPosts} />
	</Post>
</Wrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints' as bp;

	img {
		margin-top: 1rem;
	}

	p {
		color: var(--color--text-secondary);
		margin-top: 1.5rem;
	}
</style>
