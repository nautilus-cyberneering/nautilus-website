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
			I recently attended a Software Developer event in Tenerife called JSDay for which I had been
			giving much thought to possible questions by someone considering Nautilus Cyberneering.
		</p>

		<p>
			As for me when joining a company, the first thing I would always look into is what it is like
			to work for this company. Given this I thought that I could write about it here too.
		</p>

		<p>
			To better explain though what it is like, I need to reach back to how I got the opportunity to
			collaborate with such a great team of people.
		</p>

		<h2>Opportunity to Join the Team</h2>
		<p>
			I was invited to join the team beginning of 2021 while working for my prior employer Hyve, and
			half a year later given my other responsibilities within the company I joined the team.
		</p>

		<p>
			At that time, I had been collaborating part-time on a software project for over a year. I will
			explain the factors that differentiated this project from others that all of us had been
			working on so far to better explain how we are working today.
		</p>

		<h3>Boken Engine Project</h3>

		<figure>
			<img
				src="/images/posts-images/what-it-is-like-to-be-part-of-the-nautilus-cyberneering-team/Boken-Engine-GitHub.jpg"
				alt="boken engine"
			/>
			<figcaption>Boken Engine Repository</figcaption>
		</figure>

		<p>The project had four main parts:</p>

		<ol>
			<li>
				Developing an IOS framework for nonlinear storytelling and creating IOS apps, called Boken
				Engine.
			</li>
			<li>Creating a sample IOS app.</li>
			<li>Making the project Open-Source and applying best practices.</li>
			<li>Analyzing the monetization options for Open-Source projects.</li>
		</ol>

		<p>
			I have no developer background but a business background, so I focused mostly on the last two.
		</p>

		<p>For these, I researched and prepared reports like:</p>

		<ul>
			<li>Key challenges for open-source projects to grow and become profitable.</li>
			<li>Stakeholder analysis and persona creation.</li>
			<li>Project-specific SWOT analysis, etc.</li>
			<li>
				Research and analyzed specific monetization options and business models depending on
				licensing.
			</li>
		</ul>

		<p>
			All in all, a very interesting project where I learned a lot about a completely different
			industry and way of working. Also in case that your are curious about our work on Open Source
			projects, best practices etc. Check it out here.
		</p>

		<h3>Team collaboration and autonomous working</h3>
		<p>
			As you can see, I contributed to the non-development aspects of the project, but I actively
			had to do so using GitHub repositories. We used these repositories for storage and publishing
			of all our work so if you are curious, you can check it out here.
		</p>

		<p>
			Initially, I had my issues and my colleagues all helped me overcome my GitHub on-boarding
			experience. Also, given that in the team, I was the only non-developer, when some technical
			aspects were discussed, my colleagues always helped me. For my part, I did the same. All in
			all, it was a very collaborative easy-going atmosphere, where everyone helped each other and
			took their time to explain their work.
		</p>

		<h3>Generous timeline to learn and explore</h3>
		<p>
			We had a very generous timeline. The project’s customer had insisted on this point and that we
			had to document everything, to make a report and optimize it.
		</p>

		<p>
			In addition, this customer gave us almost complete freedom to explore and test new
			technologies or learn new skills for the project, we all had plenty of time to do so without
			pressure.
		</p>

		<p>
			My colleagues, for example, had to learn Swift and related frameworks to develop the
			framework. This was completely accepted since the timelines were generous and the focus was
			often on creating good processes to generate quality work. Autonomous thinking so that the
			customer did not have to be involved in every step was also important.
		</p>

		<p>
			We all did what had to be done and we all chipped in when there was some unexpected new
			hurdle, or a different path had to be taken. For example, when the artist that we had spoken
			to for our demo app could not deliver, two of us had to become artists. We used our creativity
			and drawing skills to create all the visual art for the Iakkai Saga: Curse of Blood app listed
			in the Apple Store.
		</p>

		<figure>
			<img
				src="/images/posts-images/what-it-is-like-to-be-part-of-the-nautilus-cyberneering-team/iakkai-title-screen.png"
				alt="iakkai title screen"
			/>
			<figcaption>Iakkai: Saga Curse of Blood Logo</figcaption>
		</figure>

		<figure>
			<div class="image-grid">
				<div>
					<img
						src="/images/posts-images/what-it-is-like-to-be-part-of-the-nautilus-cyberneering-team/hunter.png"
						class="app-screenshot"
						alt="hunter"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/what-it-is-like-to-be-part-of-the-nautilus-cyberneering-team/arms.png"
						class="app-screenshot"
						alt="arms"
					/>
				</div>
				<div>
					<img
						src="/images/posts-images/what-it-is-like-to-be-part-of-the-nautilus-cyberneering-team/village.png"
						class="app-screenshot"
						alt="village"
					/>
				</div>
			</div>
			<figcaption>Sample Screenshots from the App</figcaption>
		</figure>

		<p>
			We were proactive and got things done, and we all did enjoy the whole experience. It was a
			great and rewarding experience.
		</p>

		<p>
			If you want to see the public repository <a
				href="https://github.com/boken-engine/iakkai-saga-the-curse-of-blood/"
				target="_blank">here it is</a
			>.
		</p>

		<h2>Current Project</h2>
		<p>
			Our current project will take at least 5 years to accomplish if not more. It is ambitious
			since it is challenging in many ways. The challenges are both technical and promotional from a
			community creation point of view since we are open source. The project owner is our CEO and
			CTO. The project is based on his long-term vision.
		</p>

		<h3>Project Vision</h3>
		<p>
			As of today in the process of developing and using software we install hundreds of packages.
			We often do not know their origin or contents. We often blindly install these to create
			software. Do we know if the version that we install is the original or whether it has been
			modified? No, and as AI progresses the same problem is going to evolve.
		</p>

		<p>
			Our CTO envisions how AI will evolve. He foresees the urgent need to circumvent the existing
			security problems that the current approach to software packages has in general, such as:
		</p>

		<ul>
			<li>Lack of security due to no real transparency of the code or datasets.</li>
			<li>Non-modifiable version changes and time-stamping</li>
		</ul>

		<h3>Five Year Objective</h3>
		<p>
			The goal is to test the solution to the security challenges from his vision by creating three
			main elements:
		</p>

		<ul>
			<li>
				An AI assistant modular concept which can be run locally and expanded with additional
				specialized AI modules.
			</li>
			<li>
				The necessary infrastructure for the creation and storage of additional custom AI modules
				that includes versioning, time stamping, and certifying their immutability once published.
			</li>
			<li>A marketplace for their distribution.</li>
		</ul>

		<p>
			If you want to know more about all our projects in brief <a
				href="https://nautilus-cyberneering.dev/"
				target="_blank">here</a
			>
			you have all the necessary information. Also if you want to check out our GitHub repositories
			<a href="https://github.com/Nautilus-Cyberneering" target="_blank">here is the link</a>.
		</p>

		<h3>Project Atmosphere</h3>
		<p>
			Essentially the project atmosphere is like in the previous project: Relaxed, collaborative
			with no rushing timelines.
		</p>

		<p>
			What I like best though is that our work is very dynamic, it is Open Source and we have 100%
			of flex time and work location.
		</p>

		<h3>Dynamism</h3>
		<p>As for dynamism, the factors that add to this are:</p>

		<ul>
			<li>Rounds of additional research</li>
			<li>Cycles of review and reevaluation of accomplished work</li>
			<li>Building new skills when exploring options</li>
			<li>We are making something from scratch</li>
			<li>Making mistakes is just part of the explorative process</li>
		</ul>

		<p>An example of this dynamism is our spin-Offs.</p>

		<p>
			Our CTO is aware of all the technical project challenges, especially that if there are no
			existing viable solutions we will have to custom develop them. Our current custom solution
			spin-off projects are:
		</p>

		<ul>
			<li>
				<strong>Git-Queue:</strong> Is GitHub Action job queue for use in GitHub repositories with
				the following characteristics:

				<div class="images">
					<img
						src="/images/posts-images/what-it-is-like-to-be-part-of-the-nautilus-cyberneering-team/Git-Queue.jpg"
						alt="git queue"
					/>
				</div>

				<ul>
					<li>
						It only allows one pending job at the same time. <a
							href="https://github.com/Nautilus-Cyberneering/git-queue/issues/6"
							target="_blank">Multiple pending jobs feature</a
						> is planned.
					</li>
					<li>Jobs are done by GitHub workflows intended to create git commits and merge them.</li>
					<li>
						It provides an optimistic locking mechanism to guarantee that commits are merged in a
						mutual exclusion way, avoiding duplicate commits. When the queue accepts more than one
						active (not finished) job it will also guarantee the execution order.
					</li>
					<li>
						<a href="https://github.com/Nautilus-Cyberneering/git-queue" target="_blank"
							>Link to our repository</a
						>
					</li>
				</ul>
			</li>
			<li>
				<strong>Nautilus Librarian:</strong> A Python Console application to handle media libraries
				with <a href="https://git-scm.com/" target="_blank">Git</a> and
				<a href="https://github.com/iterative/dvc" target="_blank">Dvc</a>.

				<div class="images">
					<img
						src="/images/posts-images/what-it-is-like-to-be-part-of-the-nautilus-cyberneering-team/Librarian-logo.jpg"
						alt="librarian logo"
					/>
				</div>

				<a href="https://github.com/Nautilus-Cyberneering/nautilus-librarian" target="_blank"
					>Link to our repository</a
				>
			</li>
		</ul>

		<h3>Open Source and Trust in the Team</h3>
		<p>
			The fact that we work and create value for anyone with everything that we do gives our work a
			different flavor. We feel great about what we do but are also more responsible about our work.
			Trust in each other’s work and professionalism is a given we operate very much like a large
			group of friends who enjoy working together.
		</p>

		<h3>Flex Work and Flex Hours</h3>
		<p>
			This last point is only possible because of the trust we receive in our work. We have only one
			fixed commitment during the week as for the rest, what is important is that we do the best
			possible to work towards our team’s goal.
		</p>

		<p>
			This is very easy to check since our work is all there, online. Also, we have no fixed office
			and all our team members contribute remotely. Our founders and CEO encourage us to do so too
			and to even travel if we like working from abroad.
		</p>

		<h2>Conclusion</h2>
		<p>
			To conclude, I would say that working at Nautilus is great. It’s a very special and unusual
			place to work for. The combination of all the factors creates an environment where I enjoy
			every day and find my time well spent and rewarding and most important for me is that I do not
			get bored. 😁
		</p>

		<p>
			I would encourage anyone with the same values and motivation as me to apply to join our team!
		</p>

		<p>
			If you would like more information on this <a
				href="https://github.com/Nautilus-Cyberneering/.github/blob/main/hiring/hiring_process.md"
				>here</a
			> it is, besides if you would like to contact me, please do so at:
		</p>

		<ul>
			<li>constantin@nautilus-cyberneering.de</li>
			<li>
				<a href="https://www.linkedin.com/in/constantin-bosse/"
					>https://www.linkedin.com/in/constantin-bosse/</a
				>
			</li>
		</ul>
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

	.images img {
		margin: 0 auto;
		margin-top: 2rem;
		width: 200px;
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

		figcaption {
			font-size: 0.875rem;
			color: var(--color--text);
			margin-top: 0.5rem;
			text-align: center;
		}
	}
</style>
