<script lang="ts">
    import ListHeader from '$lib/components/ListHeader.svelte';

    export let data;
</script>

<ListHeader href="/{data.organization}">
    Create a New Dataset for {data.organization}
</ListHeader>

<div class="description">
    <h1>Walkthrough:</h1>

    <p>
        Datasets are, well, datasets. Organizations can have any number of datasets, and each
        dataset can have any number of <em>versions</em>. Before you can <em>push</em> a version to
        a dataset on Dorothy, you will need to create a dataset.
    </p>

    <p>
        Once Dorothy has a user system, the creator of a dataset, the organization's creator, and
        the system administrator will be able to control read and write access to the dataset.
    </p>

    <p>
        To create a dataset, just give it a name and a description. We don't really use the
        description at the moment, but we will.
    </p>
</div>

<div>
    <form method="POST">
        <div>
            <label for="name">Name</label>
            <input name="name" type="text" />
        </div>
        <div>
            <label for="description">Description</label>
            <input name="description" type="text" />
        </div>
        <button type="submit">Create Repository</button>
    </form>
</div>

<style lang="scss">
    @use '$lib/styles/variables' as *;

    .description {
        margin-bottom: $spacing-unit;
        padding: calc($spacing-unit / 2) $spacing-unit;
        border-top: 1px solid black;
        border-bottom: 1px solid black;

        h1 {
            text-align: left;
            font-size: calc(1.25 * $base-font-size);
            margin-bottom: calc($spacing-unit / 2);
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
        display: flex;
        flex-direction: column;

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: calc($spacing-unit/2);

            div {
                width: 60%;

                label {
                    font-weight: bold;
                }

                input {
                }
            }

            button {
                width: 60%;
            }
        }
    }
</style>
