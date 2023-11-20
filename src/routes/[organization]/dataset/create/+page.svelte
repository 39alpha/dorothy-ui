<script lang="ts">
    import Sidebar from '$lib/components/Sidebar.svelte';

    export let data;
</script>

<Sidebar organizations={data.organizations} organization={data.organization}/>

<div class="body">
    <h1>Create a Dataset for <a href="{data.organization.path}">{data.organization.name}</a></h1>

    <form method="POST">
        <div>
            <label for="name">Name</label>
            <input name="name" type="text" />
        </div>

        <div>
            <label for="description">Description</label>
            <textarea name="description" rows="4" />
        </div>

        <button type="submit">Create Dataset</button>
    </form>
</div>

<style lang="scss">
    @use '$lib/styles/variables' as *;

    .body {
        width: 100%;
        display: flex;
        flex-direction: column;

        form {
            display: flex;
            flex-direction: column;
            align-items: left;
            gap: calc($spacing-unit/2);

            div {
                display: flex;
                flex-direction: column;
            }

            button {
                width: calc(12 * $spacing-unit);
            }
        }
    }
</style>
