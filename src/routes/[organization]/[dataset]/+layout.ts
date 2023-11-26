import { Chain } from '$lib/zeus';

/** @type {import("./$types").PageLoad} */
export async function load({ params }) {
    try {
        const chain = Chain('http://localhost:4248/query');

        const dataset = await chain('query')({
            dataset: [
                {
                    input: {
                        id: (params.dataset as string),
                        organizationId: (params.organization as string),
                    },
                },
                {
                    id: true,
                    name: true,
                    organization: {
                        id: true,
                        name: true,
                    },
                    manifest: {
                        versions: {
                            author: true,
                            date: true,
                            message: true,
                            hash: true,
                            pathType: true,
                            parents: true,
                        },
                    },
                },
            ]
        })

        return dataset;
    } catch (err) {
        return {};
    }
}
