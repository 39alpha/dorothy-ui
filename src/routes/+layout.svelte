<script lang="ts">
    import '$lib/styles/main.scss';
    import Navigation from '$lib/components/Navigation.svelte';
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
</script>

<header>
    <div>
        <h1><a href="/">Dorothy</a></h1>
        <h2>End-to-end dataset management</h2>
    </div>
    <Navigation />
</header>
<main>
    <div>
        <slot />
    </div>
</main>
<footer />
