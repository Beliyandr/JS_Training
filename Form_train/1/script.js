const createBtn = document.querySelector('.content__create-task-btn');
let tasksBlock = document.querySelector('.content__tasks'); 
let currTasksBlock = document.querySelector('.current__tasks');
let searchTagInput = document.querySelector('.search-input');
let searchTagBtn = document.querySelector('.search-btn');
let errorTag = document.querySelector('.error-tag');
let tasks = [];
let index = 0;
let navTask = document.querySelectorAll('.content__task');

let confirmTask = document.getElementsByClassName('done');
let input = document.getElementsByClassName('task__name');
let taskBody = document.getElementsByClassName('task__input');
let currTaskBlock = document.getElementsByClassName('current-task');
let edit = document.getElementsByClassName('edit');
let sidebarTask = document.getElementsByClassName('content__task');
let makeToDo = document.getElementsByClassName('make-to-do');

currTasksBlock.addEventListener('click', () => {
   for(let i = 0; i < input.length; i++) {
      input[i].addEventListener('keyup', () => editTask(input[i], taskBody[i], i));
      taskBody[i].addEventListener('keyup', () => editTask(input[i], taskBody[i], i));
   }
})

createBtn.addEventListener('click' , createTask);
tasksBlock.addEventListener('click', (e) => {
   checkFillLastElement();
   console.log(e.target.getAttribute("data-index"));
   for (let i = 0; i < currTaskBlock.length; i++) {
      currTaskBlock[i].style.display = 'none';
      if (e.target.getAttribute("data-index") === currTaskBlock[i].getAttribute('data-index')) {
         currTaskBlock[i].style.display = 'block';
         console.log(currTaskBlock[i].getAttribute('data-index'));
         setTaskDescription(tasks[i], input[i], taskBody[i]);
      }
   }
})



searchTagBtn.addEventListener('click', searchByTag);

function searchByTag() {
   checkFillLastElement();
   let wordsArr = [];
   for(let task of tasks) {
      wordsArr.push([task.title.split(' '), task.body.split(' ')]);
   }
   console.log(wordsArr);


   // let start = 0;
   // let end = 0;
   let newArr = []
   for(let i = 0; i < wordsArr.length; i++) {
      newArr.push(wordsArr[i].reduce((acc, val) => acc.concat(val), []));// [1, 2, 3, 4]

   }
   console.log(newArr)

   if(searchTagInput.value !== '') {
      errorTag.style.display = 'none';
      for (let i = 0; i < newArr.length; i++) {
         currTaskBlock[i].style.display = 'none';
         for (let k = 0; k < newArr[i].length; k++) {
            if (newArr[i][k] === `#${searchTagInput.value}`) {
               currTaskBlock[i].style.display = 'block';
               setTaskDescription(tasks[i], input[i], taskBody[i]);
               // console.log(wordsArr[i][k]);
               console.log("Yes");

            }
         }
      }
   } else {
         errorTag.style.display = 'block';
      }
   console.log(wordsArr)
}



// Артем кынь

class Task {
   constructor(title, body) {
      this.title = title;
      this.body = body;
   }
}

function createTask() {
   createBtn.setAttribute('disabled', 'disabled');
   let task = `<section class="current-task" data-index="${index}">
   <div class="current-task__header">
      <div class="current-task__name">
         <input type="text" class="task__name input" placeholder="Title">
      </div>
      <div class="current-task__edit">
         <div class="done">
         </div>
         <div class="edit">
         </div>
         <div class="make-to-do">
         </div>
      </div>
   </div>
   
   <div class="current-task__task">
      <textarea name="task-body" class="task__input input" placeholder="Task"></textarea>
   </div>
</section>`;

   currTasksBlock.innerHTML += task;
   changeDisplayCondition(edit[index]);

   console.log(currTaskBlock);
   hidePrevTasks(currTaskBlock, index);
   confirmTask[index].addEventListener('click', () => {
      input[index].value.trim();
      if(input[index].value === '') {
         return;
      }
      input[index].blur();
      taskBody[index].blur();
      saveTaskBody(input[index], taskBody[index], index);
      changeDisplayCondition(edit[index]);
      changeDisplayCondition(confirmTask[index]);
      ++index;
   })
}

function hidePrevTasks(task, index) {
   if(index > 0) {
      for(let i = 0; i < index; i++) {
         task[i].style.display = 'none';
      }
   }
   console.log(index);
}

function changeDisplayCondition(block) {
   if(block.style.display === 'none') {
      block.style.display = 'block';
   } else {
      block.style.display = 'none';
   }
}

function saveTaskBody(title, body, index) {
   createBtn.removeAttribute('disabled');

   let task = new Task(title.value, body.value);
   tasks.push(task);
   let taskBlock = `<div class="content__task" data-index="${index}">
      ${task.title}
   </div>`;

   tasksBlock.innerHTML += taskBlock;
   title.classList.add('edit-input');
   body.classList.add('edit-body');
   console.log(tasks);
   console.log(navTask);
   console.log(currTasksBlock.children)
}

function setTaskDescription(task, taskTitle, taskBody) {
   taskTitle.value = task.title;
   taskBody.value = task.body;
}

function editTask(title, body, index) {
   if(title.classList.contains('edit-input')) {
      tasks[index].title = title.value;
      tasks[index].body = body.value;
      sidebarTask[index].innerHTML = tasks[index].title;
      // console.log(tasks[index]);
   }
}

function checkFillLastElement() {
   if (confirmTask[confirmTask.length - 1].style.display === 'block') {
      console.log("Yes")
      createBtn.removeAttribute('disabled');
      currTaskBlock[currTaskBlock.length - 1].remove();
   }
}