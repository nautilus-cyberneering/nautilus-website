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
			Although you can easily build and run the <a
				href="https://github.com/boken-engine/iakkai-saga-the-curse-of-blood"
				target="_blank">Iakkai Saga demo project</a
			> on your macOS, we wanted to have a simpler way to execute it. We wanted to show what you can
			build using Boken Engine even before knowing how to do it.
		</p>

		<p>
			That’s why we decided to build a macOS version. If you have an iOS device the simplest way is
			to install the Iakkai iOS App from the Apple App Store: <a
				href="https://apps.apple.com/app/id1580924283#?platform=ipad"
				target="_blank">Iakkai</a
			>.
		</p>

		<p>
			If you do not have an iOS device you can <a
				href="https://github.com/boken-engine/iakkai-saga-the-curse-of-blood/releases/download/1.0/iakkai-1.0.zip"
				target="_blank"
				download><button>download Iakkai</button></a
			>
			and install it as a simple macOS app. You only need to double click to uncompress the file and
			copy the app to you Application folder.
		</p>

		<p>
			We tried to publish it on the Mac App Store but it was rejected by Apple reviewers. The reason
			was:
		</p>

		<p>
			<strong>“Guideline 4.2 – Design – Minimum Functionality”</strong>
		</p>

		<p>They argued that the app was primarily a book.</p>

		<p>In order to build the application for macOS we faced mainly 2 issues:</p>

		<ul>
			<li>Generate a build for macOS.</li>
			<li>Generate a distributable app outside the Mac App Store.</li>
		</ul>

		<h2>Generating a macOS distributable</h2>
		<p>
			This task was surprisingly easy. We started reading Apple documentation about <a
				href="https://developer.apple.com/documentation/apple-silicon/running-your-ios-apps-in-macos"
				target="_blank">running iOS apps on macOS</a
			>. Since Boken Engine does not have any special dependency on phone features we only had to
			add some new xcode settings and build for macOS.
		</p>

		<img
			src="/images/posts-images/iakkai-saga-for-macos/deployment-info-macos.png"
			alt="deployment"
		/>

		<p>
			Apple has developed a project called the <a
				href="https://developer.apple.com/design/human-interface-guidelines/mac-catalyst"
				target="_blank">Mac Catalyst</a
			>. As they promise “you can make a Mac version of your iPad app”. Basically they use the same
			libraries under the hood whether you build for iOS or macOS.
		</p>

		<img
			src="/images/posts-images/iakkai-saga-for-macos/mac-catalyst-stack.png"
			alt="mac catalyst"
		/>

		<p>
			Once we changed the settings, we tried to build for macOS. We had a build error in one of the
			methods we used to detect the device’s orientation. We solved it with build conditions, making
			ladscape the only orientation available for macOS.
		</p>

		<pre>
			<code>
{`func getDeviceOrientation() -> DeviceOrientation {
	#if targetEnvironment(macCatalyst)
		return DeviceOrientation.horizontal
	#else
	if UIApplication.shared.statusBarOrientation.isLandscape {
		return DeviceOrientation.horizontal
	} else {
		return DeviceOrientation.vertical
	}
	#endif
}`}
			</code>
		</pre>

		<p>
			After fixing that build error we could run the app for macOS. So we tried to publish it on the
			Mac App Store. We followed the stardard process to publish directly using xcode but we got
			this error in the final step while we were uploading the app to the store:
		</p>

		<img
			src="/images/posts-images/iakkai-saga-for-macos/error-universal-binary-needed.png"
			alt="error"
		/>

		<p>The problem here, was that we were building Boken Engine only for arm64 architecture.</p>

		<img
			src="/images/posts-images/iakkai-saga-for-macos/error-boken-engine-only-for-arm64.png"
			alt="error"
		/>

		<p>
			We had to change xcode settings in order to build Boken Engine for both architectures. After
			doing that we were able to submit the macOS app for review. Unfortunately the application was
			rejected as we mentioned before.
		</p>

		<h2>Generate a distributable app outside the Mac App Store</h2>
		<p>
			Since we could not publish the app using the Mac App Store we decided to distribute it
			directly. After researching for different ways to do it, we decided to go for the simplest
			one. You can also use xcode and archive a build for macOS. You have to the do the same process
			you normally do when you upload the application build to the Store. But you have to choose the
			second option:
		</p>
		<img
			src="/images/posts-images/iakkai-saga-for-macos/distribute-app-with-developer-id.png"
			alt="distribute app"
		/>

		<p>
			xcode will magically handle all the process related to signing with your certificates. At the
			end of the process you have to submit the app to be <a
				href="https://developer.apple.com/documentation/security/notarizing-macos-software-before-distribution"
				target="_blank">notarized</a
			>. As Apple says:
		</p>

		<p>
			<strong>
				Notarization gives users more confidence that the Developer ID-signed software you
				distribute has been checked by Apple for malicious components.
			</strong>
		</p>

		<p>
			After some minutes (less than 10) you will receive an email and you can continue the process.
			Once done you can then export the application distributable and run it on any macOS. The
			distributable is an <a href="https://en.wikipedia.org/wiki/Bundle_(macOS)" target="_blank"
				>macOS bundle</a
			> (folder).
		</p>

		<p>
			We wanted to generate a single file; however, keeping a simple installation package. Finally
			we decided to generate a zip file using the command ditto:
		</p>

		<pre>
			<code>
{`% ditto -c -k --keepParent DDD ZZZ}`}
			</code>
		</pre>

		<p>
			Where DDD is the path to the directory containing the app you have exported in the previous
			step and and ZZZ is the path where ditto creates the zip archive. That’s the app you can
			download above at the beginning of this post.
		</p>

		<p>
			I hope this post will help you to build and distribute your Boken Engine based macOS apps and
			generate a distributable app outside the Mac App Store.
		</p>

		<h2>Conclusion</h2>
		<p>
			As you can see you can build your apps using Boken Engine and easily publish them for macOS.
			If you are planning to build for macOS we recommend you to integrate that version in your
			pipeline, so you do not get any surprises when you try to build the macOS version.
		</p>

		<h2>Links</h2>
		<p>Links about generating a macOS app from an iOS project:</p>
		<ul>
			<li>
				<a
					href="https://developer.apple.com/documentation/apple-silicon/running-your-ios-apps-in-macos"
					target="_blank">Running you iOS app on macOS</a
				>
			</li>
			<li>
				<a
					href="https://developer.apple.com/documentation/uikit/creating-a-mac-version-of-your-ipad-app"
					target="_blank">Creating a Mac Version of Your iPad App</a
				>
			</li>
		</ul>

		<p>Links about distributing outside the Mac App Store:</p>

		<ul>
			<li>
				<a href="https://developer.apple.com/developer-id" target="_blank"
					>Distributing apps outside the Mac App Store</a
				>
			</li>
			<li>
				<a
					href="https://developer.apple.com/documentation/security/notarizing-macos-software-before-distribution"
					target="_blank">Notarizing macOS software before distribution</a
				>
			</li>
			<li>
				<a href="https://www.appcoda.com/distribute-macos-apps" target="_blank"
					>Beyond the Sandbox: Signing and distributing macOS apps outside of the Mac App Store</a
				>
			</li>
			<li>
				<a
					href="https://developer.apple.com/library/archive/documentation/Porting/Conceptual/PortingUnix/distributing/distibuting.html"
					target="_blank">Create dmg distribution file</a
				>
			</li>
			<li>
				<a href="https://developer.apple.com/forums/thread/128166" target="_blank"
					>3 options for distributing macOS apps</a
				>
			</li>
			<li>
				<a href="https://developer.apple.com/forums/thread/128166" target="_blank"
					>Signing a Mac Product For Distribution</a
				>
			</li>
		</ul>
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

	img {
		margin-top: 2rem;
	}

	code {
		color: var(--color--text);
	}
</style>
