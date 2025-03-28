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
			I did not have a clue about what is meant by <a href="https://gnupg.org/">GPG</a> when I heard
			it. As it turned out to be it has to do with security.
		</p>

		<figure>
			<img
				src="/images/posts-images/what-is-gpg-why-and-how-to-use-it/impersonation-attack.png"
				style="background-color: white;"
				alt="impersonation attack"
			/>
			<figcaption>Impersonation Attack</figcaption>
		</figure>

		<p>
			Our team strives to have good <a
				href="https://github.com/Nautilus-Cyberneering/nautilus-librarian/issues?q=label%3Asecurity"
				>security</a
			> practices. I am no developer but I am contributing to our open-source project where any contribution
			needs to be signed and verified in GitHub and I had to get my head over how GPG works to understand
			it.
		</p>

		<p>
			The decision to implement GPG is to prevent impersonation attacks, and be able to make sure
			that we only received signed and validated contributions to our repositories by our actual
			contributors.
		</p>

		<p>
			Here I try to give you a high-level explanation of what it is, why it is useful and the first
			steps to generate your pair and start using it.
		</p>

		<h2>GPG in Brief</h2>
		<p>GPG serves to make your online digital life more secure.</p>

		<p>
			<a href="https://www.gnupg.org/download/git.html">GnuPG</a> is also known as GPG is an open-source
			implementation of the PGP (Pretty Good Privacy) standard. It is essentially an asymmetric key standard
			that works with an interconnected set of keys.
		</p>

		<img src="/images/posts-images/what-is-gpg-why-and-how-to-use-it/Gnupg_logo.png" alt="gnupg" />

		<p>
			One private, and secret and the other public, public meaning that it can be shared without any
			danger of misuse. Fact is, one usually uploads the public key to official online key servers,
			where everyone can check for someone’s public PGP or GPG keys. Here is an <a
				href="https://keys.openpgp.org/">example</a
			>, the <a href="https://keys.openpgp.org/">keys.openpgp.org</a> server.
		</p>

		<p>
			If you were to compare with the physical world, the key servers act as phone directories where
			people upload their keys linked to specific email addresses.
		</p>

		<h3>Symmetric vs Asymmetric Keys</h3>
		<p>
			A <strong>Symmetric Key</strong> is a Private Key. There is no “Public” part to the Symmetric Key.
			If you encrypt a ZIP archive, the “password” is the Private Symmetric Key.
		</p>

		<p>
			As Symmetric Keys allow for very fast and efficient they are used extensively within core
			parts of all cryptographic systems that use encryption. Here the key could be different or
			identical between two parties. This key is to be transmitted (or mutually derived by <a
				href="https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange">Diffie–Hellman</a
			>) so that data can be securely transferred.
		</p>

		<p>
			However, other than crypto developers, or when you have a shared password to a ZIP archive, no
			humans directly use Symmetric Keys, instead they use Asymmetric Keys.
		</p>

		<p>
			An <strong>Asymmetric Key</strong> is a special key that has both a private and public parts. The
			allow for people and systems to do many convenient operations that would be impossible with only
			Symmetric Keys.
		</p>

		<p>
			GPG uses Symmetric Keys internally, however in common case the uses are always directly
			interacting with their Asymmetric Keys.
		</p>

		<h3>Public and Private Keys</h3>
		<p>
			A <strong>Public Key</strong> allow for people share a special manipulation of their
			<strong>Private Key</strong> for others to interact with. The two most main interactions are:
		</p>

		<ul>
			<li>For <strong>Verifying a Signature</strong> matching a Public Key.</li>
			<ul>
				<li>
					This signature could only be <strong>generated</strong> by the Private Key that the Public
					Key was derived from.
				</li>
			</ul>
			<li>For <strong>Encrypting Data</strong> to a Public Key.</li>
			<ul>
				<li>
					This data can only be <strong>decrypted</strong> by the Private Key that the Public Key was
					derived from.
				</li>
			</ul>
		</ul>

		<h3>PGP and Key Purposes</h3>
		<p>
			PGP (and therefore GPG) defines roles, (or purposes), as additional meta-data that is encoded
			into the Public Keys that are generated.
		</p>

		<ul>
			<li>Authenticating (Not regularly used)</li>
			<li>
				Certifying (Internal use only, the main role of the <strong>Primary Key</strong> is to
				<strong>Certify</strong>
				the validity of its related <strong>Sub-Keys</strong> and <strong>User-ID’s</strong>)
			</li>
			<li>Signing</li>
			<li>Encrypting</li>
		</ul>

		<p>
			If you are wondering what the difference between Authentication and Signing like I was. The
			difference lies in its trust foundation.
		</p>

		<p>
			Authentication only serves to say: “Hello, this is Me”, where Signing is proving that the
			material is yours and validated as such by you through a <strong>digital signature</strong>.
		</p>

		<h2>Why use it?</h2>
		<img
			src="/images/posts-images/what-is-gpg-why-and-how-to-use-it/Pro-Con.png"
			style="background-color: white;"
			alt="pro con"
		/>

		<h3>Advantages</h3>
		<p>
			For authentication, certification and signing the receiving end can verify that the content is
			from you, having your public key. On the other hand, if the other party wants to send you
			something only for you, they will use your public encryption key in combination with their own
			private key to sign and certify the content. Such content can only be decrypted using your own
			private key, and by having their public key you will know that it is from them.
		</p>

		<p>
			<strong>First advantage:</strong> If someone sends to you something encrypted, meant only for you,
			you will be the only one capable of decrypting it.
		</p>

		<p>“All right but why now, so many keys?”</p>
		<p>
			Essentially there is one primary key, which is typically used only for signing and
			certification, and a sub-key signed by the primary key for encryption. However, you can have
			one for each of the usages if you wanted.
		</p>

		<p>
			<strong>Second advantage:</strong> Each sub-key when used is transmitted at the same time, but
			if compromised it can be revoked individually and a new key generated while keeping your primary
			key valid. It makes it easier to manage your keys and split them for the different purposes you
			want to use them.
		</p>

		<h3>Disadvantage</h3>
		<p>
			If your primary key is compromised or you lose it, your security has been breached and someone
			can impersonate you or you lose access to your digital “id” stemming from this key…. you may
			have to start building your digital reputation from scratch.
		</p>

		<p>
			Nevertheless, for this situation there exists the <strong>revocation certificate</strong> which
			is created from the start at the same time that you create your keys for the first time or at any
			given time for the individual keys you want to revoke. With this certificate you would have to
			go to the before mentioned GPG key servers and upload it, to publicly revoke the affected key or
			keys.
		</p>

		<h2>First Steps</h2>
		<h3>Generating your new GPG keys with default options</h3>
		<p>First of all, you need to create yourself a new pair of GPG keys.</p>

		<p>
			For this, you need to download the proper software to create and manage these. You have the
			command line option or the GUI implementations to use this standard.
		</p>

		<p>
			<a href="https://www.gnupg.org/index.html">Here</a> is a link to the GnuGPG website where you
			get access to all you need. I myself am using the <a href="https://gpg4win.org/">GPG4Win</a> it
			is easy to use. Their documentation is very detailed and helpful.
		</p>

		<p>
			Once you download and install it you get a set of programs. Each for a specific purpose,
			however in Kleopatra, you can easily generate in less than 5 minutes your pair of keys and
			register them if you want at one of the existing key servers.
		</p>

		<p>
			On the other hand, if you prefer the command-line interface here is a very good article for
			the first steps by Mark Schindel <a href="https://www.markschindel.com/how-to-use-gpg/"
				>“How to Use GPG”</a
			>.
		</p>

		<p>
			Nevertheless, you can also have access to a series of screenshots going over this process. We
			created a <a href="https://github.com/nautilus-cyberneering/secure-git-guide">GPG Bootcamp</a>
			repository for our contributors. Here you will find a step by step guideline to create your first
			set of GPG Keys using two approaches in our
			<a
				href="https://github.com/nautilus-cyberneering/secure-git-guide/blob/main/docs/003-GPG-101-How-to-get-your-first-GPG-Keys.md"
				>GPG 101</a
			>.
		</p>

		<h3>Exporting or backing up your keys</h3>
		<p>Here are some screenshots using Kleopatra:</p>
		<figure>
			<img
				src="/images/posts-images/what-is-gpg-why-and-how-to-use-it/kleopatra-1.png"
				alt="kleopatra"
			/>
			<figcaption>Right click the key to export or backup.</figcaption>
		</figure>
		<figure>
			<img
				src="/images/posts-images/what-is-gpg-why-and-how-to-use-it/kleopatra-2.png"
				alt="kleopatra"
			/>
			<figcaption>Select the location where to save it to and click save.</figcaption>
		</figure>
		<p>
			If you want to check the contents of the “.asc” file just open it with any basic text editor
			file.
		</p>

		<p>
			And again a link to Mark Schindel’s <a href="https://www.markschindel.com/how-to-use-gpg/"
				>“How to Use GPG”</a
			> which also covers this step.
		</p>

		<h3>Revocation Certificate</h3>
		<p>
			During the process of your key creation you also generate a revocation certificate which you
			should download and or preferably print and back up with your keys disconnected from your
			online computer. To download your revocation certificate you can also follow these simple
			steps:
		</p>

		<p>
			If you want to know more about it here is a link to our step by step guide <a
				href="https://github.com/nautilus-cyberneering/secure-git-guide/blob/main/docs/003-GPG-101-How-to-get-your-first-GPG-Keys.md"
				>GPG 101</a
			> where there is a section for regenerating your revocation certificate of a specific key.
		</p>

		<h3>Encrypting Files</h3>
		<p>
			You can start using it right out of the box to encrypt files with your keys. The user
			interface is very intuitive.
		</p>

		<p>Here are some screenshots of Kleopatra:</p>

		<figure>
			<img
				src="/images/posts-images/what-is-gpg-why-and-how-to-use-it/kleopatra-3.jpg"
				alt="kleopatra"
			/>
			<figcaption>Select encryption</figcaption>
		</figure>
		<figure>
			<img
				src="/images/posts-images/what-is-gpg-why-and-how-to-use-it/kleopatra-4.jpg"
				alt="kleopatra"
			/>
			<figcaption>Select files to encrypt</figcaption>
		</figure>
		<figure>
			<img
				src="/images/posts-images/what-is-gpg-why-and-how-to-use-it/kleopatra-5.jpg"
				alt="kleopatra"
			/>
			<figcaption>Encryption Options</figcaption>
		</figure>
		<figure>
			<img
				src="/images/posts-images/what-is-gpg-why-and-how-to-use-it/kleopatra-6.jpg"
				alt="kleopatra"
			/>
			<figcaption>Encryption Process</figcaption>
		</figure>
		<figure>
			<img
				src="/images/posts-images/what-is-gpg-why-and-how-to-use-it/kleopatra-7.jpg"
				alt="kleopatra"
			/>
			<figcaption>Created GPG encrypted file</figcaption>
		</figure>
		<figure>
			<img
				src="/images/posts-images/what-is-gpg-why-and-how-to-use-it/kleopatra-8.jpg"
				alt="kleopatra"
			/>
		</figure>
		<figure>
			<img
				src="/images/posts-images/what-is-gpg-why-and-how-to-use-it/kleopatra-9.jpg"
				alt="kleopatra"
			/>
		</figure>

		<p>
			And again a link to Mark Schindel’s <a href="https://www.markschindel.com/how-to-use-gpg/"
				>“How to Use GPG”</a
			> which also covers this step.
		</p>

		<p>As you can see it is pretty much straightforward.</p>

		<p>
			Though there are some other considerations for you I will talk about in another post, some
			best practices to consider, as well as in another how to revoke your key.
		</p>

		<p>
			I hope that some of your initial questions about GPG have been covered and that you are now
			more informed than I was when I started using it.
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
