const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')


const notes = [
  {
  title: 'записать блок',
  completed: false,
},
  {
  title: "теория объектов",
  completed: true,
} ]


function render() {
  listElement.innerHTML = '';
  if (notes.length === 0) {
    listElement.innerHTML = 'Нет Элементов';
   }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i)
  )
   }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return
  }
  const newNote = {
      title: inputElement.value,
      completed: false,

  }

  // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(newNote))
  notes.push(newNote)
  render();
  inputElement.value = '';
 }

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = +event.target.dataset.index;
    const type = event.target.dataset.type;

    if (type === 'toggle') {
      notes[index].completed = !notes[index].completed;
    } else if (type === 'remove') {
      notes.splice(index, 1);
    }
  }
  render();
 }


function getNoteTemplate(note,i) {
  return `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
    <span>
      <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index='${i}' data-type='toggle'>&check;</span>
      <span class="btn btn-small btn-danger" data-index='${i}' data-type='remove'>&times;</span>
    </span>
  </li>`
}
