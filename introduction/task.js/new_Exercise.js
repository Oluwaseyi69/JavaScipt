// let array = []
// array.push([ "car", 2000])
// array.push(["Truck", 500])
// array.push(["Bike", 6500])
// array.push(["Scooter", 1500])

// console.table(array)
// array[0][2] = ["Toyota", "Nissan"]
// array[1][2] = ["Ford"]
// array[2][2] = ["Honda"]
// array[3][2] = ["Ferrari"]

// console.table(array)



// let y = [[1], [2], [null]]
// console.table(y)

let array = []
let row1 = []
let obj1 = {
  name: "null",
  population: 1000,
  temp: 22,
  currency: "NG"
};
let obj2 = {
  name: "ondo",
  population: 1000,
  temp: 2,
  currency: "NG"
};
let obj3 = {
  name: "akure",
  population: 1000,
  temp: 12,
  currency: "NG"
};
row1.push(null)
row1.push(obj1)
row1.push(obj2)
row1.push(obj3)

array.push(row1)

let row2 = []
let obj4 = {
  name: "kenya",
  population: 1000,
  temp: 1,
  currency: "NG"
};
let obj5 = {
  name: "ibadan",
  population: 1000,
  temp: 3,
  currency: "NG"
};
let obj6 = {
  name: "lagos",
  population: 1000,
  temp: 5,
  currency: "NG"
};
row2.push(obj4)
row2.push(obj5)
row2.push(obj6)
row2.push(null)

array.push(row2)


let row3 = []
let obj7 = {
  name: "ikeja",
  population: 1000,
  temp: 10,
  currency: "NG"
};
let obj8 = {
  name: "osun",
  population: 1000,
  temp: 2,
  currency: "NG"
};
let obj9 = {
  name: "imo",
  population: 1000,
  temp: 2,
  currency: "NG"
};

row3.push(obj7)
row3.push(obj8)
row3.push(obj9)
row3.push(obj9)

array.push(row1)

console.table(array)

let total = 0;
for(let i = 0; i < array.length; i++){
  for(let j = 0;  j < array[i].length; j++){
    console.log(array[i][j])
    let obj = array[i][j];
  if (obj== null){
    continue
  }
   else if(obj.temp <= 10){
    total+=obj.population;
   }
}
}
console.log(total)

