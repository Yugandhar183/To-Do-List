const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="deleteBtn">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

taskList.addEventListener('click', (event) => {
    if (event.target.matches('.deleteBtn')) {
        event.target.parentElement.remove();
    } else if (event.target.matches('input[type="checkbox"]')) {
        event.target.nextElementSibling.classList.toggle('completed');
    }
});


