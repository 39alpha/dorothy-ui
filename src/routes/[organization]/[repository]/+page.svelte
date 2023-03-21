<script lang="ts">
	import moment from 'moment-timezone';
	export let data;
</script>

<h1><a href="/{data.organization}">{data.organization}</a>/{data.repository}</h1>
<ul class="manifest">
	{#each data.manifest.reverse() as { name, author, date, message, hash }}
		<li class="manifest_entry">
			<div class="version">
				<div class="version_row">
					<span class="version_message">{message}</span>
				</div>
				<div class="version_row">
					<span class="version_author">{author}</span>
					<span class="version_date">{moment(date).format('Y-MM-D hh:mm:ss')} </span>
				</div>
				<div class="version_row">
					<span class="version_hash">{hash}</span>
				</div>
			</div>
		</li>
	{/each}
</ul>

<style>
	.manifest {
		min-width: 300px;
		width: max-content;
	}
	.manifest_entry {
		list-style-type: none;
		padding: 0.4em 1em;
		margin: 0.2em 0em;
		border: 1px solid #444444;
	}
	.version {
		display: inline-block;
	}
	.version_row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.version_message {
		font-weight: bold;
		font-size: 14px;
	}
	.version_date {
		font-size: 12px;
	}
	.version_author,
	.version_hash {
		font-size: 12px;
	}
	.version_author {
		font-weight: bold;
	}
</style>
