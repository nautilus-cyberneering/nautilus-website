<script lang="ts">
	export let data;
	import Post from '$lib/components/molecules/Post.svelte';
	import Wrapper from '$lib/components/atoms/Wrapper.svelte';
</script>

<Wrapper>
	<!-- readd slug={data.meta.slug}, contributor={data.meta.contributor}, contributorSlug={data.meta.contributorSlug} and tags={data.meta.tags}
 -->
	<Post title={data.meta.title} coverImage={data.meta.coverImage} date={data.meta.date}>
		<p>
			What has Rusty to do with Brand New? If you’re a geek, chances are you’ve heard of torrents.
			If you haven’t, torrents are a file sharing technology. Torrents allow users to share large
			files quickly and easily in a decentralized manner.
		</p>
		<p>
			In this post I will explain more of its technology and also talk about a new Open Source
			project that we have started collaborating since June this year. Keep reading because it is
			not like sharing your files via OneDrive, Google Drive, etc. and may be you too can benefit
			from it.
		</p>
		<p>
			You will learn about the technology how it works without much technical “fuzz” and why you can
			benefit from it, in addition to how it differs from your standard file sharing solutions.
			Thereafter, I will talk about <a href="https://torrust.com/">Torrust</a>, the new open source
			project we have started working with.
		</p>
		<p>
			About <a href="https://torrust.com/">Torrust</a> you will learn four things:
		</p>
		<ol>
			<li>How it is different from other solutions</li>
			<li>The improvements that we are working on</li>
			<li>The team behind it</li>
			<li>Potential use case in the field of data science</li>
		</ol>
		<h2>How does torrent technology work?</h2>
		<p>
			Torrents are a decentralized approach to sharing files “anonymously” to a great extent. The
			anonymity though is relative. It is relative, since your IP is not obfuscated by Torrent
			trackers. If you really wanted to share anonymously you could do this using a VPN to hide your
			real IP.
		</p>
		<p>
			Nevertheless, unlike other traditional file sharing methods, torrents allow users to connect
			with each other directly without the need for a centralized server.
		</p>
		<p>This has several advantages:</p>
		<ul>
			<li>
				It’s much more difficult for governments or ISPs to block torrent traffic since there’s no
				central point that can be shut down.
			</li>
			<li>
				Torrents are also very efficient in terms of bandwidth usage. Since files are downloaded in
				small pieces from multiple sources, the load on any one server is greatly reduced.
			</li>
			<li>
				The more people share the same file the faster the download will be since there are more
				sources to download from.
			</li>
		</ul>
		<p>However, torrents also have some disadvantages:</p>
		<ul>
			<li>
				The main disadvantage of torrents is that they can be used for illegal purposes. Because
				torrents are decentralized and anonymous, they’re often used to share pirated movies, music,
				and software.
			</li>
			<li>
				Another disadvantage of torrents is that they might be sluggish if there are not many
				sources providing the same torrent file.
			</li>
		</ul>
		<h2>How standard file sharing differs from Torrents?</h2>
		<p>
			If you compare torrents to standard file sharing done with for example One Drive they are
			different in many ways:
		</p>
		<ul>
			<li>
				<strong>First</strong>, standard file sharing solutions are centralized, which means that
				there is a single point of control. If that point of control is shut down, the entire system
				goes down with it. Torrents are decentralized, which means that there is no single point of
				control. Even if one source is shut down, the torrent can still be downloaded from other
				sources.
			</li>
			<li>
				<strong>Second</strong>, standard file sharing solutions allow you to share files with only
				a limited number of people. For example, you might be able to share a file with up to 100
				people using One Drive. With torrents, there is no limit to the number of people who can
				download the same torrent.
			</li>
			<li>
				<strong>Third</strong>, standard file sharing solutions are usually very inefficient in
				terms of bandwidth usage. Among other things for example, if you’re sharing a 100 MB file
				with 100 people, that’s 10 GB of data that needs to be transferred. With torrents, which
				split the files into small pieces only the pieces of the file that are needed are
				downloaded, so the bandwidth usage is much lower and you always avoid downloading the same
				piece twice.
			</li>
			<li><strong>Fourth</strong>, the more people share the file the faster you download it.</li>
		</ul>
		<p>
			“An image is worth a thousand words” as the saying goes, so here is a little graph to show you
			how your download time can go down. I took some average upload and download speed world
			statistics and assumed only a 10th of the upload available bandwidth per seeder and calculated
			the time savings for a Is it not sweet?
		</p>
		<figure>
			<img src="/images/torrent-seeders-graph.png" alt="Torrent Seeders Graph" />
			<figcaption>Time reduction depending on torrent Seeders</figcaption>
		</figure>
		<figure>
			<img src="/images/underlying-graph-data.png" alt="" />
			<figcaption>Underlying data for graph</figcaption>
		</figure>

		<h2>How you can benefit?</h2>
		<p>I think from the above you can already see the benefits of this decentralized technology.</p>
		<ul>
			<li>You do not depend on a central server</li>
			<li>Speed</li>
			<li>Unlimited sharing</li>
			<li>Bandwidth optimization</li>
			<li>Anonymity</li>
		</ul>

		<h2>Torrents used by Institutions and Businesses</h2>
		<p>
			As you can imagine It is a fact that these advantages are readily being exploited for legal as
			well as for illegal purposes just as with any technology. Which is the reason why torrents are
			too quickly associated to illegal pirating. Still though, let me give you some names of
			companies that actively use them for legal purposes such as being more efficient and providing
			better services Amazon, Facebook (Meta), Linux, some governments, etc. It is being used for
			software updates, backups, etc.
		</p>
		<p>If you want to read a little bit more about these uses:</p>
		<ul>
			<li>
				<a href="https://spectrum.ieee.org/how-torrents-can-benefit-businesses-and-users"
					>https://spectrum.ieee.org/how-torrents-can-benefit-businesses-and-users</a
				>
			</li>
			<li>
				<a href="https://www.makeuseof.com/tag/8-legal-uses-for-bittorrent-youd-be-surprised/"
					>https://www.makeuseof.com/tag/8-legal-uses-for-bittorrent-youd-be-surprised/</a
				>
			</li>
			<li>
				<a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html"
					>https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObjectTorrent.html</a
				>
			</li>
		</ul>

		<h2>Torrents used privately</h2>
		<p>
			For personal use with friends, family clubs etc. you can also benefit from it by actively
			sharing for example images, and other files privately without having to go through another
			service.
		</p>

		<h2>One benefit of Torrents I have not previously spoken about</h2>
		<p>
			For one, torrents are open source. This means that anyone can develop software that uses the
			torrent protocol, and there are <strong>no licensing fees</strong> or restrictions on who can
			use it. This makes torrents a great choice for open source projects that need to distribute
			large files which brings us to <a href="https://torrust.com/">Torrust</a>.
		</p>

		<h2>Torrust – New Open Source Torrent Solution written in Rust</h2>
		<p>
			<a href="https://torrust.com/">Torrust</a> is a <a href="https://www.rust-lang.org/">Rust</a> implementation
			of the torrent protocol. It has the different elements usually found in Torrent Software solutions
			which are:
		</p>
		<ul>
			<li>
				<a href="https://github.com/torrust/torrust-index">Index</a>
			</li>
			<li>
				<a href="https://github.com/torrust/torrust-tracker">Tracker</a>
			</li>
		</ul>

		<h2>List of current features</h2>
		<ul>
			<li>Multiple UDP server and HTTP(S) server blocks for socket binding possible</li>
			<li>Full IPv4 and IPv6 support for both UDP and HTTP(S)</li>
			<li>Private & Whitelisted mode</li>
			<li>Built-in API</li>
			<li>Torrent whitelisting</li>
			<li>Peer authentication using time-bound keys</li>
			<li>
				<strong>newTrackon</strong> check supported for both HTTP, UDP, where IPv4 and IPv6 is properly
				handled
			</li>
			<li>SQLite3 Persistent loading and saving of the torrent hashes and completed count</li>
			<li>MySQL support added as engine option</li>
		</ul>

		<p>Also if you are curious about <strong>Rust</strong> here are some articles on it:</p>
		<ul>
			<li>
				<a href="https://thenewstack.io/safer-future-rust/"
					>How Rust Compares to Other Programming Languages</a
				>
			</li>
			<li>
				<a href="https://blog.logrocket.com/rust-vs-python-could-rust-replace-python/"
					>Rust vs. Python: Why Rust is gaining in popularity</a
				>
			</li>
			<li>
				<a href="https://thenewstack.io/rust-by-the-numbers-the-rust-programming-language-in-2021/"
					>Rust by the Numbers: The Rust Programming Language in 2021</a
				>
			</li>
		</ul>

		<h2>How it is currently different from other Torrent solutions</h2>
		<p>
			Improved speed, scalability and resource management have been to date the focus of this
			torrent implementation.
		</p>

		<h2>Speed, scalability and resource management</h2>
		<p>
			In terms of resource management and speed we already have proof that it does what it is meant
			to do. It is already being used in the backend of some hosting sites with millions of
			connections.
		</p>

		<h2>The improvements that we are working on</h2>
		<p>
			With the addition of our team we are now working on improving security, reliability, code
			quality and increased user friendliness and repository automation.
		</p>

		<h2>User friendliness or UX and UI</h2>
		<p>
			Most of the torrent clients and sites can only be described as ugly and awkward to use. We are
			currently working on creating a minimalist interface and an underlying use case logic that
			makes sense and is scalable.
		</p>

		<h2>Code quality & security & reliability</h2>
		<p>
			Currently the whole code base is being reworked and all the elements of the current software
			architecture are being analyzed for security holes. We are implementing testing throughout the
			whole project’s code base.
		</p>
		<p>
			For scalability and security we are defining the right approach for creating the right user /
			permission structure to avoid over engineering it.
		</p>
		<p>
			A current goal is to apply Test Driven Development (TDD) and automation to all the projects
			repositories and through this improve the overall testing coverage, reliability and security
			of the software.
		</p>

		<h2>The team behind it</h2>
		<p>
			The team behind <strong>Torrust</strong> at the moment consists of
			<a href="https://github.com/mickvandijke">Mick van Dijke</a>, several voluntary contributors
			and the <strong>Nautilus Cyberneering</strong> team which incorporates software security architects,
			senior developers and other freelance collaborators like UX / UI designers etc.
		</p>
		<p>
			The <strong>Nautilus Cyberneering</strong> team’s experience during the past year has been to
			build up the necessary skills to automate git code repositories to implement versioning of
			data sets used in Machine Learning and Data Science. More about the
			<strong>Nautilus Cyberneering</strong>
			team <a href="https://nautilus-cyberneering.de/team/">here</a>.
		</p>

		<h2>Torrents Potential use case in the field of data science</h2>
		<p>
			Data scientists often need to download large data sets for their work. These data sets can be
			difficult to find, and they’re often very large, which can make downloading them slow and
			painful.
		</p>
		<p>
			Given that they are slow and painful with instances where scientist require various attempts
			to download the wanted file they have required something called “chunking”. The chunking
			feature as it happens to be the case is already existent in Torrents.
		</p>
		<p>
			Therefore the challenge of size and versioning for any community using large data sets can
			optimized even further by using torrents.
		</p>
		<p>
			For example, for the large files chunking is already implemented in torrents and in data sets
			with thousands of small files torrents can also be a nice approach having a different
			versioning approach. With data sets for example often one version of is made up to a high
			percentage of the same files as another version which you and other scientist may already have
			downloaded. Imagine how much you could reduce the download time and reduce time and bandwidth
			use.
		</p>

		<h2>Conclusion</h2>
		<p>
			We think that torrents are a great way to share data, and we’re excited to see what we will
			build with our community for everyday torrent use but also for their application in machine
			learning and data science.
		</p>
		<p>Also if you are curious about <strong>Torrust</strong> or what else we have been up to:</p>

		<div class="images-container">
			<div>
				<img src="/images/nautilus-post-icon.jpg" alt="nautilus" />
				<ul>
					<li>
						<a href="https://nautilus-cyberneering.de/"> Pioneering OS Ecosystems </a>
					</li>
					<li>
						<a href="https://github.com/Nautilus-Cyberneering"> GitHub Organization </a>
					</li>
					<li>
						<a
							href="https://github.com/Nautilus-Cyberneering/.github/blob/main/default_repository_documentation/CONTRIBUTING.md"
						>
							Contributing to Nautilus
						</a>
					</li>
				</ul>
			</div>
			<div>
				<img src="/images/torrust-post-icon.jpg" alt="torrust" />
				<ul>
					<li>
						<a href="https://torrust.com/"> Torrust Website </a>
					</li>
					<li>
						<a href="https://github.com/torrust"> GitHub Organization </a>
					</li>
					<li>
						<a href="https://github.com/torrust/.github/blob/main/info/contributing.md">
							Contributing to Torrust
						</a>
					</li>
				</ul>
			</div>
		</div>
		<p>Stay tuned for more updates. Thanks for reading!</p>
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

	.images-container {
		display: flex;
		justify-content: space-between;
		margin-top: 1.5rem;

		@include bp.for-tablet-portrait-up {
			div {
				display: flex;
				margin-top: 3rem;
				align-items: center;
				gap: 1.5rem;
			}
		}
	}
</style>
