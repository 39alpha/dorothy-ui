import { redirect } from '@sveltejs/kit';
import axios from 'axios';

/** @type {import('./$types').LayoutServerLoad} */
export function load({ params }) {
	return { ...params };
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ params, request }) => {
		const body = await request.formData();
		const data = Object.fromEntries(body.entries());
		const {
			data: { path }
		} = await axios.put(
			`http://localhost:4248/v0/organization/${params.organization}/repository`,
			data
		);
		throw redirect(303, path);
	}
};
