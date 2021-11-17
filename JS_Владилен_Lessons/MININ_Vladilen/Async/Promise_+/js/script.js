function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve()
        }, ms)
    })
}


let p1 = sleep(1500).then(function() {
    return {
        name: 'Promise 1500'
    }
})


let p2 = sleep(3000).then(function() {
    return {
        name: 'Promise 3000'
    }
})


Promise.all([p1, p2]).then(function(data) {  //метод all отрабатывает(ждет все промисы) только при получении всех промисов 
    console.log('ALL', data);
})

Promise.race([p1, p2]).then(function(data) {  //метод race отрабатывает при выполнение первого(любового одного) промиса
    console.log('Race', data);
})