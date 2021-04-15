const addButton = document.getElementById('criar-tarefa');
const delListButton = document.getElementById('apaga-tudo');
const inputText = document.getElementById('texto-tarefa');
const orderedList = document.getElementById('lista-tarefas');

addButton.addEventListener('click', () => {
  if ((inputText.value.length) === 0) {
    alert('Tarefa em branco!');
  } else {
    const li = document.createElement('li');
    li.setAttribute('id', 'itemList');
    li.innerHTML += inputText.value;
    orderedList.appendChild(li);
    inputText.value = null;
  }
});

delListButton.addEventListener('click', () => {
  let itensList = document.querySelectorAll('#itemList');
  for (let i = 0; i < itensList.length; i += 1) {
    itensList[i].parentNode.removeChild(itensList[i]);
  }
});

function removeClass(arrayList) {
  for (let i = 0; i < arrayList.length; i += 1) {
    if (arrayList[i].classList.contains('selected')) {
      arrayList[i].classList.remove('selected');
    }
  }
}

function removeBackgroundcolor() {
  const arrayItensList = [];
  const itemList = document.querySelectorAll('ol li.selected');
  for (let i = 0; i < itemList.length; i += 1) {
    itemList[i].style.backgroundColor = 'rgb(256, 256, 256)';
    arrayItensList.push(itemList[i]);
    removeClass(arrayItensList);
  }
}

function greyBackground(event) {
  const mouseEvent = event;
  if (mouseEvent.target.classList.contains('selected')) {
    mouseEvent.target.classList.remove('selected');
  } else {
    mouseEvent.target.classList.add('selected');
  }
  mouseEvent.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function scratchItem(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function actionList() {
  const itemList = document.querySelectorAll('ol');
  for (let i = 0; i < itemList.length; i += 1) {
    itemList[i].addEventListener('click', removeBackgroundcolor);
    itemList[i].addEventListener('click', greyBackground);
    itemList[i].addEventListener('dblclick', scratchItem);
  }
}

actionList();
