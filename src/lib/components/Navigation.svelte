<script lang="ts">
  interface MenuItem {
    title: string
    href: string
    items: Array<MenuItem>
  }

  export let items: Array<MenuItem> = []; 
</script>

<nav>
{#if items.length > 0}
  <input type="checkbox" id="nav-trigger">
  <label for="nav-trigger">
    <span>
      <svg viewBox="0 0 18 15" width="18px" height="15px">
        <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484L18,1.484z M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516L18,7.516z M18,13.516C18,14.335,17.335,15,16.516,15H1.484 C0.665,15,0,14.335,0,13.516l0,0c0-0.82,0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.516L18,13.516z"></path>
      </svg>
    <span>
  </label>
  <div>
    <ul>
    {#each items as item}
      <li><a href="{item.href}">{item.title}</a>
      {#if item.items.length > 0}
        <ul>
        {#each item.items as subitem}
          <li><a href="{subitem.href}">{subitem.title}</a></li>
        {/each}
        </ul>
      {/if}
      </li>
    {/each}
    </ul>
  </div>
{/if}
</nav>

<style lang="scss">
@import "$lib/styles/variables", "$lib/styles/mixins";

nav {
  font-size: $large-font-size;
  font-weight: bold;
  float: right;

  input, label {
    display: none;
  }

  div {
    ul {
      list-style: none;
    }

    &>ul {
      list-style: none;
      padding: 0;
      margin: 0;

      &>li {
        display: inline-block;

        a:hover~ul {
          display: block;
        }

        &:not(:last-child) {
          margin-right: 20px;
        }

        &>ul {
          line-height: $base-line-height;
          background: $background-color;
          padding: 10px;
          margin-left: -10px;
          display: none;
          position: absolute;
          top: calc(100% - 10px);
          z-index: 500;
          text-align: left;

          &:hover {
            display: block;
          }
        }
      }
    }
  }

  
  @include media-query($on-palm) {
    position: absolute;
    top: 9px;
    left: calc($spacing-unit / 2);
    background: $background-color;
    text-align: left;
    z-index: 500;

    label {
      display: block;
      float: left;
      width: 36px;
      height: 36px;
      z-index: 2;
      cursor: pointer;
    }

    input~div {
      clear: both;
      display: none;
    }

    input:checked~div {
      display: block;
      padding-bottom: 5px;
    }

    div {
      border: 1px solid black;
    
      ul {
        list-style: none;
        display: none;
        padding: 7px calc($spacing-unit / 2) 0px calc($spacing-unit /2);
      }

      &>ul {
        list-style: none;
        display: block;

        &>li {
          display: list-item;

          &>ul {
            line-height: $base-line-height;
            position: static;
            display: block;
            margin: auto 0px;
            padding: 0px 0px 0px calc($spacing-unit / 2);
          }
        }
      }
    }
  }
}

</style>