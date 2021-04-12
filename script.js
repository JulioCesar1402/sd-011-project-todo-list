const createTaskButton = document.querySelector('#criar-tarefa');

function addTaskOnList() {
  const textFromInputArea = document.getElementsByTagName('input')[0].value;
  const toDoList = document.createElement('li');
  const toDoOrderedList = document.querySelector('#lista-tarefas');
  toDoList.className = 'tasks';
  toDoList.innerHTML = textFromInputArea;
  toDoOrderedList.appendChild(toDoList);
}

function clearInputField() {
  document.getElementsByTagName('input')[0].value = '';
}

createTaskButton.addEventListener('click', addTaskOnList);
createTaskButton.addEventListener('click', clearInputField);

const orderedList = document.querySelector('#lista-tarefas');

function changeListItemBackgroundColor(evento) {
  const tasklist = document.querySelectorAll('.tasks');
  for (let index = 0; index < tasklist.length; index += 1) {
    if (document.querySelectorAll('.tasks')[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      tasklist[index].style.backgroundColor = 'transparent';
    }
  }
  evento.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

orderedList.addEventListener('click', changeListItemBackgroundColor);

function crossOutCompletedTask(event) {
  const isCompleted = event.target.classList.contains('completed');
  if (isCompleted) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

orderedList.addEventListener('dblclick', crossOutCompletedTask);

const eraseButton = document.querySelector('#apaga-tudo');

function removeEverything() {
  const orderedList = document.querySelector('#lista-tarefas');
  while (orderedList.firstChild) {
    orderedList.removeChild(orderedList.firstChild);
  }
}

eraseButton.addEventListener('click', removeEverything);

const removeCompletedButton = document.querySelector('#remover-finalizados');

function removeCompleted() {

}

removeCompletedButton.addEventListener('click', removeCompleted);
