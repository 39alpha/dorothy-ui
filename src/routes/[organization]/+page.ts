/** @type {import("./$types").PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(
		`http://localhost:4248/v0/organization/${params.organization}/repository`
	);
	const repositories = await res.json();

	return { ...params, repositories };
}
