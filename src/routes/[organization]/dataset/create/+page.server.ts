import { Chain } from '$lib/zeus';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ params, request }) => {
        const body = await request.formData();
        const data = Object.fromEntries(body.entries());

        const chain = Chain('http://localhost:4248/query');

        const { createDataset } = await chain('mutation')({
            createDataset: [{
                input: {
                    name: (data.name as string),
                    contact: (data.email as string),
                    description: (data.description as string),
                    organizationId: (params.organization as string),
                },
            }, {
                id: true,
            }],
        });

        throw redirect(303, `/${params.organization}/${createDataset.id}`);
    }
};
