class Student extends User {
  constructor(userName, password, nickName) {
    super(userName, password);

    this.nickName = nickName;
  }
  getStudentCourses() {
    return [1, 2];
  }
  validatePassword() {
    super.validatePassword();
    if (this.password.length > 10) {
      return true;
    } else {
      return false;
    }
  }
}
