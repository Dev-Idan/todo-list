
const state = {
  todos: [],
  newTodo: '',
};

const mutations = {
  OBTAIN_TODOS(state) {
    state.todos = JSON.parse(localStorage.getItem('todos'));
  },
  STORE_TODOS(state) {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  },
  ADD_TODO(state) {
    state.todos.push({
      title: state.newTodo,
      done: false
    });
  },
  SET_NEW_TODO(state, value) {
    state.newTodo = value;
  },
  CLEAR_NEW_TODO(state) {
    state.newTodo = '';
  },
  TOGGLE_DONE(state, index) {
    state.todos[index].done = !state.todos[index].done;
  },
  DELETE_TODO(state, index) {
    state.todos.splice(index, 1);
  },
};

const actions = {
  obtainTodos({ commit }) {
    if (localStorage.hasOwnProperty('todos')) {
      commit('OBTAIN_TODOS');
    }
  },
  addTodo({ commit }) {
    commit('ADD_TODO');
    commit('CLEAR_NEW_TODO');
    commit('STORE_TODOS');
  },
  setTodo({ commit }, value) {
    commit('SET_NEW_TODO', value);
  },
  toggleDone({ commit }, index) {
    commit('TOGGLE_DONE', index);
    commit('STORE_TODOS');
  },
  deleteTodo({ commit }, index) {
    commit('DELETE_TODO', index);
    commit('STORE_TODOS');
  },
};

module.exports = {
  namespaced: true,
  state,
  mutations,
  actions
};