const input = document.getElementById('todo_input');
const addBtn = document.getElementById('adding_btn');
const todoList = document.getElementById('todo_list');

function addTask() {
    const taskValue = input.value.trim();
    
    if (taskValue === "") return;

    const li = document.createElement('li');
    li.className = 'todo_item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        span.classList.toggle('completed');
    });

    const span = document.createElement('span');
    span.className = 'todo_text';
    span.textContent = taskValue;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🗑';
    deleteBtn.className = 'deleting_btn';
    deleteBtn.onclick = () => {
        todoList.removeChild(li);
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);

    input.value = "";
}



addBtn.addEventListener('click', addTask);


input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') 
        addTask();
});


const completed = document.getElementById('completed');
const not_completed = document.getElementById('not_completed');
const all = document.getElementById('show_all');

function showCompleted(){
    const items = todoList.querySelectorAll('.todo_item');

    items.forEach(item => {
        const checkbox = item.querySelector('input');

        if (checkbox.checked) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function showNotCompleted(){
    const items = todoList.querySelectorAll('.todo_item');

    items.forEach(item => {
        const checkbox = item.querySelector('input');

        if (!checkbox.checked) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function showAll(){
    const items = todoList.querySelectorAll('.todo_item');

    items.forEach(item => {
        item.style.display = 'flex';
    })
}

completed.addEventListener('click', showCompleted);
not_completed.addEventListener('click', showNotCompleted);
all.addEventListener('click', showAll);
