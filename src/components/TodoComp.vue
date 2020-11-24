<template>
  <div class="container mt-5 mx-auto text-center">

    <!-- New Todo Input -->
    <div class="row">
      <div class="col-12 col-md-6 mx-auto">
        <TodoInput />
      </div>
    </div>

    <!-- Todos list -->
    <div class="row mt-4">
      <div class="col-12 col-md-6 mx-auto">
        <TodoList />
      </div>
    </div>

  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  components: {
    TodoInput,
    TodoList
  },
  created() {
    this.$store.dispatch('todolist/obtainTodos');
  }
}
</script>