const tarefaInput = document.getElementById('texto-tarefa');
const botaoAdd = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const taskList = document.getElementsByClassName('item');

function criarTarefa() {
  if (tarefaInput.value === '') {
    return false;
  }
  // Criando um novo elemento
  const newItem = document.createElement('li');
  // TENTANDO ADD CLASSE
  newItem.classList.add('item');
  // adicionando o valor do input ao elemento criando
  newItem.textContent = tarefaInput.value;
  // limpando input
  tarefaInput.value = '';
  //  listaTarefas é pai de newItem
  listaTarefas.appendChild(newItem);
}
botaoAdd.addEventListener('click', criarTarefa);
/*
function isSelected(e) {
  for (let index = 0; index < taskList.length; index += 1) {
    taskList[index].classList = 'noSelected';
    e.target.classList = 'selected';
    const taskSelected = document.querySelector('.selected');
    taskSelected.style.backgroundColor = 'rgb(128, 128, 128)';
    if (taskSelected[index].className === 'noSelected') {
      taskSelected[index].style.backgroundColor = 'white';
    }
  }
}

taskList.addEventListener('click', isSelected);
*/