<script lang="ts">
    import Sidebar from '$lib/components/Sidebar.svelte';
    import Version from '$lib/components/Version.svelte';

    export let data;
</script>

<Sidebar organizations={data.organizations} organization={data.organization} dataset={data.dataset} />

<div class="body">
    <h1><a href="/{data.organization.id}">{data.organization.name}</a>/{data.dataset.name}</h1>

    {#if data?.dataset?.manifest?.versions?.length }
        <ul class="manifest">
            {#each [...data.dataset.manifest.versions].reverse() as version}
                <Version {...version} />
            {/each}
        </ul>
    {:else}
        <p>No versions have been uploaded quite yet!</p>
    {/if}
</div>
