class User {
  constructor(username, password, age){
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }
  login(password){
    if (password === this.password){
      this.isloggedIn = true;
      console.log (`${this.username} logged in successfully.`);
    } else{
      throw new Error('Incorrect password. Please try again.')
    }
  }
  logout(){
    this.isloggedIn = false;
    console.log(`${this.username} logged out.`);
  }
}

module.exports = User
