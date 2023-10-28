const Native = require("./constructorFunction")

function Wimp(firstName, lastName, _scvID, cohort, _age){
  Native.call(this, firstName, lastName, _scvID, cohort)

  let age = _age;

  this.setAge = (newAge) => {
    age = newAge;
  }
  this.getAge = () =>{
    return age;
  }

}

function Child(){
  Wimp.call(this, "seyi", "banwo", "000123", "18", "23")
}

Wimp.prototype = Object.create(Native.prototype);
Wimp.constructor = Wimp.prototype

let student1 = new Wimp("seyi", "banwo", "000123", "18", "23")
let student2 = new Child();
console.log(student1.getAge())
console.log(student2.constructor)
console.log(student1.firstName)
console.log(student1.hasLaptop)
console.log(student1.floor)