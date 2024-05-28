// 官網: 更真實的範例
// https://pinia.vuejs.org/zh/introduction.html
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodos = defineStore('todos', () => {
  const todos = ref([])
  const filter = ref('all')
  const nextId = ref(0)

  const finishedTodos = computed(() => {
    return todos.value.filter((todo) => todo.isFinished)
  })

  const unfinishedTodos = computed(() => {
    return todos.value.filter((todo) => !todo.isFinished)
  })

  const filteredTodos = computed(() => {
    if (filter.value === 'finished') {
      return finishedTodos.value
    } else if (filter.value === 'unfinished') {
      return unfinishedTodos.value
    }
    return todos.value
  })

  function addTodo(text) {
    todos.value.push({ text, id: nextId.value++, isFinished: false })
  }

  return {
    todos,
    filter,
    nextId,
    finishedTodos,
    unfinishedTodos,
    filteredTodos,
    addTodo
  }
})
