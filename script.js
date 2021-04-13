const section1 = document.getElementById('section-1');


function createInput(){
  const inputUser = document.createElement('input');
  inputUser.setAttribute('type','text');
  inputUser.setAttribute('value','');
  inputUser.id = 'texto-tarefa';

  section1.appendChild(inputUser);

}
createInput();

function buttonCreateItem(nameButton){
  let button = document.createElement('button');
  button.id = 'criar-tarefa';
  button.innerText = nameButton;

  section1.appendChild(button);

  button.addEventListener('click',function(){
    let inputUser = document.getElementById('texto-tarefa');
    let list = document.createElement('li');
    list.className = 'list-item';
    list.innerText = inputUser.value;
        
    let ol = document.getElementById('lista-tarefas');
    ol.appendChild(list);

    inputUser.value = '';     
  })
}
buttonCreateItem('Adicionar');

function createList(){
  let ol = document.createElement('ol');
  ol.id='lista-tarefas';
  
  section1.appendChild(ol);
}
createList();

function select(){
  
  let boxItems = document.getElementById('lista-tarefas');
  
  boxItems.addEventListener('click',function(event){
    let listItems = document.querySelectorAll('.list-item');

    for(let index = 0; index < listItems.length; index += 1) {
      listItems[index].classList.remove('select');
    } event.target.classList.add('select');
  })
}
select();

function finished(){
  
  let boxItems = document.getElementById('lista-tarefas');

    console.log(boxItems);

  boxItems.addEventListener('dblclick', function(event){

    console.log('teste');

      console.log(event.target);

       if(event.target.classList.contains('completed') === true) {
        event.target.classList.remove('completed'); 
      } else {
        event.target.classList.add('completed');
      }
  })
}
finished();

function buttonClear(clearName){

  let button = document.createElement('button');
  button.id = 'apaga-tudo';
  button.innerText = clearName;
  section1.appendChild(button);

  button.addEventListener('click',function(){
 
    let items = document.querySelectorAll('.list-item');

    for(let index = 0; index < items.length; index += 1) {
      items[index].parentNode.removeChild(items[index]);
    }
  })
}

buttonClear('Limpar Lista');

function buttonFinished(finishedName){
  let buttonF = document.createElement('button');
  buttonF.id = 'remover-finalizados';
  buttonF.innerText = finishedName;
  section1.appendChild(buttonF);

  buttonF.addEventListener('click',function(){
    let finishedItems = document.querySelectorAll('.completed');
    for(let index = 0; index < finishedItems.length; index +=1){
      finishedItems[index].parentNode.removeChild(finishedItems[index]);
    }
  })
}
buttonFinished('Remover Finalizados');


