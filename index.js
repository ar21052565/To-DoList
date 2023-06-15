let todoArray = [{ name: 'Ankit', dueDate: '2200-33-44', dueTime: '14:33' }];
function display() {
    let todo = '';
    for (let i = 0; i < todoArray.length; i++) {
        const todoObject = todoArray[i];
        const { name, dueDate, dueTime } = todoObject;
        const html = `
        <div>${i + 1})</div>
        <div>${name}</div>
        <div>${dueDate}</div>
        <div>${dueTime}</div>
        <button class="delete"
            onclick=" 
            todoArray.splice(${i},1)
            display();">Delete
        </button>
        `;
        todo += html;
    }
    document.querySelector('.ToDoList').innerHTML = todo;
}

function addTodo() {
    let inputElement = document.querySelector('.Input');
    let name = inputElement.value;
    let inputDate = document.querySelector('.js-due-date');
    let dueDate = inputDate.value;
    let inputTime = document.querySelector('.js-due-time');
    let dueTime = inputTime.value;
    todoArray.push({ name, dueDate, dueTime });
    display();
    inputElement.value = '';
    inputDate.value = '';
    inputTime.value = '';
}
