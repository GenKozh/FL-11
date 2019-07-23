let rootNode = document.getElementById('root');

function App() {
  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
  }

  function handleDragEnter(e) {
    e.target.classList.add('over');
  }

  function handleDragLeave(e) {
    e.target.classList.remove('over');
  }

  let listItems;
  let counter = 0;
  const listMaxValue = 10;
  const classNames = {
    0: 'one',
    1: 'two',
    2: 'three',
    3: 'four',
    4: 'five',
    5: 'six',
    6: 'seven',
    7: 'eight',
    8: 'nine',
    9: 'ten'
  };

  function handleClick() {
    if (inputField[0].value) {
      if (counter < listMaxValue) {
        containerNode[0].insertAdjacentHTML(
          'beforeend',
          listItemsTasks[0].outerHTML
        );

        listItems = document.querySelectorAll('.list-item');

        listItemsTasks[counter + 1].classList.remove('zero');
        listItemsTasks[counter + 1].classList.remove('hidden');
        listItemsTasks[counter + 1].classList.add(classNames[counter]);

        counter++;
        let spanElem =
          listItemsTasks[0].firstElementChild.nextElementSibling
            .nextElementSibling;
        spanElem.innerHTML = '';
        inputField[0].value = '';
      } else {
        addButton[0].classList.remove('active');
        notification[0].classList.remove('hidden');
        inputField[0].disabled = true;
      }

      [].forEach.call(listItems, function(item) {
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragenter', handleDragEnter, false);
        item.addEventListener('dragover', handleDragOver, false);
        item.addEventListener('dragleave', handleDragLeave, false);
        item.addEventListener('drop', handleDrop, false);
        item.addEventListener('dragend', handleDragEnd, false);
      });

      [].forEach.call(checkIcons, function(item) {
        item.addEventListener('click', handleCheckBox, false);
      });
      [].forEach.call(deleteIcons, function(item) {
        item.addEventListener('click', handleDelete, false);
      });
      [].forEach.call(editIcons, function(item) {
        item.addEventListener('click', handleEdit, false);
      });
      [].forEach.call(saveIcons, function(item) {
        item.addEventListener('click', handleSave, false);
      });
    }
  }

  function handleFocus() {
    if (counter < listMaxValue) {
      addButton[0].classList.add('active');
    }
  }
  function handleChange(e) {
    let spanElem =
      listItemsTasks[0].firstElementChild.nextElementSibling.nextElementSibling;
    spanElem.innerHTML = e.target.value;
  }

  function handleBlur() {
    addButton[0].classList.remove('active');
  }

  function handleDragEnd() {
    [].forEach.call(listItems, function(item) {
      item.classList.remove('over');
    });
    [].forEach.call(deleteIcons, function(item) {
      item.addEventListener('click', handleDelete, false);
    });
    [].forEach.call(checkIcons, function(item) {
      item.addEventListener('click', handleCheckBox, false);
    });
    [].forEach.call(editIcons, function(item) {
      item.addEventListener('click', handleEdit, false);
    });
    [].forEach.call(saveIcons, function(item) {
      item.addEventListener('click', handleSave, false);
    });
  }

  let dragSrcEl = null;

  function handleDragStart(e) {
    dragSrcEl = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    return false;
  }

  function handleCheckBox() {
    this.classList.add('hidden');
    let doneIcon = this.parentElement.nextElementSibling.firstElementChild;
    doneIcon.classList.remove('hidden');
  }

  function handleDelete(e) {
    let listItem = e.target.parentElement.parentElement;
    listItem.remove();
    listItems = document.querySelectorAll('.list-item');
    counter--;
    if (counter < listMaxValue) {
      notification[0].classList.add('hidden');
      inputField[0].disabled = false;
    }
  }

  function handleEdit(e) {
    let smallInput = e.target.parentElement.previousElementSibling;
    let saveIconParent = e.target.parentElement.nextElementSibling;
    smallInput.classList.remove('hidden');
    smallInput.previousElementSibling.classList.add('hidden');
    smallInput.value = smallInput.previousElementSibling.innerHTML;
    saveIconParent.firstElementChild.classList.remove('hidden');
    e.target.classList.add('hidden');
  }

  function handleSave(e) {
    let saveIcon = e.target;
    let inputElem =
      e.target.parentElement.previousElementSibling.previousElementSibling;
    let editIcon =
      e.target.parentElement.previousElementSibling.firstElementChild;
    let spanElem =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .previousElementSibling;
    inputElem.classList.add('hidden');
    saveIcon.classList.add('hidden');
    editIcon.classList.remove('hidden');
    spanElem.classList.remove('hidden');
    spanElem.innerHTML = inputElem.value;
  }

  let addButton = document.getElementsByClassName('big-icon');
  addButton[0].addEventListener('click', handleClick, false);

  let inputField = document.getElementsByClassName('big-input');
  inputField[0].addEventListener('focus', handleFocus, false);
  inputField[0].addEventListener('blur', handleBlur, false);
  inputField[0].addEventListener('input', handleChange, false);

  let listItemsTasks = document.getElementsByClassName('list-item');

  let containerNode = document.getElementsByClassName('container');
  let notification = document.getElementsByClassName('notification');
  let checkIcons = document.getElementsByClassName('check-icon');
  let deleteIcons = document.getElementsByClassName('delete-icon');
  let editIcons = document.getElementsByClassName('edit-icon');
  let saveIcons = document.getElementsByClassName('save-icon');
}

let app = new App();
