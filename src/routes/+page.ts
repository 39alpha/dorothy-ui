/** @type {import("./$types").PageLoad} */
export async function load({ fetch }) {
    const res = await fetch(`http://localhost:4248/v0/organization`);
    const organizations = await res.json();

    return { organizations };
}
