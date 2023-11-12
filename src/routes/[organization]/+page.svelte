<script lang="ts">
	import ListHeader from '$lib/components/ListHeader.svelte';
	export let data;
</script>

<ListHeader href="/">
	{data.organization}'s Datasets
</ListHeader>

<div class="description">
	<h1>Walkthrough:</h1>

	<p>
		The next level down from an organization is a <em>dataset</em>. An organization can have any
		number of datasets. Go ahead and select one of the datasets below, or create a new one.
	</p>
</div>

<div>
	<ul>
		<li>
			<a href="/{data.organization}/create">New Dataset</a>
		</li>
		{#each data.datasets as { name, path }}
			<li><a href={path}>{name}</a></li>
		{/each}
	</ul>
</div>

<style lang="scss">
	@use '$lib/styles/variables' as *;

	h1 {
		text-align: left;
		font-size: calc(1.5 * $base-font-size);
		margin-bottom: calc($spacing-unit / 2);
	}

	.description {
		margin-bottom: $spacing-unit;
		padding: calc($spacing-unit / 2) $spacing-unit;
		border-top: 1px solid black;
		border-bottom: 1px solid black;

		h1 {
			font-size: calc(1.25 * $base-font-size);
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
		ul {
			list-style-type: none;
			margin: 0;

			li:first-child {
				margin-bottom: calc($spacing-unit / 2);
				a {
					background: $grey-color-10;
					font-weight: bold;
					border: 1px solid black;
					border-radius: 3px;
					padding: calc($spacing-unit / 4);
				}

				a:hover {
					text-decoration: none;
				}
			}
		}
	}
</style>
