import type { PageLoad } from './$types';
import type { BlogPost } from '$lib/utils/types';

export const load: PageLoad = async ({ params, fetch }) => {
	const res = await fetch('/api');
	const allPosts = await res.json();

	const slug = params.slug;
	const filteredPosts = allPosts.filter((post: BlogPost) => post.contributorSlug === slug);

	return {
		slug,
		posts: filteredPosts
	};
};
