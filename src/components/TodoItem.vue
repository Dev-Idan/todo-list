<template>
  <div class="item w-100 py-2 mb-3 text-left pr-2 pl-3 rounded-lg">
    <div class="d-flex flex-row align-items-center todo-contain">

      <label class="checkbox-container mb-3 mr-2">
        <input @click="toggleDone" type="checkbox" :checked="todo.done">
        <div class="checkbox-input"></div>
      </label>
      
      <span :class="{ done: todo.done }" class="todo-title">
        {{ todo.title }}
      </span>

			<div class="ml-auto px-2 close-div" @click="deleteTodo">X</div>

    </div>
  </div>
</template>

<script>

export default {
  props: {
		todo: Object,
		index: Number
	},
	methods: {
		toggleDone(){
			this.$store.dispatch('todolist/toggleDone', this.index);
		},
		deleteTodo(){
			this.$store.dispatch('todolist/deleteTodo', this.index);
		}
	}
}
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";

  .item {
    background-color: $primary;
    color: $anchor;
    box-shadow: 0 0 5px 3px rgba(0,0,0,0.25);
    font-size: 2rem;
		word-break:break-word;
  }

  .item:hover {
    box-shadow: 0 0 3px 3px rgba(0,0,0,0.5);
  }

  .done {
    color: #777;
    text-decoration: line-through;
    text-decoration-thickness: 2px;
    text-decoration-color: $error;
    transform: skewX(-20deg);
  }

	.close-div {
		cursor: pointer;
		color: $error;
		font-weight: 800;
	}

	.close-div:hover {
		color: saturate($error,10%);
	}

	.close-div:active {
		transform: translate(1px,1px);
	}

  .checkbox-container *, .checkbox-container *::before, .checkbox-container *::after {
	box-sizing: content-box !important;
}

.checkbox-container input {
	position: absolute;
	z-index: -1;
	opacity: 0;
}

.checkbox-container span {
	line-height: 1.54;
	font-size: 1rem;
	font-family: inherit;
}

.checkbox-container {
	display: table;
	position: relative;
	padding-left: 1.8rem;
	cursor: pointer;
	margin-bottom: .5rem;
}

.checkbox-container input[type="checkbox"] ~ .checkbox-input {
	position: absolute;
	top: 0;
	left: 0;
	height: 1.25rem;
	width: 1.25rem;
	background: rgba(241, 245, 248, 1);
	transition: background 250ms;
	border: 1px solid rgba(184, 194, 204, 1);
	border-radius: 0.125rem;
}

.checkbox-container input[type="checkbox"] ~ .checkbox-input::after {
	content: '';
	position: absolute;
	display: none;
	left: .45rem;
	top: .18rem;
	width: .25rem;
	height: .6rem;
	border: solid rgba(255, 255, 255, 1);
	border-width: 0 2px 2px 0;
	transition: background 250ms;
	transform: rotate(45deg);
}

.checkbox-container input:disabled ~ .checkbox-input::after {
	border-color: rgba(135, 149, 161, 1);
}

.checkbox-container input:checked ~ .checkbox-input::after {
	display: block;
}

.checkbox-container:hover input ~ .checkbox-input,
.checkbox-container input:focus ~ .checkbox-input {
	background: rgb(231, 238, 243);
}

.checkbox-container input:focus ~ .checkbox-input {
	box-shadow: 0 0 0 2px rgba($anchor,0.5);
}

.checkbox-container input:checked ~ .checkbox-input {
	background: rgba($anchor, 1);
	border-color: rgba($anchor, 1);
}

.checkbox-container input[type="checkbox"]:disabled ~ .checkbox-input {
	background: rgba(241, 245, 248, 1);
	border-color: rgba(184, 194, 204, 1);
	opacity: 0.6;
	cursor: not-allowed;
}

.checkbox-container input:checked:focus ~ .checkbox-input, .checkbox-container:hover input:not([disabled]):checked ~ .checkbox-input {
	background: rgba($anchor, 1);
	border-color: rgba($anchor, 1);
}

.checkbox-container .checkbox-input::before {
	content: '';
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	width: 3rem;
	height: 3rem;
	margin-left: -0.85rem;
	margin-top: -0.85rem;
	background: rgba($anchor, 1);
	border-radius: 2rem;
	opacity: .6;
	z-index: 99999;
	transform: scale(0);
}

@keyframes b-ripple {
	0% {
		transform: scale(0);
	}

	20% {
		transform: scale(1);
	}

	100% {
		opacity: 0;
		transform: scale(1);
  	}
}

@keyframes b-ripple-duplicate {
	0% {
		transform: scale(0);
	}

	30% {
		transform: scale(1);
	}

	60% {
		transform: scale(1);
	}

	100% {
		opacity: 0;
		transform: scale(1);
  	}
}

.checkbox-container input + .checkbox-input::before {
	animation: b-ripple 250ms ease-out;
}

.checkbox-container input:checked + .checkbox-input::before {
	animation-name: b-ripple-duplicate;
}

.checkbox-container .checkbox-input::before {
	visibility: hidden;
}

.checkbox-container input:focus + .checkbox-input::before {
	visibility: visible;
}

.checkbox-container:first-child .checkbox-input::before {
	visibility: hidden;
}  
</style>