const createTaskButton = document.querySelector('#criar-tarefa');
const taskInput = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const deleteListButton = document.querySelector('#apaga-tudo');
const finalizedButton = document.querySelector('#remover-finalizados');
const saveListButton = document.querySelector('#salvar-tarefas');

function recoverList() {
  const savedList = JSON.parse(localStorage.getItem('savedList'));
  console.log(savedList);

  for (const task in savedList) {
    const newTask = document.createElement('li');
    newTask.innerText = savedList[task][1];
    newTask.className = savedList[task][2];
    taskList.appendChild(newTask);
  }
}

window.onload = recoverList;

function createTask() {
  const textTask = taskInput.value;
  const newTask = document.createElement('li');

  newTask.innerText = textTask;
  newTask.className = 'task';
  taskList.appendChild(newTask);
  taskInput.value = '';
}

function taskSelection(task) {
  const allTasks = document.querySelectorAll('.task');
  const selectedTask = task.target;

  for (let index = 0; index < allTasks.length; index += 1) {
    allTasks[index].classList.remove('selected');
  }
  selectedTask.classList.add('selected');
}

function completedTask(task) {
  const completedItem = task.target.classList;
  const haveCompleted = completedItem.contains('completed');
  haveCompleted ? completedItem.remove('completed') : completedItem.add('completed');
}

function deleteList() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function deleteFinalizedTasks() {
  const finalizedTasksList = document.querySelectorAll('.completed');

  for (let index = 0; index < finalizedTasksList.length; index += 1) {
    taskList.removeChild(finalizedTasksList[index]);
  }
}

function saveList() {
  const allTasks = document.querySelectorAll('.task');
  const listToSave = [];
  let taskElement = [];

  for (let index = 0; index < allTasks.length; index += 1) {
    const taskText = allTasks[index].innerText;
    const taskClass = allTasks[index].className;
    taskElement = [index, taskText, taskClass];
    listToSave.push(taskElement);
  }
  console.log(listToSave);
  localStorage.setItem('savedList', JSON.stringify(listToSave));
}

createTaskButton.addEventListener('click', createTask);
taskList.addEventListener('click', taskSelection);
taskList.addEventListener('dblclick', completedTask);
deleteListButton.addEventListener('click', deleteList);
finalizedButton.addEventListener('click', deleteFinalizedTasks);
saveListButton.addEventListener('click', saveList);
