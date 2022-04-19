/*
 * description
 */
// Class -> function
// ab class -> class -> object

class User {
  // userName // password
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }

  validatePassword() {
    console.log("work");
    if (this.password.length > 6) {
      return true;
    } else {
      return false;
    }
  }
}
