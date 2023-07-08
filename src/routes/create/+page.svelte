<script lang="ts">
	import ListHeader from '$lib/components/ListHeader.svelte';
</script>

<ListHeader href="/">
	Create a New Organization
</ListHeader>

<div class="description">
	<h1>
		Walkthrough:
	</h1>

	<p>
		Organizations can represent whatever you want, a research program, a team,
		a user. Once a user system has been added, the creator of the organization
		(and the system administrator) will be able to control read and write
		access to the organization's datasets.
	</p>

	<p>
		To create an organization, just give it a name and a description. We don't
		really use the description at the moment, but we will.
	</p>
</div>

<div>
	<form method="POST">
		<div>
			<label for="name">Name</label>
			<input name="name" type="text" />
		</div>
		<div>
			<label for="description">Description</label>
			<input name="description" type="text" />
		</div>
		<button type="submit">Create Organization</button>
	</form>
</div>

<style lang="scss">
@use "$lib/styles/variables" as *;

.description {
	margin-bottom: $spacing-unit;
	padding: calc($spacing-unit / 2) $spacing-unit;
	border-top: 1px solid black;
	border-bottom: 1px solid black;

	h1 {
		text-align: left;
		font-size: calc(1.25 * $base-font-size);
		margin-bottom: calc($spacing-unit / 2);
	}

	p {
		text-align: justify;
		line-height: calc($base-line-height / 1);
		margin-bottom: calc($spacing-unit / 2);
	}

	p:last-child {
		margin-bottom: 0px;
	}
}

div {
	display: flex;
	flex-direction: column;

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: calc($spacing-unit/2);

		div {
			width: 60%;

			label {
				font-weight: bold;
			}

			input {
			}
		}

		button {
			width: 60%;
		}
	}
}
</style>