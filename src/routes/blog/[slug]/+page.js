export async function load({ params }) {
	const post = await import(`/src/routes/posts/${params.slug}.md`);
	const { title, date } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		date
	};
}
