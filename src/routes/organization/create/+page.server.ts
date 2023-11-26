import { Chain } from '$lib/zeus';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const body = await request.formData();
        const data = Object.fromEntries(body.entries());

        const chain = Chain('http://localhost:4248/query');

        const { createOrganization } = await chain('mutation')({
            createOrganization: [
                {
                    input: {
                        name: (data.name as string),
                        contact: (data.email as string),
                        description: (data.description as string),
                    },
                },
                {
                    id: true,
                },
            ],
        });

        throw redirect(303, `/${createOrganization.id}`);
    }
};
