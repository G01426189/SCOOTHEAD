class Scooter {
 constructor (station){
  this.station = station;
  this.user = null;
  this.serial = Scooter.nextSerial++;
  this.charge = 100;
  this.isBroken = false;
 }
rent(user) {
if (this.charge> 20 && !this.isBroken) {
  this.user = user;
  this.station = null;
  console.log(`Scooter ${this.serial} checked out to ${user.name}`);
    } else {
      if (this.charge <= 20) {
        throw new Error("Scooter needs to charge, sorry try another one");
      } else if (this.isBroken) {
        throw new Error("Scooter needs repair. Sorry try another one");
      }
    }
  }
  dock(station){
    this.station = station;
    this.user = user;
    console.log(`Scooter ${this.serial} docked at ${station} by ${this.user}`);
  }

}
    















module.exports = Scooter
