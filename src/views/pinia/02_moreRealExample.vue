<script setup>
// 官網: 更真實的範例
// https://pinia.vuejs.org/zh/introduction.html
import { ref, computed } from 'vue'
import { useTodos } from '@/stores/todoStore'

const todosStore = useTodos()
const newTodoText = ref('')

const filter = computed({
  get: () => todosStore.filter,
  set: (value) => (todosStore.filter = value)
})

const filteredTodos = computed(() => todosStore.filteredTodos)

const addTodo = () => {
  if (newTodoText.value.trim()) {
    todosStore.addTodo(newTodoText.value.trim())
    newTodoText.value = ''
  }
}

const toggleTodo = (id) => {
  const todo = todosStore.todos.find((todo) => todo.id === id)
  if (todo) {
    todo.isFinished = !todo.isFinished
  }
}
</script>

<template>
  <div>
    <input v-model="newTodoText" placeholder="Add a todo" @keyup.enter="addTodo" />
    <button @click="addTodo">Add Todo</button>

    <div>
      <label> <input type="radio" value="all" v-model="filter" /> All </label>
      <label> <input type="radio" value="finished" v-model="filter" /> Finished </label>
      <label> <input type="radio" value="unfinished" v-model="filter" /> Unfinished </label>
    </div>

    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <span :style="{ textDecoration: todo.isFinished ? 'line-through' : 'none' }">
          {{ todo.text }}
        </span>
        <button @click="toggleTodo(todo.id)">Toggle</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* 添加一些簡單的樣式 */
input {
  margin-bottom: 10px;
}
button {
  margin-left: 10px;
}
</style>
