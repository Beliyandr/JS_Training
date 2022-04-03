const category = [
  {
    id: 1,
    name: "Task",
  },
  {
    id: 2,
    name: "Random Thought",
  },
  {
    id: 3,
    name: "Idea",
  },
];
const data = [
  {
    id: 1,
    name: "Add notes",
    createdAt: "20/03/2022",
    category: "Task",
    content: "My notes",
    dates: "",
    archived: false,
  },
  {
    id: 2,
    name: "Go home",
    createdAt: "9/04/2022",
    category: "Task",
    content: "I wont to go home",
    dates: "",
    archived: false,
  },
];
let modal = document.querySelector(".modal-dialog");

var myModal = document.getElementById("exampleModal");
var myInput = document.getElementById("name");
let indexTask = 0;
myModal.addEventListener("shown.bs.modal", function () {
  const selectOptions = document.getElementById("category").options;
  selectOptions.length = 0;
  category.forEach((item) => {
    selectOptions.add(new Option(item.name));
  });
  myInput.focus();
});

function loadData(data) {
  let tBody = document.getElementById("tbodyMain");
  // tBody.innerHTML = "";

  data.forEach((el) => {
    let row = document.createElement("tr");
    if (!el.archived) {
      // Добавил класс для TH
      row.innerHTML = `<th scope="row" class='trId'>${el.id}</th> 
      <td>${el.name}</td>
      <td>${el.createdAt}</td>
      <td>${el.category}</td>
      <td>${el.content}</td>
      <td>${el.dates}</td>
      <td>
        <button type="button" 
        class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal"        
        >
          <i class="bi bi-pen"></i>
        </button>
        <button type="button" class="btn btn-outline-secondary" onClick="archiveTask(${el.id})">
          <i class="bi bi-archive"></i>
        </button>
        <button type="button" class="btn btn-outline-secondary" onClick="deleteTask(${el.id})">
          <i class="bi bi-trash"></i>
        </button>
      </td>`;
    }
    tBody.appendChild(row);
  });
}

loadData(data);

function deleteTask(id) {
  const idx = data.findIndex((item) => item.id === id);
  data.splice(idx, 1);
  console.log(data);
  loadData(data);
}

function archiveTask(id) {
  const idx = data.findIndex((item) => item.id === id);
  data.map((item) => {
    if (item.id === id) {
      item.archived = true;
    }
  });
  loadData(data);
}

function editTask(task) {
  console.log(task);
  if (indexTask != 0) {
    const name = document.getElementById("name");
    const catedory = document.getElementById("category");
    const content = document.getElementById("content");
    const dates = document.getElementById("dates");
    name.value = "<kf f ";
  }
  indexTask = 0;
}

//**************************************** */

let tr = [...document.querySelectorAll("#tbodyMain>tr")];

tr.forEach((el) => {
  el.addEventListener("click", (e) => {
    // console.log(button);
    if (e.target.type === "button") {
      // сдесь укажи какая именно кнопка
      const name = document.getElementById("name");
      const catedory = document.getElementById("category");
      const content = document.getElementById("content");
      const dates = document.getElementById("dates");

      let elementId = el.querySelector(".trId").innerHTML;
      console.log(elementId);
      data.forEach((da) => {
        if (da.id == elementId) {
          name.value = da.name;

          content.value = da.content;

          console.log(elementId);
        } else {
        }
      });
    }
  });
});
