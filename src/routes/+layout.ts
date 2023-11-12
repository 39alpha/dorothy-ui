/** @type {import("./$types").LayoutLoad} */
interface Entity {
	name: string;
	path: string;
}

interface Dataset extends Entity {}

interface Organization extends Entity {
	datasets: Array<Dataset>;
}

export async function load({ fetch }) {
	let organizations: Array<Organization> = [];
	try {
		const res = await fetch(`http://localhost:4248/v0/organization`);
		organizations = await res.json();
		await Promise.all(
			organizations.map(async (organization: Organization): Promise<void> => {
				const res = await fetch(
					`http://localhost:4248/v0/organization${organization.path}/dataset`
				);
				organization.datasets = await res.json();
			})
		);

		organizations.sort((a: Organization, b: Organization): number => {
			if (a.name < b.name) {
				return -1;
			} else if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
	} catch (err) {}

	return { organizations };
}
