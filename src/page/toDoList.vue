<template>
  <div class="todo_wrap" :class="{ 'max_wide' : maximize }">
    <div class="layout_l">
      <app-button />
      <div class="empty_menu">
        <h2>
          MEMO
          <button @click="deleteTodoItem">ALL CELAR</button>
        </h2>
        <p>{{ getUsername }}의 MEMO</p>
      </div>
    </div>
    <div class="layout_r">
      <div
        class="current_write"
      >
        <input
          type="text"
          v-model="writeTodo"
          @keyup.enter="updateText"
          placeholder="Please enter text"
        >
        <span>TOTAL : {{ todoList.length }} </span>
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
            <button :id="index" @click="delTodoItem"> 💣</button>
            <button :id="index" @click="editCancelTodoItem"> ❌ </button>
            <button :id="index" @click="editDoneTodoItem"> ⭕ </button>
          </div>
          <div class="btn_box" v-if="!text.edit">
            <button :id="index" @click="fixedTodoItem" class="fix_btn">✅</button>
            <button :id="index" @click="editStartTodoItem"> 📝 </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {
  ref,
  reactive,
  onMounted,
} from "vue"
import appButton from '../components/appButton.vue'

export default {
  name: "To-do-list",
  setup() {
    const maximize = ref(false)
    const writeTodo = ref('')
    let getUsername = ref(undefined)
    let todoList = reactive([])

    const updateText = (() => {
      if (writeTodo.value === '' || !writeTodo.value) alert('Write text')
      else writeTextItem(writeTodo.value)
      writeTodo.value = ''
    })

    const writeTextItem = ((text) => {
      todoList.push({ desc: text, edit: false, fixed: false })
      setTodoItem()
    })

    const setTodoItem = (() => {
      localStorage.setItem('west-todo-item', JSON.stringify(todoList))
    })

    const getTodoItem = onMounted(() => {
      const getItem = JSON.parse(localStorage.getItem('west-todo-item'))
      getUsername.value = localStorage.getItem('west-username')
      if (getItem) todoList.push(...getItem)
    })

    const deleteTodoItem = (() => {
      todoList.splice(0, todoList.length)
      localStorage.removeItem('west-todo-item')
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
      todoList.sort((a, b) => b.fixed - a.fixed)
      setTodoItem()
    })

    return {
      maximize,
      todoList,
      writeTodo,
      getTodoItem,
      getUsername,
      updateText,
      setTodoItem,
      delTodoItem,
      deleteTodoItem,
      editStartTodoItem,
      editDoneTodoItem,
      editCancelTodoItem,
      fixedTodoItem
    }
  },
  components: {
    'app-button': appButton
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/scss/todo.scss'
</style>