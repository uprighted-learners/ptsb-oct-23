const listInput = document.getElementById('listInput');
let currentInputValue;

listInput.addEventListener('keyup', (evt) => {
  currentInputValue = evt.target.value;
  console.log(currentInputValue);
});

const ulToDo = document.getElementById('ulToDo');
const addBtn = document.getElementById('add');
const removeBtn = document.getElementById('remove');

addBtn.addEventListener('click', (evt) => {
  console.log(evt);

  if (listInput.value === '') {
    listInput.className = 'error';
    return false;
  }

  listInput.classList.remove('error');

  const newItem = document.createElement('li');
  newItem.textContent = currentInputValue;
  ulToDo.append(newItem);
  listInput.value = '';
});

/*
    ! Challenge
    * We can add items BUT
    * Create Remove Item button. Once it's clicked, it will remove the last list item in our TODO list
*/

// ! Add your answer here
