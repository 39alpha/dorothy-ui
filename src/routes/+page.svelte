<script lang="ts">
	export let data;
</script>

<h1>Organizations</h1>
<div class="organizations">
	<ul>
		<li>
			<a href="/create">New Organization</a>
			{#each data.organizations as { name, path }}
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
	.organizations {
		padding-left: 1em;
	}
</style>
