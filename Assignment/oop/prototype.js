//inheritance

let vehicle = {
  "seats": 5,
  "wheels": 4,
  "doors": 2,
 
  }

  let x = {};
  let car = {
    model: "lambo",
    color: "Peach Black",
    year: "2023",
    __proto__: vehicle
  }


console.log(car.color)
console.log(car["color"])
console.log(Object.keys(car))
console.log(car.doors)
