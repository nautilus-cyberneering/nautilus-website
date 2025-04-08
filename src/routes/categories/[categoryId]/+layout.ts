export const load = async ({ fetch, params }) => {
	const response = await fetch(`/api`);
	const { categoryId } = params;
	const posts = await response.json();

	return {
		posts,
		categoryId
	};
};
