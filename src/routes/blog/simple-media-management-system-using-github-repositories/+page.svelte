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
			Our current new project is to create a simple media management system through GitHub
			repositories and GitHub actions.
		</p>

		<p>
			We are currently collaborating with the Hong Kong Company called <a
				href="https://www.ethicalsoftware.hk/">Ethical Software Ltd.</a
			>, their team of artists, designers and calligraphers have spent the last two years creating a
			large amount of artistic imagery and 4 different sets calligraphy of 214 Chinese radicals.
		</p>

		<h2>Project Description</h2>
		<p>
			We are to help them create an automated media asset management platform, where they want
			standardize and automate their production and deployment process with little to no human
			intervention.
		</p>

		<p>
			Their production process will include artists, calligraphers, and designers with basic
			computer skills, and almost no technical knowledge. Each on of them will submit new or changed
			media assets for review. Hereafter the following production process will launch:
		</p>

		<ul>
			<li>Logging the file</li>
			<li>Creating a copy</li>
			<li>Resizing</li>
			<li>Changing the quality and format</li>
			<li>Creating new metadata</li>
			<li>Applying a new name following a pre-defined naming scheme</li>
			<li>Saving it to the corresponding folders to a remote storage location</li>
			<li>
				Creating a library registry of the original files and the new variant files using version
				control
			</li>
		</ul>

		<p>
			Once the production is completed the deployment process automatically launches and publishes
			the new files to a website and a pdf.
		</p>

		<p>
			The original files that we will manage can range from 200 to 700 MB in size. Here is a small
			sample of such images so you get an idea.
		</p>

		<h3>Artwork</h3>
		<figure>
			<div class="image-grid">
				<div>
					<img
						src="/images/posts-images/simple-media-management-system-using-github-repositories/artwork-1.jpg"
						alt="artwork 1"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/simple-media-management-system-using-github-repositories/artwork-2.jpg"
						alt="artwork 2"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/simple-media-management-system-using-github-repositories/artwork-3.jpg"
						alt="artwork 3"
					/>
				</div>
			</div>
			<div class="double-image">
				<img
					src="/images/posts-images/simple-media-management-system-using-github-repositories/artwork-4.jpg"
					alt="artwork 4"
				/>
				<img
					src="/images/posts-images/simple-media-management-system-using-github-repositories/artwork-5.jpg"
					alt="artwork 5"
				/>
			</div>
			<figcaption>
				Sample Artwork – Courtesy of Ethical Software Ltd. – <a
					href="https://creativecommons.org/licenses/by-sa/4.0/legalcode"
					>Creative Commons Attribution Share Alike 4.0 International (CC-BY-SA-4.0)</a
				>
			</figcaption>
		</figure>

		<h3>Radicals & Variants</h3>
		<figure>
			<div class="image-grid">
				<div>
					<img
						src="/images/posts-images/simple-media-management-system-using-github-repositories/calligraphy-1.jpg"
						alt="calligraphy 1"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/simple-media-management-system-using-github-repositories/calligraphy-2.jpg"
						alt="calligraphy 2"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/simple-media-management-system-using-github-repositories/calligraphy-3.jpg"
						alt="calligraphy 3"
					/>
				</div>
			</div>
			<div class="image-grid">
				<div>
					<img
						src="/images/posts-images/simple-media-management-system-using-github-repositories/calligraphy-4.jpg"
						alt="calligraphy 4"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/simple-media-management-system-using-github-repositories/calligraphy-5.jpg"
						alt="calligraphy 5"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/simple-media-management-system-using-github-repositories/calligraphy-6.jpg"
						alt="calligraphy 6"
					/>
				</div>
			</div>
			<div>
				<img
					src="/images/posts-images/simple-media-management-system-using-github-repositories/calligraphy-7.jpg"
					alt="calligraphy 7"
				/>
			</div>
			<figcaption>
				Sample Calligraphy- Courtesy of Ethical Software Ltd. – <a
					href="https://creativecommons.org/licenses/by-sa/4.0/legalcode"
					>Creative Commons Attribution Share Alike 4.0 International (CC-BY-SA-4.0)</a
				>
			</figcaption>
		</figure>

		<h2>Creating a Simple Media Management System</h2>
		<p>
			The beauty of our planned approach for a simple media management system, is that expected
			maintenance costs will be insignificant.
		</p>

		<p>
			For one thing technology wise, we strive to interconnect several GitHub repositories and make
			extensive use of GitHub actions and Python scripts in combination with an Open-Source version
			control system for machine learning projects called <a href="https://dvc.org/">DVC</a>.
		</p>

		<p>
			Even though, DVC is originally meant for machine learning DVC we consider it adequate for our
			purpose since it offers an elegant way to handle version control for large binaries.
		</p>

		<p>
			Hence, if you need to manage large binaries and have version control, we encourage you to
			check it out, since it has proven so far very useful and its documentation is very good.
		</p>

		<h2>Project Objectives for Nautilus</h2>
		<p>Certainly, like with all of our projects we strive to do the following:</p>

		<ul>
			<li>Contribute to projects we think that add value to the community</li>
			<li>Explore new approaches to solve problems</li>
			<li>Collaborate with and or develop Open-Source software</li>
			<li>Add to our personal development and learning</li>
			<li>Do interesting things that we can share</li>
			<li>
				Build our expertise and skills towards our long term goals as a company and as individuals
			</li>
		</ul>

		<p>
			Indeed, we believe that this project meets all our objectives and especially contributes to
			our long term project’s first stepping stone:
		</p>

		<ul>
			<li>
				Learning how to create complex repository structures, to manage version controlled large
				binary data sets hosted at remote locations.
			</li>
		</ul>

		<p>
			If you are curious about what we do and want to have a look at the POC repository or GitHub
			page:
		</p>

		<ul>
			<li>
				<a href="https://github.com/Nautilus-Cyberneering/chinese-ideographs">Chinese Ideographs</a>
			</li>
			<li>
				<a href="https://github.com/Nautilus-Cyberneering"
					>Nautilus Cyberneering GmbH Github organization</a
				>
			</li>
		</ul>

		<p>Finally, if you would like to collaborate with us let us know!</p>
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
