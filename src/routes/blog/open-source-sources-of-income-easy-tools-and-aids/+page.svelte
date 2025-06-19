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
			It’s no secret that Open Source projects have a difficult time being financially sustainable
			and search for sources of income. Fact is many projects struggle just to keep the lights on.
			This is often because project maintainers have to look for stable sources of income, which can
			be difficult to find. Sadly, this often leads to project abandonment.
		</p>

		<p>
			The way I see it Open Source projects face similar problems to startups, and often end up
			becoming startups. However, there are ways to keep your open source project financially
			sustainable, or at least try to do so.
		</p>

		<p>In this article I will try to give you an overview of the methods that I have researched.</p>

		<h2>Different Financing Methods</h2>
		<p>
			You will find different approaches to financing. From common to less common and from
			commercial to non-commercial. Here is a simple list of these:
		</p>

		<h3>Non-Commercial</h3>
		<ol>
			<li>Donations</li>
			<li>Sponsoring & subscriptions</li>
		</ol>

		<h3>Commercial</h3>
		<ol>
			<li>Support contracts</li>
			<li>Licensing (Dual, Commercial, etc.)</li>
			<li>Specialized Hosting Services</li>
			<li>Bounties for Bugs and Features</li>
			<li>SaaS: Software as a Service alternatives</li>
			<li>Affiliation</li>
			<li>Conferences</li>
			<li>Brand Licensing</li>
			<li>Selling merchandise and other products</li>
			<li>Tokenization (SourceCred, DevProtocol, CommonsStack)</li>
			<li>Crowdfunding</li>
			<li>Foundation Grants</li>
		</ol>

		<h2>The Most Common Forms of Financing</h2>
		<p>
			In open-source, the three most common financing methods are donations, sponsoring, and support
			contracts. Let’s take a look at each of them in more detail.
		</p>

		<h3>Donations</h3>
		<p>
			Donations are perhaps the most obvious way to try to keep your project afloat. You can set up
			a donation page on your website or use a service like Patreon. The problem with donations is
			that they’re often not very reliable. You might get a big influx of donations one month and
			then nothing the next month. This can make it difficult to budget and plan for the future of
			your project.
		</p>

		<h3>Sponsorship and Subscriptions</h3>
		<p>
			Sponsoring is another common method of open source financing. In this model, companies or
			organizations pay you to work on your project. This is usually done in exchange for some kind
			of recognition, such as a link on your website or mentions in your project’s documentation.
			The advantage of this model is that it can provide a steady stream of income. The downside is
			that it can be difficult to find sponsors, and you may have to give up some control over your
			project in order to get them onboard.
		</p>

		<h3>Support Contracts</h3>
		<p>
			Another option is to offer support contracts for your project. In this model, companies or
			individuals pay you for help using or developing your software. This can be a great way to
			generate income, but it requires quite a bit of work on your part. You need to be able to
			provide timely support and have a good understanding of your project’s code base.
		</p>

		<h2>Other Forms of Financing</h2>
		<h3>Licensing (Dual, Commercial, etc.)</h3>
		<p>
			Some open-source projects choose to release their software under a dual license. This means
			that you can use the software for free, but if you want to use it commercially, you need to
			pay a fee. This model can work well if your project is popular and has a lot of users. The
			downside is that it can be difficult to enforce.
		</p>

		<h3>Specialized Hosting Services</h3>
		<p>
			Another option is to set up a specialized hosting service for your project. This can be a
			great way to generate income, but it requires quite a bit of work on your part. You need to be
			able to provide timely support and have a good understanding of your project’s code base.
		</p>

		<h3>Bounties for Bugs and Features</h3>
		<p>
			You might also give rewards for bugs and features. Companies or individuals may pay you to fix
			defects or develop new features on your project in this manner. This can be a lucrative
			business, but it comes with a lot of responsibilities on your side. You must be able to offer
			timely assistance and have a thorough knowledge of the source code base.
		</p>

		<h3>Saas: Software as a Service</h3>
		<p>
			This approach offers the option to use the Open Source project as a hosted online service.
			This approach pays a fee for its use without having to deal with any IT infrastructure or
			maintenance costs. This is a good way to generate income, but it requires quite a bit of work
			on your part. You need to be able to provide timely support, and have the necessary people and
			IT infrastructure setup. This service usually brings with it legal responsibilities.
		</p>

		<h3>Affiliation</h3>
		<p>
			In this approach, open-source projects can have an affiliation with the organization. The
			project gets some financial support, but not full funding. This model is a good way to get
			started, but it’s said to not be sustainable in the long run, though companies like Mozilla,
			affiliated to Google, having established it as their default search engine is a clear example
			of its potential for income.
		</p>

		<h3>Conferences</h3>
		<p>
			Conferences are another great way to generate income for open source projects. You can either
			organize your own conference or participate in someone else’s. This is a great way to get
			exposure for your project and meet other like-minded people. The downside is that it can be
			expensive and time-consuming to organize a conference.
		</p>

		<h3>Brand Licensing and or Certifications</h3>
		<p>
			This is the process of licensing your project’s name and logo to other companies. This can be
			a great way to generate income, but it comes with a lot of responsibility. You need to make
			sure that the companies you license to are reputable and will use your project’s name and logo
			in a positive light.
		</p>
		<p>
			This approach can be done once a project has a large user base and requires for example
			specialist consultants who could be certified as for example “Linux” Specialists, etc.
		</p>

		<h3>Selling Merchandise and Other Products</h3>
		<p>
			You can also sell merchandise and other products related to your project. This is a great way
			to generate income. You need to be able to promote your products and have a good understanding
			of your target market. Examples of this are for example companies who sell T-shirts, mugs,
			etc. and others which supply ready to use specialized products with their software installed.
		</p>

		<h3>Tokenization</h3>
		<p>
			This is a process of funding open source projects with the help of cryptocurrency. In this
			approach, people can contribute to your project by buying tokens and or becoming a part of it
			in some instances.
		</p>

		<h3>Crowdfunding</h3>
		<p>
			Crowdfunding is a great way to generate income for open source projects. You can use platforms
			like Kickstarter or Indiegogo to raise funds for your project.
		</p>

		<p>
			The downside of this approach is that it can be difficult to reach your funding goal unless
			you already have a follower group or community of users that can be interested in it.
		</p>

		<p>
			Things that are often funded are for example games, technological gadgets, art, etc. Check out
			Kickstarter.com for some insight.
		</p>

		<h3>Foundation Grants</h3>
		<p>
			These are usually donations from foundations of government institutions. There tends to be
			some formality involved in addition paperwork. Examples of such are:
		</p>

		<ul>
			<li>
				<a href="https://summerofcode.withgoogle.com/" target="_blank">Google Summer of Code</a>
			</li>
			<li>
				<a href="https://developers.google.com/season-of-docs" target="_blank">Season of Docs</a>
			</li>
			<li>
				<a href="https://developers.google.com/season-of-docs" target="_blank"
					>Open Source Security Foundation</a
				>
			</li>
			<li>
				<a href="https://nlnet.nl/" target="_blank">NLNet</a>
			</li>
		</ul>

		<h2>Implications to be considered for project owners</h2>
		<p>
			When one receives money either through a sale or through a donation one usually has to declare
			it and pay taxes on it. It is unfortunate but this is usually expected.
		</p>

		<p>Here is a screenshot to show you what I mean from the sponsoring tool by GitHub:</p>

		<figure>
			<img
				src="/images/posts-images/open-source-sources-of-income-easy-tools-and-aids/faq.png"
				alt="faq"
			/>
			<figcaption>Screenshot from GitHub Sponsor</figcaption>
		</figure>

		<p>
			Some countries have more tax and others have less, still the paperwork a project owner or
			contributors who receive funds have to be considered but in essence they are these four:
		</p>

		<ul>
			<li>Taxation of received funds</li>
			<li>Necessary legal implications</li>
			<li>Surrounding administrative complexity, paperwork and cost</li>
			<li>Book keeping of fund allocations for payments etc.</li>
		</ul>

		<p>In essence, once you receive money you will have to pay one way or the other part of it.</p>

		<h3>Open Source Project Owner and Contributor Types</h3>
		<p>
			In Open Source projects you can find mostly these different types of owners and contributors
			which can be divided into legally ready for receiving funds and others which are not:
		</p>

		<p>Legally prepared to receive funds:</p>

		<ul>
			<li>For-profit companies</li>
			<li>Not-for-profit companies and institutions</li>
			<li>Individuals who are set up as freelancers</li>
		</ul>

		<p>Legally not prepared to receive funds:</p>

		<ul>
			<li>Individuals who are not set up as freelancers</li>
			<li>Individuals who are under age</li>
		</ul>

		<p>
			The first group is usually able to open a bank account, have a PayPal account and can receive
			official direct payments. The second group has some limitations in this area but there are
			solutions that can help them do so. Nevertheless, they will have to become freelancers, create
			a company, another form of legal institution or channel the funds in case of minors through
			their legal tutors.
		</p>

		<h2>Simplifying Receiving Funds</h2>
		<p>
			In order to simplify receiving funds nowadays you have various digital options, some are
			solutions, services or software add ons for your repositories. I will go through a few marked
			in pink below just to give you an idea. The others require also talking about business models
			and are beyond the scope of this post.
		</p>

		<p>
			In addition below these examples you will find the link to the entire list that I have
			collected from different internet sources. The list is organized by the categories I have
			mentioned above. This list is one I will be exploring more in detail myself with my team of
			colleagues for our projects.
		</p>

		<h3>Non-Commercial</h3>
		<ol>
			<li>Donations</li>
			<li>Sponsoring & subscriptions</li>
		</ol>

		<h3>Commercial</h3>
		<ol>
			<li>Support contracts</li>
			<li>Licensing (Dual, Commercial, etc.)</li>
			<li>Specialized Hosting Services</li>
			<li>Bounties for Bugs and Features</li>
			<li>Saas: Software as a Service alternatives</li>
			<li>Affiliation</li>
			<li>Conferences</li>
			<li>Brand Licensing</li>
			<li>Selling merchandise and other products</li>
			<li>Tokenization (SourceCred, DevProtocol,CommonsStack)</li>
			<li>Crowdfunding</li>
		</ol>

		<h2>Available Online Tools and Solutions to Simplify Receiving Funds</h2>
		<h3>Donations and Sponsoring</h3>
		<p>
			The tools come in different flavors so to say. In a way you could say that there are two main
			approaches and then there are some innovative and different ones.
		</p>

		<p>
			The more common are recurrent donation and subscription platforms and one time small amount
			donation platforms.
		</p>

		<p>
			Examples of the first are <a
				href="https://docs.google.com/document/d/17w7Wz614gXB8zqEQM8VOwjIzVRvXnL8ISTYQDBDOYEs/edit?tab=t.0#heading=h.4ht9aj2cw09r"
				target="_blank">Patreon.com</a
			>, <a href="https://ko-fi.com/" target="_blank">Ko-fi.com</a> and
			<a href="https://liberapay.com/" target="_blank">Liberapay.com</a>. Examples of the second are
			<a href="https://en.tipeee.com/" target="_blank">Tipee.com</a>
			and <a href="https://buymeacoffee.com/" target="_blank">buymeacoffee.com</a>.
		</p>

		<p>
			Then you find a full service solution run by <a
				href="https://opencollective.com/"
				target="_blank">OpenCollective.com</a
			> in the (USA) where they will deal with all the necessary paperwork, legal setup etc. and you
			can function through them.
		</p>

		<p>Then there is GitHub’s solution that they are rolling out right now:</p>
		<ul>
			<li>
				<a href="https://github.com/sponsors" target="_blank">https://github.com/sponsors</a>
			</li>
		</ul>

		<figure>
			<img
				src="/images/posts-images/open-source-sources-of-income-easy-tools-and-aids/github-sponsors-landing-page.jpg"
				alt="faq"
			/>
			<figcaption>Screenshot GitHub Sponsors landing page</figcaption>
		</figure>

		<p>There is one additional approach that I found different but interesting and easy to use:</p>

		<ul>
			<li>
				<a href="https://giveth.io/es" target="_blank">Giveth.io</a>
			</li>
		</ul>

		<p>
			It is basically an online platform for social project funding which includes all types of Open
			Source as well as other public goods and non-profit social projects. The platform is about
			giving in crypto currencies such as Ethereum.
		</p>

		<figure>
			<img
				src="/images/posts-images/open-source-sources-of-income-easy-tools-and-aids/giveth-landing-page.png"
				alt="faq"
			/>
			<figcaption>Screenshot Giveth.io landing page</figcaption>
		</figure>

		<ul>
			<li>
				<a href="https://www.gitcoin.co/" target="_blank">Gitcoin.co</a>
			</li>
		</ul>

		<p>
			Another slightly different approach is the one of <a
				href="https://www.gitcoin.co/"
				target="_blank">Gitcoin.co.</a
			> They come in the form of Grants so to say. You create a project and description where you include
			links etc and people can fund you with money which then gets replicated via a fund through a quadratic
			funding formula.
		</p>

		<p>
			Essentially the more people fund you with amounts, no matter the size, the more funds you
			receive from a pool of grants for open source projects on the platform. These grants have
			different rounds during the year. <a href="https://grants.gitcoin.co/" target="_blank"
				>Gitcoin Grants</a
			>
			is currently being rebuilt.
		</p>

		<figure>
			<img
				src="/images/posts-images/open-source-sources-of-income-easy-tools-and-aids/gitcoin-grants-page.png"
				alt="faq"
			/>
			<figcaption>Screenshot GitCoin Grants page</figcaption>
		</figure>

		<p>There are quite a few more so check out my compilation of resources.</p>

		<h3>Bounties for Bugs and Features</h3>
		<ul>
			<li>
				<span title="This project’s website is currently under construction.">Blocklancer.net</span>
			</li>
		</ul>

		<p>
			Is a platform where freelancers essentially offer specific services or “gigs” as they are
			referred to which are paid for using Ethereum. The Bounties are specific jobs that those
			freelancers do custom to the customer who hires their services. More than a Bounties platform
			it looks like a Freelancer hiring platform.
		</p>

		<figure>
			<img
				src="/images/posts-images/open-source-sources-of-income-easy-tools-and-aids/blocklancer-landing-page.png"
				alt="faq"
			/>
			<figcaption>Screenshot Blocklancer.net Landing Page</figcaption>
		</figure>

		<ul>
			<li>
				<a href="https://issuehunt.io/" target="_blank">Issuehunt.io</a>
			</li>
		</ul>

		<p>
			Was an easy and approachable platform. You signed up with your GitHub account, added your
			repositories and could install an app on your repository. This then allows you to be paid for
			issues which were requested to be solved. Unfortunately this platform seems to be inactive
			though one can log in and check it out as to how it functions. Their <a
				href="https://www.youtube.com/channel/UCZXIlLDDWul-DoRD7wuvA-g"
				target="_blank">video tutorials</a
			> also give you an idea, but they seem outdated.
		</p>

		<figure>
			<img
				src="/images/posts-images/open-source-sources-of-income-easy-tools-and-aids/issuehunt-landing-page.png"
				alt="faq"
			/>
			<figcaption>Screenshot IssueHunt Landing Page</figcaption>
		</figure>

		<ul>
			<li>
				<a href="https://www.gitcoin.co/" target="_blank">Gitcoin.co</a>
			</li>
		</ul>

		<p>
			Is an interesting platform with different options in addition to their Bounties, such as
			Grants, Kudos, Quests, Hackathons, etc. The Bounties can be set up by anyone who can create an
			issue in a repository, though that person is the one funding it. It can be thus used for users
			for example who want a specific feature, or bug resolved which they then fund if the issue
			gets done. If one were to make use of this site one can indicate this on the Readme and then
			advertise it from there.
		</p>

		<figure>
			<img
				src="/images/posts-images/open-source-sources-of-income-easy-tools-and-aids/gitcoin-bounties-page.jpg"
				alt="faq"
			/>
			<figcaption>Screenshot GitCoin Bounties Page</figcaption>
		</figure>

		<h3>Tokenization (DevProtocol, SourceCred, CommonStack)</h3>
		<ul>
			<li>
				<a href="https://sourcecred.io/" target="_blank">Sourcecred.io</a>
			</li>
		</ul>

		<p>Their project description is the following:</p>

		<p>
			“SourceCred (in the most basic sense) is a technology that makes the labor of individuals more
			visible and rewardable as they work together in a project or community. The goal of SourceCred
			is to use this technology to make rewarding labor as nuanced as human contribution often is.
			We hope to be one piece in the puzzle of a healthier future where systems serve community
			members, where financial maximization isn’t the end-all be-all goal, and where wealth actually
			flows to those who are creating the value in our world.”
		</p>

		<p>
			They essentially have developed a software which you run as an instance on your repository and
			which then assigns Credits or “Cred” as they call them, based on an algorithm that analyzes
			contributions interlinkages of generated “value”.
		</p>

		<p>
			This “Cred” is then rewarded through their own project specific Crypto Currency “Grain” to
			which funds can be assigned.
		</p>

		<p>Then later external parties can purchase Grain and fund issues of their interest, etc.</p>

		<p>In a way it is like creating your own project economy with its own currency.</p>

		<figure>
			<img
				src="/images/posts-images/open-source-sources-of-income-easy-tools-and-aids/sourcecred-landing-page.png"
				alt="faq"
			/>
			<figcaption>Screenshot SourceCred Landing Page</figcaption>
		</figure>

		<ul>
			<li>
				<a href="https://www.devprotocol.xyz/" target="_blank">DevProtocol</a>
			</li>
		</ul>

		<p>The project’s leading introduction line is:</p>

		<p>
			“Decentralized funding where creators and backers work together to drive project growth and
			are equally rewarded.”
		</p>

		<p>Their vision statement is:</p>

		<p>
			“Empowering all creators for sustainable challenges. Decentralized funding, Social tokens,
			DAOs and everything you need for a sustainable creator economy is here.”
		</p>

		<p>
			They attempt to provide the necessary infrastructure tools for a fair creator, backer
			ecosystem. The way I interpret it, it does not exclude closed source projects. Their focus is
			to speed up creating a system where creators and backers work together and get both rewarded.
		</p>

		<figure>
			<img
				src="/images/posts-images/open-source-sources-of-income-easy-tools-and-aids/devprotocol-landing-page.png"
				alt="faq"
			/>
			<figcaption>Screenshot DevProtocol Landing Page</figcaption>
		</figure>

		<ul>
			<li>
				<a href="https://www.commonsstack.org/" target="_blank">CommonsStack</a>
			</li>
		</ul>

		<p>The Commons Stack stands for an organization whose vision states:</p>

		<p>
			“We want to create a world where public goods are valued fairly for the benefits they deliver.
			Our current economic system frequently exploits the environment, and undervalues open-source
			software, open research, and other altruistic efforts addressing the collective needs of our
			society. We aim to change this.”
		</p>

		<p>Their intent being also mentioned as:</p>

		<p>
			“To advance the design of commons-based economies, we need an open-source ecosystem of token
			engineering tools and a robust token engineering methodology.”
		</p>

		<p>
			Their Commons that they are working on is a library of Open Source components whose aim is to
			help project owners incentivize work towards common goals, providing accountability, help with
			governance and communication through feedback on what they call one’s Commons.
		</p>

		<p>
			Commons standing for your Open Source project and the common good for the community that it
			represents. The idea from what I have understood is that of creating <a
				href="https://www.investopedia.com/tech/what-dao/"
				target="_blank">DAO</a
			> (Decentralized Autonomous Organization) for each Open Source project.
		</p>

		<figure>
			<img
				src="/images/posts-images/open-source-sources-of-income-easy-tools-and-aids/commonsstack-landing-page.png"
				alt="faq"
			/>
			<figcaption>Screenshot CommonsStack Landing Page</figcaption>
		</figure>

		<h3>Crowdfunding</h3>
		<p>
			Under this category you find the usual suspects and some specific to Open Source projects in
			addition some additional which you can find in my list.
		</p>

		<ul>
			<li>
				<a href="https://www.kickstarter.com/" target="_blank">Kickstarter.com</a>
			</li>
			<li>
				<a href="https://www.indiegogo.com/" target="_blank">Indiegogo.com</a>
			</li>
			<li>
				<a href="https://crowdfunding.lfx.linuxfoundation.org/" target="_blank"
					>Linux Foundation Crowdfunding</a
				>
			</li>
			<li>
				<a
					href="https://github.com/Nautilus-Cyberneering/opensource/blob/main/docs/files/OSS%20Funding%20Options.xlsx%20-%20Filtered%20List%20of%20Options.pdf"
					target="_blank">Here is the link to the complete list.</a
				>
			</li>
		</ul>

		<h2>Conclusion</h2>
		<p>
			As you can see there are many options to simplify generating income. It is a matter of what
			you need. I would take some time to check them out and study them since depending on your
			situation they may be appropriate or not. Still you never know what that extra knowledge can
			bring you in the future.
		</p>

		<p>
			Nevertheless, these are just a part of making your Open Source project sustainable through
			contributors, users, etc. which still remains the most difficult and keystone for becoming
			sustainable and able to grow long term.
		</p>

		<p>
			In the next weeks I will test some of these or our projects and then write about for anyone
			who can use this information. The company group for which I work expects all its members to
			write about their experience while working on our projects. Anything useful that we learn we
			are to share it either through blog posts or repository documentation. I think it is great and
			a way of supporting the development of the Open Source ecosystem by adding value to the
			community.
		</p>

		<p>
			If you are interested in the Open Source Guide repository we are creating <a
				href="https://nautilus-cyberneering.github.io/opensource/"
				target="_blank">here</a
			>
			is the link and if you are interested in what projects we are currently working on,
			<a href="https://nautilus-cyberneering.dev/" target="_blank">here</a>.
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
			color: var(--color--text);
			margin-top: 0.5rem;
			text-align: center;
		}
	}
</style>
