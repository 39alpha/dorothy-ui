/** @type {import("./$types").PageLoad} */
export async function load({ fetch, params }) {
    try {
        let res = await fetch(
            `http://localhost:4248/v0/organization/${params.organization}/dataset/${params.dataset}`
        );
        const dataset = await res.json();

        res = await fetch(
            `http://localhost:4248/v0/organization/${params.organization}/dataset/${params.dataset}/manifest`
        );
        dataset.manifest = await res.json();

        return { dataset };
    } catch (err) {
        console.error(err);
        return {};
    }
}
