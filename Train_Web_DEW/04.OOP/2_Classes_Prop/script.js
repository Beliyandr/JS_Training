let a = "Ivan";
let b = "7774564645";

const person = new User(a, b);
console.log(person);
console.log(person.validatePassword());

let firstStudent = new Student(a, b, 123);

console.log(firstStudent);
console.log(firstStudent.getStudentCourses());
console.log(firstStudent.validatePassword());
