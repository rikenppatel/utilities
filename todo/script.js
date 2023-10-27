document.addEventListener('DOMContentLoaded', loadTasks);
document.getElementById('taskList').addEventListener('click', function(e) {
  if (e.target.classList.contains('delete-btn')) {
    removeTask(e);
  }
});

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const newTask = taskInput.value.trim();

  if (newTask !== '') {
    const li = document.createElement('li');
    li.innerHTML = `${newTask} <button class="delete-btn" onclick="removeTask(event)">Delete</button>`;
    taskList.appendChild(li);
    saveTask(newTask);
    taskInput.value = '';
  }
}

function saveTask(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task) {
    const li = document.createElement('li');
    li.innerHTML = `${task} <button class="delete-btn" onclick="removeTask(event)">Delete</button>`;
    document.getElementById('taskList').appendChild(li);
  });
}

function removeTask(e) {
  e.stopPropagation();

  const li = e.target.parentElement;
  const taskText = li.firstChild.textContent.trim();

  if (confirm('Are you sure you want to remove this task?')) {
    removeTaskFromLocalStorage(taskText);
    li.remove();
  }
}

function removeTaskFromLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks = tasks.filter(t => t.trim() !== task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

