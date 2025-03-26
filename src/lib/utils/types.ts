export type BlogPost = {
	tags: string[];
	keywords: string[];
	hidden: boolean;
	slug: string;
	title: string;
	date: string;
	updated: string;
	excerpt: string;
	html: string | undefined;
	readingTime: string;
	relatedPosts: BlogPost[];
	coverImage: string | undefined;
	contributorSlug: string;
	contributor: string;
	path: string;
};

export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

export type BlogMetadata = {
	title: string;
	date: string;
	coverImage: string;
	excerpt: string;
	slug: string;
	contributor: string;
	contributorSlug: string;
	tags: string[];
	categories: string[];
};
