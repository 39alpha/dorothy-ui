<script lang="ts">
	export let data;
</script>

<h1>{data.organization}'s Repositories</h1>
<div class="repositories">
	<ul>
		<li>
			<a href="/{data.organization}/create">New Repository</a>
			{#each data.repositories as { name, path }}
				<li><a href={path}>{name}</a></li>
			{/each}
		</li>
	</ul>
</div>

<style>
	ul {
		list-style-type: none;
		padding: 0;
	}
	.repositories {
		padding-left: 1em;
	}
</style>
