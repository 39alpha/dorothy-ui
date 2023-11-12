<script lang="ts">
    import ListHeader from '$lib/components/ListHeader.svelte';
    import Version from '$lib/components/Version.svelte';

    export let data;
</script>

<ListHeader href="/">{data.organization}/{data.repository}</ListHeader>

<div class="description">
    <h1>Walkthrough:</h1>

    <p>
        Finally, you've reached the level of a dataset. Datasets are composed of any number of
        versions. There is no restriction on what data constitutes a version other than unique
        content.
    </p>

    <p>A version has a number of properties:</p>
    <dl>
        <dt>Description</dt>
        <dd>
            A description of the version. Idiomatically, the description is used to semantically
            identify particular version relative to the other versions.
        </dd>
        <dt>Author</dt>
        <dd>Every version has an author, identified by name and email address, who created it.</dd>
        <dt>Date</dt>
        <dd>When a version is created, the date is recorded down to the second.</dd>
        <dt>IPFS Hash</dt>
        <dd>
            When the data is added to <a href="https://ipfs.tech">IPFS</a>, a cryptographic hash
            (CID) of its contents is created. This hash uniquely identifies the data and can be used
            to reference it on the IPFS network.
        </dd>
    </dl>

    <p>
        Versions are not, generally, independent; they generally build upon one another. Each
        version has zero or more <em>parent</em> versions, refered to by hash. The parents of a
        version need not be versions of the dataset, they can be CIDs of external IPFS assets. The
        versions of a dataset are built into a directed asyclic graph (DAG) which represents the
        history of the respository. At the moment, the history of the dataset is represented
        linearly. That will be remedied in a later version.
    </p>

    <p>
        You can view the contents of a version by clicking on its hash. Eventually, we will have
        additional tools for exploring versions, and maybe some options for data visualization.
    </p>
</div>

<div>
    {#if data.manifest && data.manifest.length > 0}
        <ul class="manifest">
            {#each data.manifest.reverse() as version}
                <Version {...version} />
            {/each}
        </ul>
    {:else}
        <p>No versions have been uploaded quite yet!</p>
    {/if}
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

        dl {
            margin-left: $spacing-unit;
            margin-bottom: calc($spacing-unit / 2);

            dt {
                font-weight: bold;
            }

            dd {
                margin-left: $spacing-unit;
            }
        }
    }

    .description {
        margin-bottom: $spacing-unit;
        padding: calc($spacing-unit / 2) $spacing-unit;
        border-top: 1px solid black;
        border-bottom: 1px solid black;

        p {
            text-align: justify;
            line-height: calc($base-line-height / 1);
            margin-bottom: calc($spacing-unit / 2);
        }

        p:last-child {
            margin-bottom: 0px;
        }
    }

    div:last-child {
        display: flex;
        flex-direction: column;
        width: 100%;

        ul {
            list-style-type: none;
            width: 100%;
            padding: 0px;
            margin: 0px;
        }
    }
</style>
