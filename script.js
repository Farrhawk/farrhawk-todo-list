const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click' , addTodo);

function addTodo (){
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        todoItem.innerHTML =
        `<input type="checkbox" class="end-button">
        <span>${todoText}</span>
        <button class="delete-button">Hapus</button>`;

        const deleteButton = todoItem.querySelector('.delete-button');
        deleteButton.addEventListener('click' , deleteTodo);

        const endButton = todoItem.querySelector('.end-button');
        endButton.addEventListener('change' , function(){
            alert('Kamu Baru Saja Menyelesaikan ' + todoText);
        });
        endButton.addEventListener('change' , deleteTodo);
        
        todoList.appendChild(todoItem);
        todoInput.value = "";
    }
    
}



function deleteTodo () {
    const todoItem = this.parentElement;
    todoList.removeChild(todoItem);
};
