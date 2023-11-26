import { Chain } from '$lib/zeus';
 
/** @type {import("./$types").LayoutLoad} */
export async function load() {
    let organizations: Array<any> = [];

    try {
        const chain = Chain('http://localhost:4248/query');

        organizations = await chain('query')({
            organizations: {
                id: true,
                name: true,
                datasets: {
                    id: true,
                    name: true,
                },
            }
        }).then(res => res.organizations);

        organizations.sort((a: any, b: any): number => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    } catch (err) { }

    return { organizations };
}
