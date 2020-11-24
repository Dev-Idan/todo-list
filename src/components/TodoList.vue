<template>
  <div>
    <div v-if="this.loading">
      <HalfCircleSpinner class="mx-auto" :animation-duration="1000" :size="60" color="#ff1d5e"/>
    </div>

    <div v-if="!loading">
      <div v-for="(todo,index) in todos" :key="index">
        <TodoItem :todo="todo" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import TodoItem from '@/components/TodoItem.vue';
  import { HalfCircleSpinner } from 'epic-spinners';

export default {
  data: () => ({
    loading: true,
  }),
  mounted(){
    setTimeout(() => {
      this.loading = false;
    },500);
  },
  computed: mapState(['todos']),
  components: {
    TodoItem,
    HalfCircleSpinner,
  },
}
</script>