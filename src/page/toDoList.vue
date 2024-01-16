<template>
  <div class="todo_wrap">
    <div
      class="current_write"
    >
      <input
        type="text"
        v-model="writeTodo"
        @keyup.enter="updateText"
      >
    </div>

    <ul class="to_do_list">
      <li
        v-for="(text, index) in todoList"
        :key="index"
        :class="{ 'fix': text.fixed }"
      >
        <p v-if="!text.edit"> {{ text.desc }}</p>

        <input
          type="text"
          v-show="text.edit"
          v-model="text.desc"
        >

        <div class="btn_box" v-if="text.edit">
          <button :id="index" @click="editCancelTodoItem"> Cancel </button>
          <button :id="index" @click="delTodoItem"> Delete </button>
          <button :id="index" @click="editDoneTodoItem"> Done </button>
        </div>
        <div class="btn_box" v-if="!text.edit">
          <button :id="index" @click="editStartTodoItem"> Edit </button>
          <button :id="index" @click="fixedTodoItem" class="fix_btn"> 📌 </button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {
  ref,
  reactive,
  onMounted
} from "vue"

export default {
  name: "HOME",
  setup() {
    const writeTodo = ref('')
    let todoList = reactive([])

    const updateText = (() => {
      if (writeTodo.value === '' || !writeTodo.value) alert('Write text')
      else writeTextItem(writeTodo.value)
      writeTodo.value = ''
    })

    const writeTextItem = ((text) => {
      if (todoList.length > 10) return alert('MAX LIST')
      else todoList.push({ desc: text, edit: false, fixed: false })
      setTodoItem()
    })

    const setTodoItem = (() => {
      localStorage.setItem('west-todo-item', JSON.stringify(todoList))
    })

    const getTodoItem = onMounted(() => {
      const getItem = JSON.parse(localStorage.getItem('west-todo-item'))
      if (getItem) todoList.push(...getItem)
    })

    const getIndex = ((evt) => { return parseInt(evt.target.id) })

    const delTodoItem = ((e) => {
      todoList.splice(getIndex(e), 1)
      setTodoItem()
    })

    const editStartTodoItem = ((e) => todoList[getIndex(e)].edit = true)

    const editDoneTodoItem = ((e) => {
      todoList[getIndex(e)].edit = false
      setTodoItem()
    })

    const editCancelTodoItem = ((e) => {
      todoList[getIndex(e)].edit = false
      setTimeout(() => location.reload(true), 100)
    })

    const fixedTodoItem = ((e) => {
      todoList[getIndex(e)].fixed = !todoList[getIndex(e)].fixed
      todoList = [...todoList.filter(item => item.fixed), ...todoList.filter(item => !item.fixed)]
      setTodoItem()
      setTimeout(() => location.reload(true), 500)
    })

    return {
      todoList,
      writeTodo,
      getTodoItem,
      updateText,
      setTodoItem,
      delTodoItem,
      editStartTodoItem,
      editDoneTodoItem,
      editCancelTodoItem,
      fixedTodoItem
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/todo.scss'
</style>