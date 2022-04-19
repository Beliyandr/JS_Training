// Приватные (#)
// Защищенные (_) Protected - свойство которое менять нельзя (напрямую)
// Public

class User {
  constructor() {
    // this._name = name;
  }

  #test = "Hohoho";
  #url = "https://backend.ex";

  send() {}
  set name(name) {
    console.log("Private = " + this.#test);
    this._name = name.trim().toLowerCase();
  }

  get name() {
    return this._name;
  }

  one() {
    console.log("Private = " + this.#test);
  }
}

const student = new User("Alex");
student.name = "     Ivan";
console.log(student);
console.log(student.name);
console.log(student.test);

class User2 extends User {}
const student2 = new User2();

student2.one();
student2.name = "oleg";
