<script lang="ts">
    import Loading from '$lib/components/Loading.svelte';
    import { onMount } from 'svelte';

    export let organizations;
    export let organization;
    export let dataset;

    $: organization = organization ?? organizations?.[0];

    $: view = false;

    let select_organization = function (index: number): void {
        organization = organizations[index];
        view = false;
    };
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
                    {#each organizations ?? [] as { id, name }, i}
                        <li>
                            <span class="icon" class:disabled={organization?.id !== id}>
                                <i class="fa fa-check" />
                            </span>
                            <a href={'javascript:void(0)'} on:click={() => select_organization(i)}>
                                {name}
                            </a>
                        </li>
                    {/each}
                    <li>
                        <span class="icon">
                            <i class="fa fa-square-plus" />
                        </span>
                        <a href="/organization/create">Create Organization</a>
                    </li>
                </ul>
            </details-menu>
        </details>

        <a class="button" href="/{organization?.id}/dataset/create" disabled={!organization}>
            <span class="icon">
                <i class="fa fa-square-plus" />
            </span>
            <span>Create</span>
        </a>
    </div>

    {#if !organization.datasets }
        <Loading />
    {:else}
        {#if organization?.datasets?.length }
            <ul>
                {#each organization.datasets as { id, name }, i}
                    <li>
                        <span class="icon" class:disabled={dataset?.id !== id}>
                            <i class="fa fa-check" />
                        </span>
                        <a href="/{organization.id}/{id}">{name}</a>
                    </li>
                {/each}
            </ul>
        {:else}
            <p>Organization has no datasets yet.</p>
        {/if}
    {/if}
</div>
