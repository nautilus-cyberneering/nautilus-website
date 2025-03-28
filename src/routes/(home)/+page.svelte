<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import WhatWeDo from '$lib/components/organisms/WhatWeDo.svelte';
	import TechAndProjects from '$lib/components/organisms/TechAndProjects.svelte';
	import ExplorationAndEduction from '$lib/components/organisms/ExplorationAndEduction.svelte';
	import WelcomeSection from '$lib/components/organisms/WelcomeSection.svelte';
	import LatestArticles from '$lib/components/organisms/LatestArticles.svelte';

	import type { BlogPost } from '$lib/utils/types';

	export let data: {
		allPosts: BlogPost[];
		error: string | null;
	};
	let latestPosts = data.allPosts.slice(0, 3);
</script>

<Hero />
<WhatWeDo />
<TechAndProjects />
<ExplorationAndEduction />
<LatestArticles data={{ allPosts: latestPosts }} />
<WelcomeSection />
