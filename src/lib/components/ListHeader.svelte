<script lang="ts">
  export let href: string;
	export let alignment: string = "left";
</script>

<h1 style="text-align: {alignment};">
	<a href="{href}">
    <svg viewBox="0 0 1000 1000" width="18px" height="15px">
			<path d="M794.6,120.8L683.9,10l-488,488l485.5,492l122.8-116.4L413.5,495.9L794.6,120.8z"></path>
    </svg>
	</a>
  <slot></slot>
</h1>

<style lang="scss">
  @use "$lib/styles/variables" as *;

	h1 {
		text-align: left;
		font-size: calc(1.5 * $base-font-size);
		margin-bottom: calc($spacing-unit / 2);
	}
</style>