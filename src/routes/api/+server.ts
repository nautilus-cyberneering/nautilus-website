import { getMetadata } from '$lib/data/metadata';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	try {
		const allPosts = getMetadata();

		const sortedPosts = allPosts.sort((a, b) => {
			const dateA = new Date(a.date);
			const dateB = new Date(b.date);

			if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
				console.error('Invalid date found:', a.date, b.date);
				return 0;
			}

			return dateB.getTime() - dateA.getTime();
		});

		if (!sortedPosts.length) {
			return { status: 404 };
		}

		return json(sortedPosts);
	} catch (err) {
		console.error('Error fetching metadata:', err);
		return { status: 500, body: { error: 'Internal server error' } };
	}
};
