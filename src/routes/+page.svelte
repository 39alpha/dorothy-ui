<script lang="ts">
    import Sidebar from '$lib/components/Sidebar.svelte';

    export let data;
</script>

<Sidebar organizations={data.organizations} />

<div class="body">
    <h1>Walkthrough:</h1>

    <p>
        Meet <strong>Dorothy</strong>, an end-to-end data management system. If you are familiar
        with
        <a href="https://git-scm.com">git</a>
        and <a href="https://github.com">GitHub</a> or
        <a href="https://gitlab.com">GitLab</a> then you are already halfway to understanding Dorothy.
        We like to think of Dorothy as a "dataforge", a suite of tools used to version, manage and distribute
        datasets.
    </p>

    <p>
        Within Dorothy, datasets are organized hierarchically, similar to repositories on GitHub. At
        the moment, the homepage of Dorothy's UI is the root of the heirarchy. That's where you are
        now!
    </p>

    <p>
        The next level down are <em>organizations</em>. You can see those listed below, as well as
        an option to create a new organization. The next level down from an organization is a
        <em>dataset</em>. An organization can have any number of datasets.
    </p>

    <p>
        The dropdown menu in the sidebar will let you select between existing organizations to view
        it's existing datasets, or create a new one. Once an organization is selected, you can
        create a new datset under that organization with the "Create" button.
    </p>
</div>
