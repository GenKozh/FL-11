const rootNode = document.getElementById('root');

let todoItems = [{ isDone: false, id: 12345, description: '' }];

let saved = JSON.parse(localStorage.getItem('todoItems'));

if (saved) {
  todoItems = saved;
}

let homePage = `
<div>
    <h1 class="app-header">Simple TODO application</h1>
    <a class = "btn-link" href="#/add-new">
      <input type="submit" value="Add new task" class="app-input">
    </a>
    <div class="app-info">
    </div>
    </div>
    `;

let addNewPage = `
<div>
    <h1 class="app-header">Add new task</h1>
    <input type="text" placeholder="Add new task" class="input-text">
    <div class="btn-container">
    <a class = "btn-link" href="#/">
      <input type="submit" value="Cancel" class="cancel-btn btn">
    </a> 
      <input type="submit" value="Save changes" class="save-add-btn btn">
  </div>
</div>
`;

let modifyPage = `
<div>
  <h1 class="app-header">Modify item</h1>
  <input type="text" value="" class="input-text">
  <div class="btn-container">
    <a class = "btn-link" href="#/">
      <input type="submit" value="Cancel" class="cancel-btn btn">
    </a> 
      <input type="submit" value="Save changes" class="save-modify-btn btn">
  </div>
</div>
`;

const routes = {
  '/': homePage,
  '/add-new': addNewPage,
  '/modify/:item_id': modifyPage
};

let modifyId;
const minusOne = -1;

const router = () => {
  function parseRequestURL() {
    const numberTwo = 2;
    let url = location.hash.slice(1).toLowerCase() || '/';
    let r = url.split('/');

    let request = {
      resource: null,
      id: null
    };

    request.resource = r[1];
    request.id = r[numberTwo];

    return request;
  }

  let request = parseRequestURL();
  let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:item_id' : '');

  rootNode.innerHTML = routes[parsedURL];

  if (saveAddButton[0]) {
    saveAddButton[0].addEventListener('click', handleAddSave, false);
  }

  if (saveModifyButton[0]) {
    saveModifyButton[0].addEventListener('click', handleModifySave, false);
  }

  let stringContainer = '';
  let doneIcon = `<img src="./assets/img/done-s.png" alt="checked-checkbox" class = "checked-box">`;
  let todoIcon = `<img src="./assets/img/todo-s.png" alt="empty-checkbox" class = "empty-box">`;
  let appInfo = document.getElementsByClassName('app-info');

  if (!todoItems[1] && appInfo[0]) {
    appInfo[0].innerHTML = `<div>TODO is empty</div>`;
  } else if (appInfo[0]) {
    todoItems.sort(compare);

    for (let i = 1; i < todoItems.length; i++) {
      stringContainer = `
      <div class = 'string-container' data-id = '${todoItems[i].id}'>
      <div class="check-box">
      ${todoItems[i].isDone ? doneIcon : todoIcon}
      </div>
      <div class = 'task-title ${todoItems[i].isDone ? 'checked' : ''}'>${todoItems[i].description}</div>
      <img src="./assets/img/remove-s.jpg" alt="remove icon" class = "remove">
      </div>
      `;
      appInfo[0].insertAdjacentHTML('beforeend', stringContainer);
    }
  }

  let remove = document.getElementsByClassName('remove');
  let checkBox = document.getElementsByClassName('check-box');
  let inputTask = document.getElementsByClassName('task-title');

  [].forEach.call(remove, item => {
    item.addEventListener('click', handleDelete, false);
  });

  [].forEach.call(checkBox, item => {
    item.addEventListener('click', handleCheck, false);
  });

  [].forEach.call(inputTask, item => {
    item.addEventListener('click', handleChange, false);
  });
};

function compare(a, b) {
  const minusOne = -1;
  if (a.id < b.id) {
    return minusOne;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
}

function handleDelete(e) {
  let listItem = e.target.parentElement;

  for (let i = 0; i < todoItems.length; i++) {
    let obj = todoItems[i];

    if (obj.id === parseInt(listItem.getAttribute('data-id'))) {
      todoItems.splice(i, 1);
      listItem.remove();
      i--;
    }
  }
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

function handleCheck(e) {
  let listItem = e.target.parentElement.parentElement;
  let magicNumber1 = 20000;
  let magicNumber2 = 10000;
  for (let i = 0; i < todoItems.length; i++) {
    let obj = todoItems[i];

    if (obj.id === parseInt(listItem.getAttribute('data-id'))) {
      obj.isDone ? obj.isDone = false : obj.isDone = true;
      if (obj.isDone) {
        obj.id = parseInt(obj.id) + magicNumber1;
      } else {
        obj.id = parseInt(obj.id) - magicNumber2;
      }
    }
  }
  router();
}

function handleAddSave() {
  const notFound = -1;
  const twoSec = 2000;

  if (inputField[0].value) {
    if (
      todoItems
        .map(function(e) {
          return e.description;
        })
        .indexOf(inputField[0].value) === notFound
    ) {
      let id_start = todoItems[todoItems.length - 1].id;
      let newTask = { isDone: false, id: parseInt(id_start) + 1, description: inputField[0].value };

      todoItems.push(newTask);

      localStorage.setItem('todoItems', JSON.stringify(todoItems));
      location.hash = '#/';
    } else {
      if (navigator.appVersion.indexOf('Chrome') !== minusOne) {
        dangerAlertWindow.classList.add('danger-alert-right');
      }
      rootNode.appendChild(dangerAlertWindow);
      setTimeout(() => {
        rootNode.lastElementChild.remove();
      }, twoSec);
    }
  }
}

function handleModifySave() {
  const notFound = -1;
  const twoSec = 2000;

  if (inputField[0].value) {
    if (
      todoItems
        .map(function(e) {
          return e.description;
        })
        .indexOf(inputField[0].value) === notFound
    ) {
      for (let i = 0; i < todoItems.length; i++) {
        let obj = todoItems[i];
        if (obj.id === modifyId) {
          obj.description = inputField[0].value;
        }
      }
      localStorage.setItem('todoItems', JSON.stringify(todoItems));
      location.hash = '#/';
    } else {
      if (navigator.appVersion.indexOf('Chrome') !== minusOne) {
        dangerAlertWindow.classList.add('danger-alert-right');
      }
      let dangerAlertString2 = `You can't modify done item`;
      dangerAlertWindow.innerHTML = `<b>Danger!${nbspString.join('')}&times</b><br><br>${dangerAlertString2}`;
      rootNode.appendChild(dangerAlertWindow);
      setTimeout(() => {
        rootNode.lastElementChild.remove();
      }, twoSec);
    }
  }
}

function handleChange(e) {
  let listItem = e.target.parentElement;

  modifyId = parseInt(listItem.getAttribute('data-id'));
  location.hash = `#/modify/:${modifyId}`;
}

let saveAddButton = document.getElementsByClassName('save-add-btn');
let saveModifyButton = document.getElementsByClassName('save-modify-btn');
let inputField = document.getElementsByClassName('input-text');

if (inputField[0]) {
  inputField[0].addEventListener('input', handleChange, false);
}

let dangerAlertWindow = document.createElement('div');
dangerAlertWindow.classList.add('danger-alert');
let nbspString = [];
const lineLength = 40;
for (let i = 0; i < lineLength; i++) {
  nbspString.push('&nbsp');
}

let dangerAlertString = `You can't add already existing item`;
dangerAlertWindow.innerHTML = `<b>Danger!${nbspString.join('')}&times</b><br><br>${dangerAlertString}`;

function clickEffect(e) {
  let d = document.createElement('div');
  d.className = 'clickEffect';
  d.style.top = e.clientY + 'px';
  d.style.left = e.clientX + 'px';
  document.body.appendChild(d);
  d.addEventListener(
    'animationend',
    function() {
      d.parentElement.removeChild(d);
    }
  );
}

document.addEventListener('click', clickEffect);
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
