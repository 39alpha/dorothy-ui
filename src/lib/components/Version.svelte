<script lang="ts">
    import moment from 'moment-timezone';

    interface ParseMessage {
        description: string;
        body?: string;
    }

    export let message: string;
    export let author: string;
    export let date: string;
    export let hash: string;
    export let path_type: number;
    // export let parents: Array<string>;

    $: type = path_type == 0 ? 'dir' : 'file';
    $: parsed_message = parseMessage(message);

    function parseMessage(message: string): ParseMessage {
        const lines = message.split('\n\n').filter((x) => x.length !== 0);
        if (lines.length === 0) {
            return {
                description: '<empty description>'
            };
        }
        return {
            description: lines[0],
            body: lines.slice(1)
        };
    }

    function truncate(text: string, width: number): string {
        if (text.length < width - 3) {
            return text;
        }

        let n = Math.min(width - 3, text.length);
        while (text[n] != ' ') {
            n -= 1;
        }
        n - 1;
        return text.slice(0, n) + '...';
    }
</script>

<li class="version version--{type}">
    <div class="version_body">
        <div class="version_row">
            <span class="version_message">
                {truncate(parsed_message.description, 74)}
            </span>
        </div>
        {#if parsed_message.body && parsed_message.body.length != 0}
            <div class="version_row version_row--body">
                {#each parsed_message.body as paragraph}
                    <p>{paragraph}</p>
                {/each}
            </div>
        {/if}
        <div class="version_row">
            <span class="version_author">{author}</span>
            <span class="version_date">{moment(date).format('Y-MM-D hh:mm:ss Z')} </span>
        </div>
        <div class="version_row">
            <span class="version_hash">
                <a href="http://localhost:8088/ipfs/{hash}">
                    {hash}
                </a>
            </span>
        </div>
    </div>
</li>

<style lang="scss">
    @use '$lib/styles/variables' as *;

    li {
        list-style-type: none;
        padding: 0.4em 1em;
        margin: 0.2em 0em;
        border: 1px solid #444444;
    }

    .version {
        &--dir {
            background: $grey-color-10;
        }

        &--file {
            background: $grey-color-30;
        }

        &_body {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            width: 100%;
            padding: 0px;
            margin: 0px;
        }

        &_row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 0px;
            margin: 0px;
            line-height: calc($base-line-height / 1.2);
            max-width: $content-width;

            &--body {
                margin: 5px 0;
            }
        }

        &_message {
            font-weight: bold;
            line-height: $base-line-height;
        }

        &_date {
            @include relative-font-size(0.75);
            // font-size: 12px;
        }

        &_author,
        &_hash {
            @include relative-font-size(0.75);
            // font-size: 12px;
        }

        &_author {
            font-weight: bold;
        }
    }
</style>
