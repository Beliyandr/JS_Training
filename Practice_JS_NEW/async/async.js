//Event Loop

// const timeout = setTimeout(() => {
//   console.log('after 1 seconds');
//   clearTimeout(timeout)
// },1000)


// function delay(callback, time=1000) {
//   setTimeout(callback, time)
// }

// delay(() => { console.log('timeout') },2000)


// const delay = (time = 1000) => {
//   const promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//       resolve([1,2,3])
//     },time)
//   })

//   return promise
//  }

// delay(2500).then((data) => {
//   console.log(data);
// })

// const getData = () => new Promise((resolve) => resolve([1,2,3]))


// async function asyncExample() {
//   try {
//     const data = await getData()
//     return data;
//   } catch (error) {
// console.log(error);
//   } finally {
//     console.log('Finally');
//    }
//  }

//  const a = asyncExample();
// console.log(a.then(b=>console.log(b)));
