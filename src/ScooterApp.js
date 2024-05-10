// require the User and Scooter classes - see where they can be used in ScooterApp.js

class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations =
    'Station A'; []
    'Station B'; []
    'Station C';  []
  };
  this.registeredUsers = {};
}
registeredUsers(username, password, age){
  if (this.registeredUsers[username]){
    throw new Error("Sorry user is already registered!");
  } else if (age < 18){
    throw new Error("Sorry, you're to young to be a scoothead!");
  } else {
    const newUser = new User(username, password, age );
    this.registeredUsers [username];
    if (!user || user.password !== password){
      throw new Error("Sorry scoothead your username or password isn't correct");
    } else {
      console.log (`${username} you have been logged in scoothead!`);
    }
  }
}



module.exports = ScooterApp
