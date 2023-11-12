<script lang="ts">
    export let data;
</script>

<h1>Organizations</h1>

<div class="description">
    <h1>Walkthrough:</h1>

    <p>
        Meet <strong>Dorothy</strong>, an end-to-end data management system. If you are familiar
        with <a href="https://git-scm.com">git</a> and <a href="https://github.com">GitHub</a> or
        <a href="https://gitlab.com">GitLab</a> then you are already halfway to understanding
        Dorothy. We like to think of Dorothy as a "dataforge", a suite of tools used to version,
        manage and distribute datasets.
    </p>

    <p>
        Within Dorothy, datasets are organized hierarchically, similar to repositories on GitHub. At
        the moment, the homepage of Dorothy's UI is the root of the heirarchy. That's where you are
        now!
    </p>

    <p>
        The next level down are <em>organizations</em>. You can see those listed below, as well as
        an option to create a new organization. Go ahead and click one of the extant organizations
        or create a new one!
    </p>
</div>

<div>
    <ul>
        <li>
            <a class="button" href="/create">New Organization</a>
        </li>
        {#each data.organizations as { name, path }}
            <li><a href={path}>{name}</a></li>
        {/each}
    </ul>
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
    }

    div {
        ul {
            list-style-type: none;
            margin: 0;

            li:first-child {
                margin-bottom: calc($spacing-unit / 2);
                a {
                    background: $grey-color-10;
                    font-weight: bold;
                    border: 1px solid black;
                    border-radius: 3px;
                    padding: calc($spacing-unit / 4);
                }

                a:hover {
                    text-decoration: none;
                }
            }
        }
    }
</style>
