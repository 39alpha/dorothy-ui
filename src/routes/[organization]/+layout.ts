import { Chain } from '$lib/zeus';

/** @type {import("./$types").PageLoad} */
export async function load({ params }) {
    try {
        const chain = Chain('http://localhost:4248/query');

        const organization = await chain('query')({
            organization: [
                {
                    input: {
                        id: (params.organization as string),
                    },
                },
                {
                    id: true,
                    name: true,
                    description: true,
                    datasets: {
                        id: true,
                        name: true,
                    },
                },
            ]
        });

        return organization;
    } catch (err) {}
}
