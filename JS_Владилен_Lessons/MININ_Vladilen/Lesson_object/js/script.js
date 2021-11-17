// object   Первое представление

// let car = { 
//     name: 'Ford',
//     year: 215 
// }

// console.log(car);
// car.__proto__ => object.prototype


/*
function Car(name, year) {
    this.name = name ;
    this.year = year ;
}

Car.prototype.getAge = function () {
    return new Date().getFullYear() - this.year ; 
}

var ford = new Car('Ford', '2015');
var bmw = new Car ('BMW', '2017');
console.log(ford);
console.log(bmw);

*/


// object еще один способ создания объекта :
/* 

var ford = Object.create({1},{2})  // 
создаем объект ford , через глобальный объект Object и у которого есть метод create() - способ создания объетков ;
Параметры передачи в create;
1 -  описывает свойства прототипа объекта
2- описывает свойства данной объекта(ford) 

свойста описываются в немного другом виде: 
name - это имя свойста, потом доеточие(:)
{} - теперь значения name состоит из объекта, внутри которого прописывается ключевое слово 'value' и значение в виде строки    | name: {value 'Ford'};


*/
/*
var ford = Object.create({
    calculateDistancePerYear: function() {
        //считаем возраст машины age
    Object.defineProperty(this, 'distancePerYear', {
        value: Math.ceil(this.distance / this.age),
        enumerable: true,
        writable: false,
        configurable: false
    })
    }
}, {
    name: { 
        value: 'Ford',
        enumerable: true,           // показывать данное поле в областе видимости
        writable: false,         // разрешение на изменение поля
        configurable: false     // разрешение на удаление поля
    },
    model: {
        value: 'Focus',
        enumerable: true,
        writable: false,
        configurable: false
    },
    year: {
        value: 2015,
        enumerable: true,
        writable: false,
        configurable: false
    },
    distance: {
        value: 120500,
        enumerable: true,
        writable: true,
        configurable: false
    },
    age: {
        enumerable: true,
        get: function() {
            console.log('получаем возраст');
            return new Date().getFullYear() - this.year;
        },
        set: function() {
            console.log('Устанавливаем значение');


        }

    }
});

console.log(ford);

for(var key in ford) {
    if(ford.hasOwnProperty(key)){
        console.log(key, ford[key]);
    }
    
}
*/
/*
var person = {
    name: 'Max',
    age: 28,
    job: 'Frontend'
};

// for (var key in person){
//     if (person.hasOwnProperty(key))
//     console.log(person[key]);
// }

// Object.keys(person).forEach(function(key) {
//     console.log(key); // показывает название ключей
//     console.log(person[key]); // показывает значения ключей объекта person
//     console.log(key + ":" + "'" + person[key] + "'"); //показывает и ключ и значение
// })


*/



///////////////////////////////// ЗАМЫКАНИЯ /////////////////////////////////
//вариант_1
/*
let createCounter = function(counterName) {
    let counter = 0;

    // return function() {
    //     console.log(counterName, ++counter);
    // }
    return {
        increment: function() {
            counter++
        },
        decrement: function() {
            counter-- 
        },
        getCounter: function() {

            return counter
        }
    }
}

let counterA = createCounter('Counter A');
let counterB = createCounter('Counter B');

counterA.increment();
counterA.increment();
counterA.increment();

counterB.increment();
counterB.increment();


*/

// вариант_2

// function createCalcFunction(n) {
//     return function() {
//         console.log(1000 * n)
//     }
// }
// createCalcFunction(42);                //вызов данной функции вернем нам новую функцию, которая находится внутри этой

// const calc = createCalcFunction(42); // присваиваем переменной функцию, так как результат createCalcFunction(42)- является функцией, так же получается что при вызове функции calc, значение параметра 'n' ЗАМКНУТО при создании переменной, 
// calc(); 

//вариант_3

// function createIncrementor(n){
//     return function(num) {
//         return n + num ;
//     }
// }

// const addOne = createIncrementor(1); // переменная addOne - является функцией в которой переменную 'n' мы замыкаем со значение указанным в вызове функции 'createIncrementor(1)',   
// const addTen = createIncrementor(10);

// console.log(addOne(10)); //вызываем функцию 
// console.log(addOne(41));
// console.log(addTen(10));
// console.log(addTen(41));


//Вариант_4

// function urlGenerator(domain) {
//     return function(url){
//         return `https://${url}.${domain}`;
//     }
// }

// const comUrl = urlGenerator('com');
// const ruUrl = urlGenerator('ru');

// console.log(comUrl('google'));
// console.log(comUrl('netflix'));
// console.log(ruUrl('yandex'));
// console.log(ruUrl('vkontakte'));


// Вариант_5

//Функция bind() 

/*
function bunding() {
    return function(person) {
        return this.name , this.age, this.job
    }
}
*/

/*
const bundingPerson = bunding();

console.log(bundingPerson(person1));
*/


// function logPerson(pers) {
//     console.log(`pers: ${this.name}, ${this.age}, ${this.job}`);
// }

// const person1 = {name: 'Михаил' , age: 22, job: 'Frotend'};
// const person2 = {name: 'Елена' , age: 19, job: 'SMM'};

// bind(person2, logPerson);
// bind(person1, logPerson);


// function bind(context, fn) {
//     return function(...args) {
//         fn.apply(context, args)
//     }
// }

// function logPerson() {
//     console.log(`Pers: ${this.name}, ${this.age}, ${this.job}`);
// }

// const person1 = {name: 'Михаил' , age: 22, job: 'Frotend'};
// const person2 = {name: 'Елена' , age: 19, job: 'SMM'};

// bind(person2, logPerson)();
// bind(person1, logPerson)();





// Контекст ////////


// let person = {
//     age: 28,
//     name: 'Max',
//     job: 'Frontend',
//     displayInfo: function(ms) {
        
//           //let self = this;   // замыкание   1-й способ 


//         setTimeout(function() {

//             console.log('Name: ', this.name);
//             console.log('Job: ', this.job);
//             console.log('Age: ', this.age);
       
//         }.bind(this), ms)   // привязываем контекст для  
//     }
// }

// person.displayInfo(3000);


//////// Привязка контекста/////////

// function printObject(objName) {
//     console.log('Printing object:', objName);      // при вызове функции показываем, какой контекст является выбранным
//     for (let key in this) {                        // 
//         if(this.hasOwnProperty(key)) {
//             console.log('[' + key + ']', this[key])
//         }
//     }
// }


// let person = {
//     firstName: 'Max',
//     job: 'Backend',
//     age: 29,
//     friends: ['Elena', 'Igor'],
// }

// let car = {
//     name: 'Ford',
//     model: 'Focus',
//     year: 2017
// }

// let printPerson = printObject.bind(person);     // мы вызываем метод у функции printObject , который называется bind, который первым параметром вызывает как раз нужный нам контекст (this), т.е. объектом (ключевым объектом-контекстом) будем как раз объект 'person' который мы передали в метод bind.  Метод 'bind' возвращает новую функцию уже с привязанным контекстом(this), по этому мы создали переменную printPerson - которая принимает функцию которую вернул метод bind  с контекстом.
// printPerson(person);

// printObject.call(car, 'Car');  // метод 'call' он не возвращает функцию, а вызывает ее и так же как мептод bind первым параметром принимает контекст вызова, а второй параметр это и есть параметр функции printObject(objName), если бы были еще параметры например printObject(objName, objYear, ...), то метод 'call' принимал бы их через запятую. Например : printObject.call(car, 'Car', 'Year', '...');

// printObject.apply(person, ['Person']);  // матод 'apply' он так же вызывает функцию, но первым параметром принимает так же объект который мы хотим видеть в качестве контекста, а вот второй аргумент мы принимаем в виде массива через запятую: printObject.apply(person, ['Person','...','...']);






