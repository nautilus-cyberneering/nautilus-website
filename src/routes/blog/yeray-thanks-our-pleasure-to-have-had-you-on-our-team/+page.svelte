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
			Yeray recently left our team after contributing his unique set of professional skills and
			abilities towards our projects. He has been kind, reliable, attentive, self-motivated, and
			methodical in his approach. We have had the fortune to review his retrospective report that
			covers the last seventeen months of his contributions, giving Nautilus Cyberneering the rare
			and valuable opportunity to consider <a
				href="https://nautilus-cyberneering.de/2022/06/30/a-personal-retrospective-feedback-and-thoughts/"
				>this honest feedback</a
			>.
		</p>

		<p>
			We would like to take some time and say, <strong>“Thank You”</strong>, and to reply to some of
			the points brought up within his retrospective report.
		</p>

		<h2>Background</h2>

		<p>
			To support José and Constantin with the work on a new platform, iOS, they recommended that we
			contract Yeray to support them as he had the relevant experience with Apple.
		</p>

		<p>
			This new project was to make a demonstration of the previously practiced design process and
			project management, with the goal of producing a demo game for the iOS platform. The project
			included:
		</p>

		<ul>
			<li>Conceptual research</li>
			<li>Market research</li>
			<li>Concept building</li>
			<li>Project planning</li>
			<li>Implementation</li>
			<li>Support</li>
		</ul>

		<p>
			Successfully, this led to the open-source proof of concept: <strong
				>“Iakkai – The Curse of Blood”</strong
			>
			being published onto <a href="https://apps.apple.com/app/id1580924283">Apple App-Store</a>,
			running our open-source game engine:
			<a href="https://github.com/boken-engine/boken-engine">“Boken Engine”</a>.
		</p>

		<!-- IMAGES -->

		<p>
			Thereafter, we continued work on a better way to store the content for a game. That led the
			team to the use of DVC with the use of continuous integration, or CI, (cloud-programs for git
			repositories).
		</p>

		<p>
			As we started to make more advanced used CI, certain limitations stated to become apparent.
			One of the limitations was the lack of `audit trail` of the CI jobs, and the difficulty to
			coordinate between many different tasks that would all effect the same repository; from this a
			side-project was born: ‘Git Queue’, a GitHub action that implements a Queue using git-commits.
		</p>

		<p>
			The first version has recently been released <a
				href="https://github.com/Nautilus-Cyberneering/git-queue">here</a
			>.
		</p>

		<!-- IMAGE -->

		<p>
			Yeray stayed with the company even after the focus had shifted away from iOS and the game
			development.
		</p>

		<h2>Yeray’s Retrospective Report</h2>

		<p>
			Before finishing his time with Nautilus, Yeray wrote a <a
				href="https://nautilus-cyberneering.de/2022/06/30/a-personal-retrospective-feedback-and-thoughts/"
				>retrospective report</a
			>. This document gave Nautilus the valuable and rare opportunity to respond to honest
			feedback.
		</p>

		<p>
			Overall, we are heartened and glad to read that, and most importantly, Yeray felt <strong
				>“respected and valued”</strong
			> as a team member throughout the time with us. Likewise, Nautilus naturally feels the same respect
			and value from Yeray.
		</p>

		<h2>Special Response from Cameron</h2>
		<h3>(Managing Director of Nautilus Cyberneering)</h3>

		<p>
			I would like to take the time to respond to the “What needs to be Improved” section of Yeray’s
			Retrospective:
		</p>

		<h2>Pre-Cooked Decisions</h2>
		<p>
			After taking some time to pause and reflect, I must agree there have been many decisions where
			I have behaved in an arrogant, top-down, and unilaterally bossy way. As the leader, it is my
			responsibility to maintain the culture of sincere whole-group-involvement in our
			decision-making process. Instead of having the overarching “my team” attitude, instead should
			correct to the “our team” perspective. My role as the team-leader should be to facilitate the
			processes of building natural mutually valued team-consensus.
		</p>

		<p>
			There have been many times where I have pre-biased decisions and would artificially go through
			the ‘motions’ of gaining consensus, instead of genuinely letting the team choose for
			themselves.
		</p>

		<p>
			When the consensus building is artificially “pre-baked”, this devalues the confidence of the
			participating team-members, they feel like their real opinion is “worthless” or “unneeded”, or
			that they are just a rubber stamp to legitimise a pre-made decision.
		</p>

		<p>
			This has the sad effect of leaving the team-members dejected, and without a voice. Further,
			this hampers self-growth and personal development. Ultimately this causes all of us to miss
			out on the beauty and advantage of having a strong, healthy, and independently minded team.
		</p>

		<p>
			I wish to make a renewed effort to be humble and abstract myself in a way so that I do not
			make pre-biasing decisions. Instead I should refocus on allowing the team to naturally find
			its own path, and hopefully being a source of wisdom and good advice along the way. I ask that
			the team continues to be patient with me and continue to give me clear, honest, and regular
			feedback.
		</p>

		<h2>Tedious Meetings</h2>
		<p>
			At Nautilus Cyberneering we have weekly video-conference meetings. These meetings often
			go-long and Yeray’s comment about losing focus after 90 minutes is very apt. Personally, I
			very much enjoy the meetings as I find the technical content very interesting. I also enjoy
			the social and ‘downtime’ mixed into the meetings.
		</p>

		<p>
			Overall, I generally prefer to have less-structured meetings, however Yeray’s difficulty to
			focus for long periods is a great opportunity to reflect and see how we could do better.
		</p>

		<p>
			Additionally, this is one of the unfortunate areas where I made a unilateral top-down
			decision; we have had no group-review or mutual consensus formation upon the format, and
			style, of the meetings.
		</p>

		<h2>Meeting Format</h2>
		<p>When I designed the meetings, I had some competing goals that I tried to balance:</p>

		<ul>
			<li>Keep the meetings somewhat unstructured, and a little spontaneous.</li>
			<li>Allow for technical and in-depth discussions.</li>
			<li>Value the team-members time and focus by having fewer and shorter meetings.</li>
		</ul>

		<p>
			Naturally, compressing all that we could talk about into one meeting is going to cause the
			stress that the meeting should become too long. Additionally, there may be topics that are too
			advanced to otherwise generally not interesting for all the team members and they still feel
			that they need to stay connected and focused throughout.
		</p>

		<p>
			I suggest that we raise the topic of our meeting as a topic in one of our next meetings. This
			is something that we should come to some good consensus on. Meetings are always an area where
			we could improve.
		</p>

		<p>
			Additionally, here is one possible suggestion on how we could improve our weekly meeting
			format:
		</p>

		<p>Have the following meeting structure:</p>
		<ol>
			<li>Core Meeting</li>
			<ul>
				<li>Everyone speaks:</li>
				<ul>
					<li>Social welcome and greeting.</li>
				</ul>
				<li>Short-medium overview:</li>
				<ul>
					<li>What was done over the week.</li>
					<li>How they felt about it.</li>
					<li>Important points and discussion.</li>
					<li>Any changing of priorities.</li>
					<li>What each of us will focus on over the next week.</li>
					<li>Topics for the Extended Technical Discussion.</li>
				</ul>
			</ul>
			<li>Have a break.</li>
			<li>Extended Technical Discussion</li>
			<ul>
				<li>Dive into topics that are interesting and need a longer time to communicate.</li>
			</ul>
		</ol>

		<p>
			Those who have a busy day or feel like they do not need to partake in the extended technical
			discussion, can leave after the core meeting.
		</p>

		<h2>Lack of Consistent Roadmap and Vision</h2>
		<p>
			The lack of consistent roadmap and vision primarily is a clear failing, showing us the
			problems caused by the top-down decision-making process. With genuine team-based consensus
			building, the vision and goals for our company will form naturally from the genuine
			group-self-expression of the individuals who form the team. – To gain harmony between the
			members, they would need to share their vision and strategize as a group.
		</p>

		<p>
			When the focus was changed in a volatile and unpredictable way it creates disappointment as
			the work that the team puts in can be abandoned or unneeded, creating a feeling of wasting
			time and “why should I put my best effort in?”.
		</p>

		<p>
			One area where I failed was when I chose our focus on AI topics. This was a unilateral choice
			of mine. While I may have grand dreams and vision for what could be done, it doesn’t matter,
			as I need to adjust my grand goals to the reality of the position that the team is in now. –
			This means that my grand dreams should remain just dreams. Only can the team get the best-out
			of themselves if they form their own vision, and work together in an independently strategic
			way.
		</p>

		<p>
			It is primarily my responsibility as a team leader to foster and encourage. I also have the
			responsibility to summarise the consensus and give the team an honest reflection of our
			reality. Our long-term vision, what we want to focus on, what we find interesting and
			beneficial to work upon, should be decided in an unbiased, open, transparent, and mutual
			consensus building process. – In this way we will find the best within ourselves, taking
			advantage of our natural abilities and market position.
		</p>

		<h2>Summary</h2>
		<p>
			Growing and forming an Open-Source team requires a very high level of ethics, and deep respect
			for the principle of having a flat, non-authoritarian power structure. In addition to having
			the discipline of spirit to not prejudge and pre-decide outcomes involving other team-members.
			– This is an area where I need to personally work upon, and Yeray has given me a great
			prompting for self-reflection that I’m very glad for.
		</p>

		<p>
			It has been a pleasure to have you on our team, your feedback is both wonderfully constructive
			and helpful, and we all have enjoyed your simple and matter-of-fact approach in our meetings,
			and your contributions, (artistic, documentative, and programmatic), are very well
			appreciated.
		</p>

		<p>And you are always welcome to continue contributing!</p>

		<p>Our projects are and will be Open Source. 😉</p>

		<p>Kind Farewells,</p>

		<p>Cameron Garnham and Nautilus Cyberneering.</p>
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
