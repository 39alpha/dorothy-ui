<h1>Create a New Organization</h1>
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
div {
	display: flex;
	justify-content: center;

	form {
		display: flex;
		flex-direction: column;
		gap: calc($spacing-unit/2);
		max-width: 80%;

		div {
			display: flex;
			flex-direction: column;

			label {
				font-weight: bold;
			}
		}
	}
}
</style>