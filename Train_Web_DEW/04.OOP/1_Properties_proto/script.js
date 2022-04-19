let a = {
  text: "Hello",
  color: "red",
  bold: true,
  show: function () {
    console.log(this.color);
  },
};
let b = {
  fontSize: "24px",
  __proto__: a,
};

let c = {
  fonFamiliy: "Verdana",
  __proto__: b,
};

console.log(c);
console.log(c.bold);

// b.color = "green";
// b.show();

// console.log(a);
// console.log(b);
// b.text = "one";
// console.log(a.text);
// console.log(b.text);
