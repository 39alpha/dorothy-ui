<script lang="ts">
    import Sidebar from '$lib/components/Sidebar.svelte';
    import Version from '$lib/components/Version.svelte';

    export let data;

    let organization;
</script>

<Sidebar organizations={data.organizations} bind:organization dataset={data.dataset} />

<div class="body">
    <h1>{data.organization}/{data.dataset}</h1>
    {#if data.manifest && data.manifest.length > 0}
        <ul class="manifest">
            {#each [...data.manifest].reverse() as version}
                <Version {...version} />
            {/each}
        </ul>
    {:else}
        <p>No versions have been uploaded quite yet!</p>
    {/if}
</div>
