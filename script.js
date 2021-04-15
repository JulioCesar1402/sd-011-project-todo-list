const createTask = document.getElementById('criar-tarefa');
const listTask = document.getElementById('lista-tarefas');
const textTask = document.getElementById('texto-tarefa');
// const createListItem = document.createElement('li');

//Requisitos 05 e 06
createTask.addEventListener('click', () => {
  const createListItem = document.createElement('li');
  createListItem.innerText = textTask.value;
  listTask.appendChild(createListItem);
  textTask.value = '';
});

//Requisito 07 e 08 
const OL = document.getElementById('lista-tarefas');
OL.addEventListener('click', (event) => {
  const selectedLI = document.getElementsByClassName('selected');
  if (selectedLI.length !== 0){
    console.log(selectedLI);
    selectedLI[0].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });

//Requisito 10
function deleteSelectedItem () {
  listTask.addEventListener('dblclick', (event) => {
    const eventTarget = event.target;
    console.log(eventTarget);
    const riskedItem = document.querySelectorAll('.completed');
    if (eventTarget.classList.contains('completed')) {
      eventTarget.classList.remove('completed');
    }
      eventTarget.classList.add('completed');
  })
}
deleteSelectedItem();