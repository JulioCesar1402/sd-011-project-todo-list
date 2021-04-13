// Cria as variáveis recorrentes
const taskList = document.getElementById('lista-tarefas');
const btnsContainer = document.getElementById('btns-container');
const createTask = document.getElementById('criar-tarefa');
const savedListStorage = localStorage.getItem('savedListStorage');

// Cria um novo item da lista OL e limpa o campo de input
function createNewTask() {
  createTask.addEventListener('click', () => {
    const newTask = document.getElementById('texto-tarefa');
    const newLi = document.createElement('li');
    newLi.className = 'item';
    taskList.appendChild(newLi);
    newLi.innerText = newTask.value;
    newTask.value = '';
    newTask.focus();
  });
}
createNewTask();

// Ao clicar no item da lista, o último item selecionado perde a classe selected, e ele passa a ter essa classe
function taskSelector() {
  taskList.addEventListener('click', (event) => {
    const selectedItem = event.target;
    const previouSelectedItem = document.querySelector('.selected');
    if (previouSelectedItem) {
      previouSelectedItem.classList.remove('selected');
    }
    if (selectedItem.classList.contains('item')) {
      selectedItem.classList.add('selected');
    }
  });
}
taskSelector();

// Atribui a classe completed ao item que for clicado duas vezes
function riskItem() {
  taskList.addEventListener('dblclick', (event) => {
    const selectedItem = event.target;
    if (selectedItem.classList.contains('completed')) {
      selectedItem.classList.remove('completed');
    } else {
      selectedItem.classList.add('completed');
    }
  });
}
riskItem();

// Ao clicar no botão, apaga toda a lista, e apaga o local Storage
function clearTasks() {
  const clearButton = document.getElementById('apaga-tudo');
  clearButton.addEventListener('click', () => {
    taskList.innerHTML = '';
    localStorage.clear();
  });
}
clearTasks();

// Ao clicar no botão, apaga os itens marcados
function removeCompletedTasks() {
  const remTasksButton = document.getElementById('remover-finalizados');
  remTasksButton.addEventListener('click', () => {
    const selectedTask = document.getElementsByClassName('completed').length;
    for (let index = 0; index < selectedTask; index += 1) {
      taskList.removeChild(document.querySelector('.completed'));
    }
  });
}
removeCompletedTasks();

// Ao clicar no botão, salva as tarefas
function saveTasks() {
  const saveButton = document.getElementById('salvar-tarefas');
  saveButton.addEventListener('click', () => {
    localStorage.clear();
    localStorage.savedListStorage = taskList.innerHTML; 
    alert('Sua lista foi salva!');
  });
}
saveTasks();

// Remove as classes selected e completed adicionadas aos itens
function removeClasses() {
  const itemSelected = document.querySelector('.selected');
  if (itemSelected) itemSelected.classList.remove('selected');
  const itemsCompleted = document.querySelectorAll('.completed');
  if (itemsCompleted.length > 0) {
    for (let index = 0; index < itemsCompleted.length; index += 1) {
      itemsCompleted[index].classList.remove('completed');
    }
  }
}

// Restaura a lista ao carregar o site
function restoreTasks() {
  taskList.innerHTML = savedListStorage;
  removeClasses();
}

// Lista de funções que serão carregadas ao abrir o site
function loadsite() {
  restoreTasks();
  if (savedListStorage) alert('Lista carregada com sucesso!');
}
window.onload = loadsite;
