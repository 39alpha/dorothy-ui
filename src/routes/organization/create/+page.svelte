<script lang="ts">
    import Sidebar from '$lib/components/Sidebar.svelte';

    export let data;
</script>

<Sidebar organizations={data.organizations} />

<div class="body">
    <h1>Create an Organization</h1>

    <form method="POST">
        <div>
            <label for="name">Name</label>
            <input name="name" type="text" />
        </div>

        <div>
            <label for="email">Contact Email</label>
            <input name="email" type="email" />
        </div>

        <div>
            <label for="description">Description</label>
            <textarea name="description" rows="4" />
        </div>

        <button type="submit">Create Organization</button>
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
