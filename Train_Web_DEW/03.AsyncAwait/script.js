// // async

// async function f1() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
//     (response) => response.json()
//   );
//   return res.title;
//   //     .then((json) => console.log(json.title + " 1 "));
//   //   console.log(1);
// }
// async function f2() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/2").then(
//     (response) => response.json()
//   );
//   return res.title;
// }
// async function f3() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/3").then(
//     (response) => response.json()
//   );

//   return res.title;
//   // .then((response) => response.json())
//   // .then((json) => console.log(json.title + " 3 "));
//   //   console.log(3);
// }

// async function go() {
//   let a = await f1();
//   console.log(a);
//   let b = await f2();
//   console.log(b);
//   let c = await f3();
//   console.log(c);
// }

// go();

// const ul = document.querySelector("ul");
// let li = document.createElement("li");

// li.innerHTML = "asdf";
// ul.append(li);

async function dataFetch(num) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${num}`);
  const res = await data.json();
  getTitle(res.title);
}

function getTitle(title) {
  const ul = document.querySelector("ul");
  let li = document.createElement("li");

  li.innerHTML = title;
  ul.append(li);
}

function get(num) {
  for (let i = 1; i < num; i++) {
    dataFetch(i);
  }
}

// const dataFetch = async () => {
//   const result = async function fetchData() {
//     const res = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     ).then((response) => response.json());
//     return res;
//   };
//   return result;
// };

// console.log(dataFetch());

// // console.log(dataFetch);

// async function showAvatar() {
//   // запрашиваем JSON с данными пользователя
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let user = await response.json();

//   console.log(response);
//   console.log(user);
//   // запрашиваем информацию об этом пользователе из github
//   let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//   let githubUser = await githubResponse.json();

//   // отображаем аватар пользователя
//   let img = document.createElement("img");
//   img.src = githubUser.avatar_url;
//   img.className = "promise-avatar-example";
//   document.body.append(img);

//   // ждём 3 секунды и затем скрываем аватар
//   await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//   img.remove();

//   return githubUser;
// }

// showAvatar();

const promise = new Promise((resolve, reject) => {
  let a = Math.random() * 100;

  if (a < 50) {
    resolve(a);
  } else {
    reject("Error");
  }
});

promise
  .then((data) => {
    get(7);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    get(7);
  });
