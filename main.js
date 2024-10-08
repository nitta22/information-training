//main.js
const todoList = document.getElementById('todoList');
window.addTodo = function(){
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    if (todoText != ""){
        addTodoToList(todoText);
        todoInput.value = '';
    }
    else{
        alert("ToDoを入力してください");
    }
};
window.deleteTodo = function(){
    document.querySelector("li").remove()
    }
function addTodoToList(todoText){
    const li = document.createElement('li');
    li.textContent = todoText;
    todoList.appendChild(li);
}

