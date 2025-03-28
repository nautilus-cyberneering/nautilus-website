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

		<img
			src="/images/posts-images/great-jsdaycanarias-2022-software-developer-event/tenerife.jpg"
			alt="tenerife"
		/>

		<p>
			The event revolved around Java Script, touching on different topics such as Security, Web 3.0,
			databases, Rust compared to Java Script, etc. There were international speakers from the USA,
			Israel, Switzerland, etc. such as <a href="https://www.linkedin.com/in/adriennetacke/"
				>Adrienne Tacke</a
			>, <a href="https://www.linkedin.com/in/talliran/">Liran Tal</a> and
			<a href="https://www.linkedin.com/in/max-gfeller-038b1847/">Max Gfeller</a>.
		</p>

		<figure>
			<div class="image-grid">
				<div>
					<img
						src="/images/posts-images/great-jsdaycanarias-2022-software-developer-event/event-day-1.jpg"
						alt="event 1"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/great-jsdaycanarias-2022-software-developer-event/event-day-2.jpg"
						alt="event 2"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/great-jsdaycanarias-2022-software-developer-event/event-day-3.jpg"
						alt="event 3"
					/>
				</div>
			</div>
			<div class="double-image">
				<img
					src="/images/posts-images/great-jsdaycanarias-2022-software-developer-event/event-day-4.jpg"
					alt="event 4"
				/>
				<img
					src="/images/posts-images/great-jsdaycanarias-2022-software-developer-event/event-day-5.jpg"
					alt="event 5"
				/>
			</div>
			<figcaption>Pictures from the event days</figcaption>
		</figure>
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

		<figure>
			<img
				src="/images/posts-images/great-jsdaycanarias-2022-software-developer-event/teide-view-1.jpg"
				alt="teide view 1"
			/>
			<figcaption>Teide view from Las Mercedes</figcaption>
		</figure>

		<figure>
			<div class="image-grid">
				<div>
					<img
						src="/images/posts-images/great-jsdaycanarias-2022-software-developer-event/teide-view-2.jpg"
						alt="teide view 2"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/great-jsdaycanarias-2022-software-developer-event/teide-view-3.jpg"
						alt="teide view 3"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/great-jsdaycanarias-2022-software-developer-event/teide-view-4.jpg"
						alt="teide view 4"
					/>
				</div>
			</div>
		</figure>

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
		<PrevNextPost currentPage={currentPost.slug} {allPosts} />
	</Post>
</Wrapper>

<style lang="scss">
	@use '$lib/scss/breakpoints' as bp;

	p {
		margin-top: 1.5rem;
	}

	p {
		color: var(--color--text-secondary);
	}

	figure {
		text-align: center;
		margin-top: 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		div {
			margin-top: 1rem;
		}

		.image-grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: 1fr;
			grid-column-gap: 1rem;

			div {
				display: flex;
				justify-content: center;
				object-fit: cover;

				img {
					width: auto;
					object-fit: cover;
				}
			}
		}

		img {
			max-width: 100%;
			height: auto;
			display: block;
		}

		.double-image {
			display: flex;
			gap: 1rem;

			img {
				width: 50%;
			}
		}

		figcaption {
			font-size: 0.875rem;
			color: var(--color--text);
			margin-top: 0.5rem;
			text-align: center;
		}
	}
</style>
