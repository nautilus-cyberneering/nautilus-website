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
			Beginning of last month we had two intensive weeks of in person meetings and activities with
			the visit of our CEO and CTO, Cameron Garnham.
		</p>

		<p>
			It was a great opportunity to get together and enjoy some good food and weather while talking
			about different project related topics as well as getting to know each other.
		</p>

		<figure>
			<div class="image-grid">
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/reunion-1.jpg"
						alt="reunion 1"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/reunion-2.jpg"
						alt="reunion 2"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/reunion-3.jpg"
						alt="reunion 3"
					/>
				</div>
			</div>
			<div>
				<img
					src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/reunion-4.jpg"
					alt="reunion 4"
				/>
			</div>
			<figcaption>Meetings surrounded by nature in Bandama</figcaption>
		</figure>

		<h2>Discussions</h2>
		<p>Some of the things that we talked about were:</p>

		<ul>
			<li>The relevance of Blockchain for our project and its upcoming challenges.</li>
			<li>
				How <a href="https://en.wikipedia.org/wiki/Blockchain" target="_blank">Blockchain</a> works and
				why Blockchain is important for AI development.
			</li>
			<li>
				How <a href="https://en.wikipedia.org/wiki/Bitcoin" target="_blank">Bitcoin</a> works and its
				relevance as an example of Blockchain implementation for the economy.
			</li>
			<li>Bitcoin’s development process and which elements make sense to emulate for us.</li>
			<li>
				Our Spin-off projects’ (<a
					href="https://github.com/Nautilus-Cyberneering/git-queue"
					target="_blank">Git-Queue</a
				>
				and
				<a href="https://github.com/Nautilus-Cyberneering/nautilus-librarian" target="_blank"
					>Librarian</a
				>) usefulness to other repositories and which things to focus on.
			</li>
			<li>Our hiring and community building plans.</li>
			<li>The relevance of Open-Source to AI and software development overall.</li>
			<li>
				Review of the expertise that we are gathering and the perceived improvements that can be
				made to the tools that we are using.
			</li>
			<li>How AI models can be expanded using plants as additional neural networks.</li>
		</ul>

		<h2>Excursions</h2>
		<p>
			Many of the meetings were held on the go while exploring the island together. We had several
			excursions to the coast in the north and south as well as some visits to the islands inner,
			and a small detour to visit a Bonsai center in Teror.
		</p>

		<h2>Coast Trips</h2>
		<figure>
			<div class="image-grid">
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/coast-trip-1.jpg"
						alt="coast trip 1"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/coast-trip-2.jpg"
						alt="coast trip 2"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/coast-trip-3.jpg"
						alt="coast trip 3"
					/>
				</div>
			</div>
			<div class="image-grid">
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/coast-trip-4.jpeg"
						alt="coast trip 4"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/coast-trip-5.jpg"
						alt="coast trip 5"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/coast-trip-6.jpeg"
						alt="coast trip 6"
					/>
				</div>
			</div>
			<figcaption>El Confital’s Rocky Coast, Las Canteras Beach, Maspalomas</figcaption>
		</figure>

		<h2>Mountain Trips</h2>
		<figure>
			<div class="image-grid">
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/mountain-trip-1.jpeg"
						alt="mountain trip 1"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/mountain-trip-2.jpeg"
						alt="mountain trip 2"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/mountain-trip-3.jpeg"
						alt="mountain trip 3"
					/>
				</div>
			</div>
			<div>
				<img
					src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/mountain-trip-4.jpeg"
					alt="mountain trip 4"
				/>
			</div>
			<figcaption>Artenara to Moya Road</figcaption>
		</figure>

		<h2>Bonsai Center</h2>
		<figure>
			<div class="image-grid">
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/bonsai-center-1.jpeg"
						alt="bonsai center 1"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/bonsai-center-2.jpg"
						alt="bonsai center 2"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/bonsai-center-3.jpeg"
						alt="bonsai center 3"
					/>
				</div>
			</div>
			<div class="image-grid">
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/bonsai-center-4.jpg"
						alt="bonsai center 4"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/bonsai-center-5.jpg"
						alt="bonsai center 3"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/bonsai-center-6.jpg"
						alt="bonsai center 3"
					/>
				</div>
			</div>
			<div>
				<img
					src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/bonsai-center-7.jpg"
					alt="bonsai center 3"
				/>
			</div>
			<figcaption>El Valle Bonsai Center, Teror</figcaption>
		</figure>

		<h2>Team Building</h2>
		<p>
			All in all the two weeks were filled with interesting conversations and good team building
			exercises like hiking in the foggy and rainy mountains.
		</p>
		<figure>
			<div class="image-grid">
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/team-building-1.jpeg"
						alt="team building 1"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/team-building-2.jpeg"
						alt="team building 2"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/team-building-3.jpeg"
						alt="team building 3"
					/>
				</div>
			</div>
			<div class="image-grid">
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/team-building-4.jpeg"
						alt="team building 4"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/team-building-5.jpeg"
						alt="team building 5"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/team-building-6.jpeg"
						alt="team building 6"
					/>
				</div>
			</div>
			<div class="image-grid">
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/team-building-7.jpeg"
						alt="team building 7"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/team-building-8.jpg"
						alt="team building 8"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/team-building-9.jpg"
						alt="team building 9"
					/>
				</div>
			</div>
			<div class="double-image">
				<img
					src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/team-building-10.jpeg"
					alt="team building 10"
				/>
				<img
					src="/images/posts-images/extraordinary-first-company-reunion-in-gran-canaria-for-2022/team-building-11.jpg"
					alt="team building 11"
				/>
			</div>
			<figcaption>Caldera de lo Marteles to Santa Lucia</figcaption>
		</figure>

		<p>
			We look forward to the next meeting in September!!! If you want to know about how to become
			part of our team, <a href="https://nautilus-cyberneering.dev/about" target="_blank"
				>check this out</a
			>.
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
