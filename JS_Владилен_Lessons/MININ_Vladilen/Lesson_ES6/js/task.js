// Параметры по умолчанию

// const createPost = (title, text = 'Скоро 2020', date = new Date().toLocaleDateString()) => {
//     return{title, text, date};
// }

// const post = createPost('Скоро новый год');
// console.log(post);


//// ОБЪЕКТЫ 

// const createCar = (name, model) => {
//     return {name, model};
// }

// const ford = createCar('Ford', 'Focus');

// console.log(ford);

// const yearField = 'year';
// const bmw = {
//     name: 'BMW',
//     ['model']: 'X6 Sport',
//     [yearField] : 2018,

//     logFields() {

//         // console.log(this.name, this.model, this.year)  // альтернатива записи ниже 

//         const {name, year, model} = this ;
//         console.log(name, model, year)
//     }
// }

// console.log(bmw);


// // const year = bmw.year ; // альтернатива 
// const {year} = bmw;
// console.log(year);


//////////////
// Операторы Reast и Spread

const form = document.querySelector('form');

form.addEventListener('submit', event => {

    event.preventDefault();

    const title = form.title.value;
    const text = form.text.value;
    const desc = form.description.value;

    // console.log(title, text, desc);

    // saveForm({title, text, desc}); // подходит для передачи данных конгда используется Spread оператор
    saveForm(title, text, desc); // подходит для передачи данных конгда используется Reast оператор

})


// Обычный способ обработки объекта с данными
// function saveForm(data) {
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         title: data.title,
//         text: data.text,
//         desc: data.desc
//     }

//     console.log('Form data:', formData);
// }

// оператор Spread - который работает с уже полученным объектом, гду с помощью данного оператора показывается результат всех полученных аргументов  | 
///////     ____ оператор Spread - служит для того чтобы разворачивать объекты
// function saveForm(data) {
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         ...data    // ...data - эти три точки и есть оператор Spread который говорит о том, что не выжно сколько параметров будет внутри, | данный оператор позволяет развернуть (показать) объекту все полученные аргументы
//     }

//     console.log('Form data:', formData);
// }
// _________ Rest оператор применяется для сбора всех параметров 
// оператор Rest - работает когда мы не знаем сколько параметров у нас попадет в функцию, применив который в аргументе функции, получит массив всех возможных параметров(значений)
// function saveForm(...args) {
//     // console.log('Args', args);
//     const [title, text, desc] = args; // Здесь произсодит деструктуризация массива по очереди, так же эти переменные нужно указать в объете formData, чтобы его наполнить данными свойствами

//     const formData = {
//         date: new Date().toLocaleDateString(),
//         title,
//         text,
//         desc
//     }

//     console.log('Form data:', formData);
// }



////////  СТРОКИ  

// без использования (``)-обратных кавычек (шаблонизаторы)
// const createLink = ({path, name}) => {
//     return '<a target ="_blank" href ="'+path+'">'+name+' </a>'
// }

// const ul = document.querySelector('ul');

// const google = '<li>'+createLink({path: 'https://google.com', name: 'Google'})+'</li>';
// const yahoo = '<li>'+createLink({path: 'https://yahoo.com', name: 'Yahoo'})+'</li>';

// ul.insertAdjacentHTML('afterbegin', google);
// ul.insertAdjacentHTML('afterbegin', yahoo);

// с использванием обратных кавычек

const createLink = ({path, name}) => {
    return `<a target ="_blank" href ="${path}">${name}</a>`
}

const ul = document.querySelector('ul');

const google = `<li>${createLink({path: 'https://google.com', name: 'Google'})}</li>`;
const yahoo = `<li>${createLink({path: 'https://yahoo.com', name: 'Yahoo'})}</li>`;

ul.insertAdjacentHTML('afterbegin', google);
ul.insertAdjacentHTML('afterbegin', yahoo);