// let message = 'Hello word!';

// let helloMessage = "Hello again";

// console.log(message);


// let person = {
//     name: 'Василий',
//     year: 1990,
//     car: {
//         year: 2010,
//         model: 'Ford'
//     },

//     calculateAge: function() {
//         var age = 2018 - this.year ;
//         console.log(age);

//         this.age = 2018 - this.year ;

//     }
// }


// console.log(person);
// console.log(person.name);
// person.year = 1993;
// console.log(person['year']);
// console.log(person);

// person.calculateAge();

// var numbers = [1, 2, 3, 4, 5,6, 7, 8, 9];

// for(var i = 0; i < numbers.length; i++ ) {
//     if (numbers[i] % 2 === 0) {
//         continue;
//     }
//     console.log('нечетные:', numbers[i]);
// }

// for(var i = 0; i < numbers.length; i++ ) {
//     if (numbers[i] % 2 !== 0) {
//         continue;
//     }
//     console.log('четные:', numbers[i]);
// }

// numbers.push('String');
// numbers.push('new line');
// numbers.push('Hello');
// console.log(numbers);

// for(var i = 0; i < numbers.length; i++ ) {
//     if (typeof numbers[i] === 'string') {
//         continue;
//     }
//     console.log('только числа', numbers[i]);
// }

// Работа с классами//////////////////////////////////////////////////////

// let box1 = document.querySelector('#box1');
// let box2 = document.querySelector('#box2');

// box1.classList.add('red');
// box2.classList.add('green');

// box2.classList.toggle('green');



/**/

// let button = document.querySelector('button'),
//     h1 = document.querySelector('h1'),
//     input = document.querySelector('input');
// function buttonHandler() {
//  h1.textContent = input.value;
// }

// h1.addEventListener('mouseenter' , function(){
//   this.style.color = 'red';
//   this.style.backgroundColor = 'black';
// });


// h1.addEventListener('mouseleave' , function(){
//   this.style.color = 'black';
//   this.style.backgroundColor = 'transparent';
// });

// button.addEventListener('click', buttonHandler);



/* всплытие и погружение *//////////////////////////////////////////////////////

// var divs = document.querySelectorAll('div');

// for (var i = 0 ; i < divs.length; i++){
//   divs[i].addEventListener('click', function() {
//     console.log(this.getAttribute('id'))
//   }, true);
// }


/*  объект события *//////////////////////////////////////////////////////////

// var divs = document.querySelectorAll('div'),
//     link = document.querySelector('a');

// for (var i = 0 ; i < divs.length; i++){
//   divs[i].addEventListener('click', function(event) {
//   event.stopPropagation();
//     console.log(this.getAttribute('id'));
//   });
// }

/*  Делегирование событий */ /////////////////////////////////////////////////////////

// var p = document.querySelectorAll('p');

// for (var i = 0; i < p.length; i++){
//   p[i].addEventListener('click', function(event) {
//     event.target.style.color = "blue";
//   })
// }

/* MATH    */ ////////////////////////////////////////////////////////////////////////
/*
var number = 2.4;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.E);

*/
/*  JSON   */ ////////////////////////////////////////////////////////////////////////////////
/*
var person = {
    name: 'Max',
    age: 19,
    car: {
        model: "Ford"
    },
    job: "Frontend",
    friends: ['Elena','Igor']
};

var str = JSON.stringify(person);
console.log(str);
console.log(JSON.parse(str));

*/

/* Дата и время с Date  *//////////////////////////////////////////////////////////////////////////////
/*
var date= new Date();
date.setMonth(1);
console.log(date.getDate());
console.log(date.getMonth());

console.log(date);

*/

/* localStorage   */////////////////////////////////////////////////////////////////////////////
/*
document.querySelector('button').addEventListener('click', function(e) {

    var value = document.querySelector('input').value;

    var obj = {
        text : value
    }

    // localStorage.setItem('headerText', value);
     localStorage.setItem('headerText', JSON.stringify(obj));

});

document.addEventListener('DOMContentLoaded', function() {

    var obj = {};

try {
    obj = JSON.parse(localStorage.getItem('headerText'));
} catch(e) {
    obj = {};
}
    //  obj = JSON.parse(localStorage.getItem('headerText'));
    // var text = localStorage.getItem('headerText');

// if (text && text.trim()){    
//     document.querySelector('h1').textContent = text ;
// }

if (obj && obj.text && obj.text.trim()) {    
    document.querySelector('h1').textContent = obj.text ;
}


});

*/


//////////////////////////////////////////////////////////////////////////////////////////////////










