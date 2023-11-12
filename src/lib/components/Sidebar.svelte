<script lang="ts">
    export let organizations;
    export let organization;
    export let dataset = undefined;

    $: organization = organizations ? organizations[0] : undefined;
    $: view = false;

    let select_organization = function (index: number): void {
        organization = organizations[index];
        view = false;
    }
</script>

<div class="sidebar">
    <h1>Datasets</h1>

    <div class="sidebar_controls">
        <details bind:open={view}>
            {#if organization}
            <summary>{organization.name}</summary>
            {:else}
            <summary>No Organizations</summary>
            {/if}
            <details-menu>
                <ul>
                    <li><strong>Organizations</strong></li>
                    {#each organizations ?? [] as { name, path }, i}
                        <li>
                            <span class="icon" class:disabled={organization.path !== path}>
                                <i class="fa fa-check"></i>
                            </span>
                            <a href="javascript:void(0)" on:click={() => select_organization(i)}>
                                {name}
                            </a>
                        </li>
                    {/each}
                    <li>
                        <span class="icon">
                            <i class="fa fa-square-plus"></i>
                        </span>
                        <a href="/organization/create">Create Organization</a>
                    </li>
                </ul>
            </details-menu>
        </details>

        <a class="button" href="/create">
            <span class="icon">
                <i class="fa fa-square-plus"></i>
            </span>
            <span>Create</span>
        </a>
    </div>

    {#if organization?.datasets?.length}
    <ul>
        {#each organization.datasets as { name, path }, i}
            <li>
                <span class="icon" class:disabled={dataset !== name}>
                    <i class="fa fa-check"></i>
                </span>
                <a href="{path}">{organization.name}/{name}</a>
            </li>
        {/each}
    </ul>
    {:else}
    <p>Organization has no datasets yet.</p>
    {/if}
</div>
