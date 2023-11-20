<script lang="ts">
    import { Circle } from 'svelte-loading-spinners';
</script>

<div class="loading">
    <Circle color="#e0115f" size="30" unit="px" />
</div>

<style lang="scss">
.loading {
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
}
</style>
