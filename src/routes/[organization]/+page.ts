/** @type {import("./$types").PageLoad} */
export async function load({ fetch, params }) {
    try {
        let res = await fetch(`http://localhost:4248/v0/organization/${params.organization}`);
        const organization = await res.json();

        res = await fetch(`http://localhost:4248/v0/organization${organization.path}/dataset`);
        organization.datasets = await res.json();

        return { organization };
    } catch (err) {
        console.error(err);
        return {};
    }
}
