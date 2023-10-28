// in naming a constructor function, the naming should start with CAP(A)

class Native {
  constructor(_firstName, _lastName, _scvID, _cohort) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.scvID = _scvID;
    this.cohort = _cohort;


  }
  setScvID(newscvID){
    scvID = newScvID;
 }

  static fullName(){
    return this.fullName + this.lastName;
  }

  // comment

//  this.setScvID = newScvID => {
//    scvID = newScvID;
//  };
//  this.getScvID = () => {
//    return scvID;
//  };
};

Native.prototype.hasLaptop = true;
Native.prototype.floor = "2nd";
 

let student1 = new Native("Amina", "Tomide", "00013scb", 23);
let student2 = new Native("Lofi", "Hafsat", "00034scb", 23);
student1.hasLaptop = false
console.log(student1.__proto__);

module.exports = Native;

