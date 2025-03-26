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
			Throughout 2020 we had to face a lot of challenges, so at the beginning of 2021 we were more
			than ready to face a new one, which resulted in Boken Engine. This time in the form of a new
			project, something none of us had ever been asked to do before. The idea was to develop a
			software around which we could build a community, following the Open Source foundations and
			its four core freedoms:
		</p>

		<ol>
			<li>To run the program for any purpose.</li>
			<li>To study how the program works and change it to make it do what you wish.</li>
			<li>To redistribute it.</li>
			<li>To distribute copies of your modified versions from others.</li>
		</ol>

		<p>
			For this we established a multidisciplinary team, made up of developers, and business
			consultants all of us working remotely, based in Germany and Spain.
		</p>

		<p>
			Within the team we had many years of experience in the design and development of digital
			products but never Open Source, so we were eager to learn from this new project and document
			our trip into the unknown.
		</p>

		<p>
			But before going any further, let’s give you a bit of background information. The groundwork
			of the project was done a few months ago. In an earlier phase, most of the team worked on the
			development of a software product that would eventually evolve into <a
				href="https://github.com/boken-engine/boken-engine">Boken Engine</a
			>.
		</p>

		<p>In that preliminary phase, the objective was twofold:</p>

		<ul>
			<li>
				On the one hand, we wanted to create an iOS Game engine for 2D multimedia slides-based
				games, with several elements characteristic of Point and Click adventures.
			</li>
			<li>On the other hand, we wanted to publish the resulting game in the App Store.</li>
		</ul>

		<p>
			We managed to develop a fully functioning application called <a
				href="https://github.com/boken-engine/15-universe-facts">“15 facts of the Universe”</a
			> but in the end could not publish because it was not approved for the Apple Store. The Apple Store’s
			rejection message: “…the usefulness of your app is limited by the minimal amount of content or
			features it includes.”.
		</p>

		<p>
			After several months of work, this drawback not only did not discourage us, but also provided
			us with some lessons that would be particularly useful to move forward with the second phase,
			and that’s how we started Boken.
		</p>

		<p>
			To begin with, we refactored the software to convert it to a framework to make it more
			versatile, giving the possibility to create new applications based on a fully configurable
			multimedia content (adding text, sound, and images).
		</p>

		<p>
			Boken thus became a tool that allowed us to create different types of applications and games.
			In addition to this we developed new functionalities that would take the possibilities of the
			framework further and enrich the applications resulting from using it.
		</p>

		<p>
			In parallel to the technical development, we started researching about different practices on
			common Open Source projects. We learned about the best practices and the recommendations on
			how successful communities have been managed to attract and involve users committed to a
			common goal. We also learnt about Open Source licensing, business, and commercialization
			models, in addition to community contribution management and governance models.
		</p>

		<p>
			The whole process is documented and it’s <a
				href="https://github.com/boken-engine/boken-engine/tree/master/doc"
				>available on the project’s GitHub repository</a
			>, so that anyone interested in joining us can check how we progressed and the different
			things that we looked at on this road.
		</p>

		<p>
			Something worth mentioning too, is that our regular weekly meetings to review our progress
			helped us to continuously improve, getting valuable feedback for further development, both in
			building the software and in building the community.
		</p>

		<p>
			In this way, we feel that we have made consistent progress on several useful new features for
			the future, and we can state that Boken is currently ready to be used by anyone interested in
			creating their own applications, games, and presentations.
		</p>

		<p>
			At this moment we are working on a <a
				href="https://github.com/boken-engine/iakkai-saga-the-curse-of-blood">demo project</a
			>
			to showcase the real power and features of the framework. It is a visual novel styled as a
			<a href="https://en.wikipedia.org/wiki/Choose_Your_Own_Adventure">Choose Your Own Adventure</a
			> (CYOA) books, set in an Epic Fantasy world, and geared towards a young adult audience.
		</p>

		<p>
			We are open to receive new contributors interested in participating both in the development
			and improvement of Boken and in helping us to work on the demo. Are you interested? Go ahead
			and check our GitHub or Website to know more about it. Also check out our <a
				href="https://nautilus-cyberneering.de/projects/">company project page</a
			> to see more of the things that we do.
		</p>

		<p>We’d love to have you onboard!</p>
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
</style>
