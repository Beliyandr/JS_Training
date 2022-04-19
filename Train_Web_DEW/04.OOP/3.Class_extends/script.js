class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(this.name + " Hello");
    return this.name;
  }
}

const alex = new User("Alex");

console.log(alex);

class Person extends User {
  constructor(name, email) {
    super(name);
    this.email = email;
  }
}

const li = new Person("li", "li@com");

console.log(li);
console.log(li.sayHello());
