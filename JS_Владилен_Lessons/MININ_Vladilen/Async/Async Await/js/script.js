document.querySelector('#load').addEventListener('click', load);

 async function load() {
    let url = 'https://jsonplaceholder.typicode.com/users';
    // console.log('loading started');

    // fetch(url)

    // .then(function(responce) {
    //     return responce.json();
    // })
    // .then(function(data) {
    //     let ul = document.querySelector('#list');

    //     let html = data.map(function(item) {
    //         return '<li>' + item.id + ' ' + item.name + ' (' + item.email  + ')</li>';
            
    //     })
        
    //     ul.insertAdjacentHTML('afterbegin', html.join(' '));
    // })

    let responce = await fetch(url);
    let data = await responce.json(); 
      
        let html = data.map(function(item) {
            return '<li>' + item.id + ' ' + item.name + ' (' + item.email  + ')</li>';
            
        })
        
        document.querySelector('#list').insertAdjacentHTML('afterbegin', html.join(' '));
}