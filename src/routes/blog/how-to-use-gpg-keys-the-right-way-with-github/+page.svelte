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
			Assuring the authenticity of work submitted to GitHub has become increasingly important. One
			of the common policies that organizations have used to secure the commits made by developers
			has been to require the use of GPG signatures that are embedded into the Git commits.
		</p>

		<p>Both GitHub and Git have long natively supported cryptography signed comments:</p>

		<ul>
			<li>
				<a
					href="https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits"
					>GitHub Documentation – Signing commits</a
				>
			</li>
			<li>
				<a href="https://git-scm.com/book/en/v2/Git-Tools-Signing-Your-Work"
					>Git Documentation – Git Tools – Signing Your Work</a
				>
			</li>
		</ul>

		<p>
			When commits are signed by each of their respective authors it is much harder for an attacker
			to successfully pull-off an impersonation attack.
		</p>

		<h2>My Experience</h2>
		<p>
			When I was asked to follow Nautilus policy of having GPG signatures for commits, I followed
			the GitHub and Git guidelines blind without putting much thought into it. Later after some
			internal discussion from my colleagues, it became evident that there are some additional
			aspects to be considered when using GPG for Git, GitHub or any other use.
		</p>

		<p>In this post I will walk you through:</p>

		<ul>
			<li>How the default GPG keys are set up when you create the</li>
			<li>Why this practice can be improved</li>
			<li>Recommended Best practices</li>
			<li>How to do this</li>
			<li>How to use them with Git or GitHub</li>
			<li>Some other recommendations (expiration date, key rotation, etc.)</li>
		</ul>

		<h2>GPG Keys</h2>
		<p>
			Like all asymmetric cryptographic keys, GPG keys are made in two parts: “Private Key”, and the
			“Public Key” (that is derived from the Private Key).
		</p>

		<p>
			With GPG, the common practice is to generate a set of keys that are grouped together with an
			extensive set of meta-data into a so-called OpenPGP key.
		</p>

		<p>An OpenPGP key typically consists of:</p>

		<ul>
			<li>Keys</li>
			<ul>
				<li>Primary Key (Certify, and optionally other capabilities)</li>
				<li>Supplementary Keys (Any of: Authentication, Signing, Encrypting)</li>
			</ul>
			<li>User-ID [Name, Email, Comment, etc]</li>
			<ul>
				<li>Primary IDs</li>
				<li>Additional IDs</li>
			</ul>
			<li>
				Key Capabilities, signed metadata that is included in the public key, are listed in the
				brackets.
			</li>
			<li>All Keys can be set with expiry dates.</li>
			<li>Sub-Keys and User-ID can be independently revoked or retired</li>
			<ul>
				<li>If the primary key is Revoked, then entire OpenPGP Key is considered compromised.</li>
			</ul>
		</ul>
		<h3>GPG Defaults</h3>
		<!-- IMAGE -->
		<p>
			There are many arrangement and possible combinations of keys, sub-keys, user-id’s and so on.
			When you use GPG to generate your keys, by default it generates your keys following a standard
			template:
		</p>

		<ul>
			<li>Keys</li>
			<ul>
				<li>Primary Key (Certify and Signing)</li>
				<li>Supplementary Key (Encrypting)</li>
			</ul>
			<li>User-ID</li>
			<ul>
				<li>Primary ID (Name, Email, and Comment)</li>
			</ul>
		</ul>

		<p>
			You can notice that the primary key has been set with the dual-capabilities of Certifying (to
			make new supplementary keys) and Signing (such as signing a Git commit).
		</p>

		<p>
			This basis structure was chosen upon the thought that the keys used for Encryption need to be
			(or at least should be) rotated regularly, however Signing can remain constant over the
			lifetime of the OpenPGP Key.
		</p>

		<p>However, in many cases this is not what the user would want if given the choice.</p>

		<h3>Why is this not optimal?</h3>
		<p>
			The default set-up leaves still some space for improvement. This is because it does not take
			advantage of the possibility to create individual sub-keys for each capability.
		</p>

		<p>
			The idea is that you essentially disconnect all the rights of your choice from your primary
			key and just use your sub-keys to avoid using your primary key. The only times you then use
			your primary is to cancel (revoke) existing sub-keys or to generate new sub-keys.
		</p>

		<p>It is very advanced to separate the primary key from the supplementary keys.</p>

		<p>
			The advantage of this approach is that if any of these sub-keys gets compromised, you can
			revoke individually and generate a new key, all while keeping your primary key valid.
		</p>

		<p>
			If you do not do this, you probably will end up someday with your primary key compromised and
			will have to regenerate a new primary key, etc.
		</p>

		<h2>Recommended Best Practices</h2>
		<h3>How to Create Further Sub-Keys</h3>
		<!-- IMAGE -->
		<p>In order to create additional sub-keys, you need to use the GPG command-line interface.</p>

		<p>
			A colleague of mine, Jose Celano wrote a very clear step-by-step guide for internal use in one
			of our company’s repositories, <a
				href="https://github.com/nautilus-cyberneering/pygithub/blob/main/docs/how_to_create_a_subkey_for_signing.md"
				>here</a
			>.
		</p>

		<p>I base the following summary of steps in the command line interface on his work.</p>

		<ol>
			<li>Type: gpg --list-keys --fingerprint --with-keygrip --with-subkey-fingerprints</li>
			<li>
				In the list you get an overview of all the primary key and its existing sub-keys. You will
				copy the second line of your public key made up of 10 pairs of 4 numbers and or letters.
			</li>
			<li>
				Using the noted public key type: <pre>gpg --edit-key &lt;public key 40 digits without spaces&gt;</pre>
			</li>
			<li>
				You will get a display of their associated private key and a new prompt so type: addkey
			</li>
			<li>Select your applicable key, most likely option (4) RSA (sign only)</li>
			<li>
				It will ask you to specify the keysize duration, I recommend 4096 and “0” for does not
				expire.
			</li>
			<li>Confirm the creation.</li>
			<li>
				You get a new overview of the new secret keys, seeing the newly generated sub-key and the
				changed rights of the primary key.
			</li>
			<li>
				To see the equivalent public keys for export type: <pre>gpg --list-keys --fingerprint --with-keygrip --with-subkey-fingerprints &lt;public key 40 digits without spaces&gt;</pre>
			</li>
			<li>You should now see the new sub-key and the changed primary key rights.</li>
		</ol>

		<h3>Removing Primary Key Rights</h3>
		<p>
			The last step to finish this is to remove all capabilities except the “certify” capability
			from the primary key. For this, you will continue using the command line but using the
			“expert” mode.
		</p>

		<ol>
			<li>
				Type: <code>gpg --expert --edit-key &lt;public key 40 digits without spaces&gt;</code>
			</li>
			<li>You will get an overview of the primary key’s rights.</li>
			<li>Type: <code>change-usage</code></li>
			<li>
				Use the toggle option taking away the rights for which you already have created the new
				sub-key.
			</li>
			<li>Once you are done, you get a new overview of the primary key’s rights.</li>
			<li>Type <code>save</code> and you are all set working on the keys.</li>
			<li>
				Type: <code
					>gpg --list-keys --fingerprint --with-keygrip --with-subkey-fingerprints &lt;public key 40
					digits without spaces&gt;</code
				>
			</li>
			<li>
				You will see the new public key rights where you should only see the “c” option for certify
				at the “pub” key.
			</li>
		</ol>

		<h3>Configuring Git with Your New Key</h3>
		<p>In order to set up your new key for signing your commits you have to follow these steps:</p>

		<ol>
			<li>In the command prompt, type: <code>git config --global --edit</code></li>
			<li>
				This will open the Git config file in your default editor. In my case, it opens in Visual
				Studio Code.
			</li>
			<li>
				Once here, look for the following entry of the signing-key and update it with the last 16
				digits of your new signing sub-key.
			</li>
			<li>Save it.</li>
			<li>
				If you are using GitHub, you will need to export your new public key and import it into
				GitHub.
			</li>
			<li>
				Follow the necessary steps as shown in their <a
					href="https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits"
					>GitHub Documentation – Signing commits.</a
				>
			</li>
		</ol>

		<h3>Always use a Passphrase</h3>
		<p>
			When creating the set of keys you are asked for a passphrase. Set it and remember it or even
			better write it down somewhere. This is another safety measure but it is <strong
				>essential</strong
			>.
		</p>

		<h3>Backing up your Revocation Certificate</h3>
		<p>
			Make sure that you keep a backup of your revocation certificate or that you print it out and
			store it somewhere safe in case that you were to have to use it.
		</p>

		<h3>Rotating Your Encryption Keys</h3>
		<p>
			This being one of the most used capabilities. It is recommended that you rotate these keys to
			prevent anyone to have access to any of your encrypted information, creating for example new
			keys in events such as computer change, etc. It is important though to back these up in the
			event that you were to have files encrypted with these.
		</p>

		<h3>Setting an Expiration Date</h3>
		<p>
			Another good idea is to set an expiration date not too far in the future in case that you were
			to not be able to revoke your certificate due to having lost your revocation certificate.
		</p>

		<h2>Some After Thoughts</h2>
		<p>
			In a way using GPG is good for security, but if you work yourself through all these steps to
			do things properly, I am convinced that you may agree with me that it could be more user
			friendly.
		</p>

		<p>
			Things could be made easier especially with the default key setup which could already have all
			keys separate, and avoid the need to have to do all this.
		</p>

		<p>
			If this is too advance you can just go back to the basic as in my <a
				href="https://nautilus-cyberneering.de/2022/01/28/what-is-gpg-why-and-how-to-use-it/"
				>previous post</a
			>.
		</p>
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
