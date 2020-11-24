<template>
  <div class="form">
    <form @submit.prevent="addTodo">
      <div class="form-group">
        <input v-model="newTodo" class="form-control form-control-lg rounded-lg w-100 mx-auto" type="text" placeholder="Add Todo Task">
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: mapActions(['addTodo']),
  computed: {
    newTodo: {
      get() {
        return this.$store.state.newTodo;
      },
      set(value) {
        this.$store.dispatch('setTodo',value);
      }
    }
  },

}
</script>

<style scoped lang="scss">
@import "@/assets/styles/_variables.scss";

  .form-control {
    background-color: $input;
    box-shadow: 0 0 3px 3px rgba($primary,0.25);
  }

  .form-control:focus {
    border: none;
    outline: none;
    box-shadow: 0 0 10px 1px $primary;
    background-color: $input;
  }
</style>