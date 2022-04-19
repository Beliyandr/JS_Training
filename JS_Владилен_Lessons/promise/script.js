// console.log("hello");

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Preparing data...");

//     const backendData = {
//       server: "aws",
//       port: 2000,
//       status: "working",
//     };

//     resolve(backendData);
//   }, 2000);
// });

// p.then((data) => {
//   //   console.log("Promise resolved", data);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data);
//     }, 2000);
//   });
// }).then((clientData) => {
//   console.log("Data received", clientData);
// });
