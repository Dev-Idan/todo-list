<template>
  <div id="app">

    <header>
      <nav class="navbar nav shadow-sm">
        <span class="text-center mx-auto app-title">Todo List</span>
      </nav>
    </header>

    <main>
      <TodoComp />
    </main>

    <footer></footer>

  </div>
</template>

<script>
import TodoComp from '@/components/TodoComp.vue';

export default {
  components: {
    TodoComp
  },
}
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

  body {
    font-family: 'Mukta', sans-serif;
    background-color: $secondary !important;
  }

  .app-title {
    font-size: 3.5rem;
    letter-spacing: 1px;
    font-weight: 800;
    color: $anchor;
    text-shadow: 2px 2px darken($anchor,35%);
  }

  .nav {
    background-color: $primary;
  }
</style>
