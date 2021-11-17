let a = [1, 2, 3],
    b = [5, 'Hello', 6];

// чтобы создать общий метод для всех массивов, мы можем обратиться к глобальному классу Array и дальше обратиться к его прототипу через свойство prototype, после этого мы задаем тот метод который нам необходим. Этот метод добавится к глобальным методам массива Array, что позволит в дальнейшем использовать везде. Данный метод мы назовет double и присвоим этому методу функцию, которая ничего не будет принимать в качестве параметров.

Array.prototype.double = function() {
    let newArray = this.map(function(item){
        if (typeof item === 'number') {  // проверка, если тип данных является числом, то .... 
            return item *= item;    // возведение в степень квадрат ( Math.pow(item,2))
        }
        
        if (typeof item === 'string') {
            return item += item;
        }

    });
    //  метод 'map()' - принимает в себя функцию callBack, который на каждой итерации будет получать текущий элемент массива   |  
    // создаем новый массив, в который положим скопированный массив(методом map()), this - в данном случае и есть массив который вызывает метод double.

     return newArray;   // возвращаем новый массив, чтобы не изменять главный массив;
}

// Реалицация данного метода
// Создаем переменные в которые положим выполнение функции с нашими массивами, т.е. массив а.double()| массив a - уже имеет метод который называется double,  который она может вызвать ...... так мы и делаем, а результат записываем в переменную и выводим в консоль.

let newA = a.double();
let newB = b.double();

console.log('A: ', newA.double());
console.log('B: ', newB);




let c = [1 , 2, 3];
let d = ['help', '1', 5];

Array.prototype.doubleDoub = function() {
    let newArray = this.map(function (item) {
        if (typeof item === 'number') {
            return item *= item;
        }
        if (typeof item === 'string') {
            return item += item ;
        }
    });


    return newArray;
}

let newC = c.doubleDoub();
let newD = d.double();

console.log(newC);
console.log(newD.doubleDoub().double());


