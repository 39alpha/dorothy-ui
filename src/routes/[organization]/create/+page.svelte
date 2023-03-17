<script>
	export let data;
</script>

<h1>Create a New Repository for {data.organization}</h1>
<form method="POST">
	<label>
		Name
		<input name="name" type="text" />
	</label>
	<button type="submit">Create</button>
</form>
