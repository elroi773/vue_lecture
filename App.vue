<template>
  <div id="app">
    <div class="todo">
      <div class="todo_title">
        <h1 class="todo_text">Todo List</h1>
        <ul class="todo_tab">
          <li class="todo_tab--active">전체</li>
          <li>완료</li>
        </ul>
      </div>
      <div class="todo_list">
        <div class="todo_item">
          <input type="checkbox" id = "chk">
          <label for="chk" class="todo_checkgox-label"></label>
          <span class="todo_item-text">아침 먹기</span>
          <span class="material-symbols-outlined todo_delete-icon">delete</span>
        </div>
        <div class="todo_item--no" style="display: none;">
          <p>할 일이 없습니다</p>
        </div>
      </div>
      <div class="todo_input">
        <input type="text" class="todo_input-text" placeholder="할일을 입력하세요">
        <button class = "todo_input-btn">등록</button>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
