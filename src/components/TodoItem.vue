<template>
  <div class="item w-100 py-2 mb-3 text-left pr-2 pl-3 rounded-lg">
    <div class="d-flex flex-row align-items-center">

      <label class="b-contain mb-3 mr-2">
        <input @click="toggleDone" type="checkbox" :checked="todo.done">
        <div class="b-input"></div>
      </label>
      
      <span :class="{ done: todo.done }">
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
			this.$store.dispatch('toggleDone', this.index);
		},
		deleteTodo(){
			this.$store.dispatch('deleteTodo', this.index);
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

  .b-contain *, .b-contain *::before, .b-contain *::after {
	box-sizing: content-box !important;
}

.b-contain input {
	position: absolute;
	z-index: -1;
	opacity: 0;
}

.b-contain span {
	line-height: 1.54;
	font-size: 1rem;
	font-family: inherit;
}

.b-contain {
	display: table;
	position: relative;
	padding-left: 1.8rem;
	cursor: pointer;
	margin-bottom: .5rem;
}

.b-contain input[type="checkbox"] ~ .b-input {
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

.b-contain input[type="checkbox"] ~ .b-input::after {
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

.b-contain input:disabled ~ .b-input::after {
	border-color: rgba(135, 149, 161, 1);
}

.b-contain input:checked ~ .b-input::after {
	display: block;
}

.b-contain:hover input ~ .b-input,
.b-contain input:focus ~ .b-input {
	background: rgb(231, 238, 243);
}

.b-contain input:focus ~ .b-input {
	box-shadow: 0 0 0 2px rgba($anchor,0.5);
}

.b-contain input:checked ~ .b-input {
	background: rgba($anchor, 1);
	border-color: rgba($anchor, 1);
}

.b-contain input[type="checkbox"]:disabled ~ .b-input {
	background: rgba(241, 245, 248, 1);
	border-color: rgba(184, 194, 204, 1);
	opacity: 0.6;
	cursor: not-allowed;
}

.b-contain input:checked:focus ~ .b-input, .b-contain:hover input:not([disabled]):checked ~ .b-input {
	background: rgba($anchor, 1);
	border-color: rgba($anchor, 1);
}

.b-contain .b-input::before {
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

.b-contain input + .b-input::before {
	animation: b-ripple 250ms ease-out;
}

.b-contain input:checked + .b-input::before {
	animation-name: b-ripple-duplicate;
}

.b-contain .b-input::before {
	visibility: hidden;
}

.b-contain input:focus + .b-input::before {
	visibility: visible;
}

.b-contain:first-child .b-input::before {
	visibility: hidden;
}  
</style>