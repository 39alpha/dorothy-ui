<script lang="ts">
    import { getContext } from 'svelte';
    import Sidebar from '$lib/components/Sidebar.svelte';

    export let data;

    const avatar = 'https://gateway.39alpharesearch.org/ipfs/QmZJEpyUESuu45zf9JaRZUvnKomg2y5cSkHLC2u1rjcL3Z';
</script>

<Sidebar organizations={data.organizations} organization={data?.organization} />

<div class="body">
    <h1>{data?.organization?.name}'s Datasets</h1>
    <div class="body_content">
        {#if data?.organization?.description}
            <p>{data?.organization?.description}<p>
        {/if}
        {#if data?.organization?.datasets?.length}
            {#each data?.organization.datasets as { id, name }, i}
                <div class="dataset">
                    <img class="dataset_avatar" src="{data?.organization?.avatar ?? avatar}" alt="{name} avatar" />
                    <div class="dataset_details">
                        <div class="dataset_header">
                            <a href="/{data?.organization?.id}/{id}">{data?.organization?.id}/{id}</a>
                        </div>
                        <div class="dataset_description">
                            <p>{data?.organization?.description ?? 'A glorious dataset as yet undescribed'}</p>
                        </div>
                    </div>
                </div>
            {/each}
        {:else}
            <p>Organization has no datasets yet.</p>
        {/if}
    </div>
</div>

<style lang="scss">
    @use '$lib/styles/variables' as *;

    .body {
        width: 67%;

        &_content {
            display: flex;
            flex-direction: column;
        }
    }

    .dataset {
        display: flex;
        padding: 0;
        margin: calc($spacing-unit / 2) 0;
        border: 1px solid #444444;
        background: $grey-color-10;
        gap: $spacing-unit;

        &_avatar {
            width: calc(3 * $base-line-height * 1em);
            height: calc(3 * $base-line-height * 1em);
        }

        &_details {
            overflow: hidden;
            padding: 0 $spacing-unit calc($spacing-unit / 2) 0;
        }

        &_header {
            font-weight: bold;
            font-size: 1.5em;
        }

        &_description {
            &, & > * {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
</style>
