//Статические методы

class User {
  static test = true;

  constructor(name) {
    this.name = name;
  }
  static getRole(email) {
    /**
     * реализация
     */
    return "admin";
  }

  static getId(id) {
    //return user
  }
}

const person = new User("Ivan");

console.log(person);

// alex -> перейти на форум
// role
// -> класс -> создать объект -> object.getRole()

console.log(User.getRole("alex@ex"));
console.log(User.test);
console.log(person.test);

class Student extends User {
  static test = false;
  constructor(name) {
    super();
  }
}

console.log(Student.getRole("test"));
console.log(Student.test);
