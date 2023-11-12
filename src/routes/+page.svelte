<script lang="ts">
    export let data;

    let organization = data?.organizations[0];
    let view = false;

    let select_organization = function (index: number): void {
        organization = data?.organizations[index];
        view = false;
    }
</script>

<div class="content">
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
                        {#each data.organizations as { name, path }, i}
                            <li>
                                <span class="icon" class:disabled={organization.path !== path}>
                                    <i class="fa fa-check"></i>
                                </span>
                                <a href="javascript:void(0)" on:click={() => select_organization(i)}>{name}</a>
                            </li>
                        {/each}
                        <li>
                            <span class="icon">
                                <i class="fa fa-square-plus"></i>
                            </span>
                            <a href="/create">Create Organization</a>
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

        {#if organization.repositories?.length}
        <ul>
            {#each organization.repositories as { name, path }}
                <li><a href="{path}">{organization.name}/{name}</a>
            {/each}
        </ul>
        {:else}
        <p>Organization has no datasets yet.</p>
        {/if}
    </div>

    <div class="body">
        <h1>Walkthrough:</h1>

        <p>
            Meet <strong>Dorothy</strong>, an end-to-end data management system. If you are familiar
            with <a href="https://git-scm.com">git</a> and <a href="https://github.com">GitHub</a>
            or <a href="https://gitlab.com">GitLab</a> then you are already halfway to understanding
            Dorothy. We like to think of Dorothy as a "dataforge", a suite of tools used to version,
            manage and distribute datasets.
        </p>

        <p>
            Within Dorothy, datasets are organized hierarchically, similar to repositories on
            GitHub. At the moment, the homepage of Dorothy's UI is the root of the heirarchy. That's
            where you are now!
        </p>

        <p>
            The next level down are <em>organizations</em>. You can see those listed below, as well
            as an option to create a new organization. The next level down from an organization is a
            <em>dataset</em>. An organization can have any number of datasets.
        </p>

        <p>
            The dropdown menu in the sidebar will let you select between existing organizations to
            view it's existing datasets, or create a new one. Once an organization is selected, you
            can create a new datset under that organization with the "Create" button.
        </p>
    </div>
</div>

<style lang="scss">
    @use '$lib/styles/variables' as *;

    .content {
        display: flex;
    }

    .sidebar {
        flex: 1 0 25%;
        max-width: 25%;
        min-width: min-content;
        padding-left: $spacing-unit;
        padding-right: $spacing-unit;
        border-right: 1px solid $grey-color-40;

        &_controls {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding-bottom: $spacing-unit;

            details {
                margin-right: $spacing-unit;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;

                :hover {
                    cursor: pointer;
                }

                summary {
                    padding: calc($spacing-unit / 4) calc($spacing-unit / 2);
                    font-weight: bold;
                }

                details-menu {
                    background-color: $background-color;
                    position: absolute;
                    border: 1px solid $grey-color-80;
                    border-radius: 10px;
                    box-shadow: 0 0 10px $grey-color-50;
                    ul {
                        li {
                            padding: calc($spacing-unit / 4) calc($spacing-unit / 2);
                        }
                        li:not(:last-child) {
                            border-bottom: 1px solid $grey-color-40;
                        }
                    }
                }
            }

            .button {
                margin-left: $spacing-unit;
                padding-left: calc($spacing-unit / 2);
                padding-right: calc($spacing-unit / 2);
            }
        }

        ul {
            list-style-type: none;
            margin: 0;
        }
    }

    h1 {
        text-align: left;
        font-size: calc(1.5 * $base-font-size);
        margin-bottom: calc($spacing-unit / 2);
    }

    .body {
        margin-bottom: $spacing-unit;
        padding: 0 $spacing-unit;

        p {
            text-align: justify;
            line-height: calc($base-line-height / 1);
            margin-bottom: calc($spacing-unit / 2);
        }

        p:last-child {
            margin-bottom: 0px;
        }
    }
</style>
