/// ИНТЕРВАЛЫ и ТАЙМЕРЫ****************************************

// setTimeout(function() {
//  alert('Hello');
// }, 2000)

// let counter = 0 ;
// let interval = setInterval(function() {
//     console.log(++counter);
// }, 1000 * 2);

// setTimeout(function() {
//     clearInterval(interval);
// },10000)



///////////////////////////////////////////////////
// CALLBACK  по старому  **************************

/*
    Client -> Server -> DataBase -> Server -> Client
*/

// console.log('Клиент: хочу получить полный список пользователей');
// console.log('...');

// setTimeout(function() {
//     console.log("Сервер: Запрашиваю список пользователей в БД");
//     console.log('...');

//     setTimeout(function() {
//         console.log('БД: формарую список пользователей');
//         console.log('...');

//         setTimeout(function() {
//             console.log('Сервер: трансформирую данные для клиента');
//             console.log('...');

//             setTimeout(function() {
//                 console.log('Клиент: получил данные и отображаю');
//             },1000);

//         }, 500);

//     }, 500);
    
// }, 1000);


/*   ПРОМИСЫ | PROMISE */ //////////////////////////////////////////////

console.log('Клиент: хочу получить полный список пользователей');
console.log('...');

let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Сервер: Запрашиваю список пользователей в БД");
        console.log('...');
        resolve(); //успешное выполнение кода
    }, 1000)
});

promise.then(function() {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            let users = [
                {uid: 'id1', name: 'Maxim'},
                {uid: 'id2', name: 'Elena'}
            ]
            // reject('БД не смогла получить список пользователей')
            console.log('БД: формарую список пользователей', users);
            console.log('...');
            resolve(users);
        },500)
    })   
}) 
.then(function(dbUsers) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('Сервер: трансформирую данные для клиента');
            console.log('...');
            let users = dbUsers.map(function(user) {
                return {
                    id: user.uid,
                    firstName: user.name,
                    timestamp: Date.now()
                }
            });
            resolve(users);
        },500)
    })
})
.then(function(users) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('Клиент: получил данные и отображаю ', users);
            resolve();
        },1000)
    })
})
.catch(function(error) {    // функция на проверку ошибок в промисе
    console.error(error);
})
.finally(function() {       // выполнить callback-функцию после правильного окончания всего промиса
    console.log('Finally');
})






