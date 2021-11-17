// function getAge(year) {
//     const current = new Date().getFullYear();
//     return current - year ;
// }

// const calculateAge = (year) => {
//     const current = new Date().getFullYear();
//     return current - year ;
// }
 

// const getAge = year => {
//     const current = new Date().getFullYear();
//     return current - year ;
// }

// const getAge = year => {
//     return new Date().getFullYear() - year;
// }

// const getAge = year => new Date().getFullYear() - year;

// console.log(getAge(1999));


// const person = {
//     age: 25,
//     firstName: 'Maxim',
//     logNameWithTimeout: function() {      // данная функция создает контекст (this)  из основного объекта person, по этому внутри данной функции this.firstName = 'Maxim'; Однако функция setTimout - является методом глобального объекта window и контекст она берет тоже из объекта window, по этому она не знает ничего о существовании this.firstName
//         setTimeout( function() {
//             console.log(this.firstName)
//         }, 1000);
//     }
// }

// const person = {
//     age: 25,
//     firstName: 'Maxim',
//     logNameWithTimeout: () => {      // в данной ситуации, мы воспользовались стрелочной функцией, которая не создает своего контекста, но функция setTimout по прежнему имеет свой контекст для this, и ничего не находит
//         setTimeout( function() {
//             console.log(this.firstName)
//         }, 1000);
//     }
// }

// const person = {
//     age: 25,
//     firstName: 'Maxim',
//     logNameWithTimeout: function() {      // методом bind(this) мы определяем контекст person в функцию setTimeout
//         setTimeout( function() {
//             console.log(this.firstName)
//         }.bind(this), 1000);
//     }
// }


// const person = {
//     age: 25,
//     firstName: 'Maxim',
//     logNameWithTimeout: function() {      // в данном случае, мы для метода LogName... создали функцию с ключевым словом function, что подрозумевает создание контекста взятый из основного объекта person
//         setTimeout( () => {             // а вот функция SetTimeout имеет стрелочную функцию, что не имеет своего контекста, и при вызове this.firstName - она обратится к методу с ключевым словом function  которая в свою очередь имеет контекст от объекта person ..... 
//             console.log(this.firstName)
//         }, 1000);
//     }
// }

// const person = {
//     age: 25,
//     firstName: 'Maxim',
//     logNameWithTimeout() {       // мы создаем функцию как метод, что под собой подразумевает создание функции с ключевым словом functioin  и привязки контекста к данному методу // _____Такой подход работает внутри объектов или классов ______
//         setTimeout( () => {             
//             console.log(this.firstName)
//         }, 1000);
//     }
// }

