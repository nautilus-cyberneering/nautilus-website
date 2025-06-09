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
			We are excited to announce that we are attending <a
				href="https://www.fintech.li/"
				target="_blank">Fintech.Li</a
			> 2022 conference on the 28th of this month!
		</p>

		<h2>What is Fintech.Li 2022?</h2>
		<p>The conference's tagline is:</p>
		<p>
			<strong>
				"Building the bridge from today to the future. Together we create magic in both worlds, in
				the centralized and decentralized world."
			</strong>
		</p>
		<p>
			Fintech.li 2022 is where the most powerful conversations and connections happen in real life.
			This is the place where the industry moves forward. There will be web3 thought leaders and
			exciting new projects to discover! This is an event not to be missed for anyone interested in
			learning about or being a part of the decentralized future!
		</p>
		<p>
			Some of the speakers are Eva Kaili (Vice President, European, Cyrus Fazel (Founder and CEO
			Swissborg), Mauro Casellini, CEO Bitcoin Suisse Liechtenstein & Head of Bitcoin Suisse Europe
			and many others. Parliament)Are you curios about the other speakers here you can find out <a
				href="https://www.fintech.li/speaker-22"
				target="_blank">here</a
			>.
		</p>

		<h2>Why are we attending?</h2>
		<p>
			We have several good reasons to be looking forward to be there. First is that as a company
			that is deeply committed to open-source, secure and decentralized approaches to solve
			challenges through innovative solutions, we are excited to attend the Fintech.li conference.
		</p>

		<p>
			This conference provides us with a great opportunity to learn from other like-minded
			individuals and network with them. We believe that this will be a valuable experience for our
			team as a whole, and we look forward to sharing our own experiences and expertise in these
			areas of blockchain, It-Security and learn more about web3, DAOs, and the potential
			decentralized future overall.
		</p>

		<p>
			Second, we will meet in person all the team members of our company group and have a great
			month of activities ahead of us. And last but not least we are attending two more conferences
			all related to blockchain, decentralization, etc.
		</p>

		<p>
			We will be flying in from Germany, Spain and other parts of the world to join our colleagues
			in Liechtenstein. We are all looking forward to an exciting and productive conference and time
			together! See you in no time <a href="https://blockfinance-eco.li/" target="_blank"
				>BlockFinance ECO AG</a
			>
			and <a href="https://hodl10.io/" target="_blank">Hodl10</a>!
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

	p {
		color: var(--color--text-secondary);
	}
</style>
