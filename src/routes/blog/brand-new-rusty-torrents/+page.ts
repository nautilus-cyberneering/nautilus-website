import { postsMetadata } from '$lib/data/postMetadata';

export function load({ url }) {
	const folderName = url.pathname.split('/').filter(Boolean).pop();

	if (!folderName) {
		throw new Error('Invalid blog post URL: Slug is missing');
	}

	const meta = postsMetadata[folderName];

	if (!meta) {
		throw new Error(`Metadata not found for slug: ${folderName}`);
	}

	return { meta, allMetadata: postsMetadata };
}
