// destruction
// kinds of destructuring pattern, 1)binding 2)assignment
// bindings helps to bind value to new variable

// let arr = [4, 6, 8, 9, 3, 7]
// let obj = {
//   name: "Moyin",
//   age: 32,
//   cohort: 17
// }

// let[a, b, ...rest ] = arr;
// obj.rest = rest;
// console.log(obj);

// let {age} = obj
// console.log(age)
// let [m, n, , , y] = arr;
// console.log(m);
// console.log(n);
// console.log(y);

//Assignment
// this helps to assign the object in array 
// let arr2 = []
// let obj = {a: 1, b: 2};
// ({a: arr2[0], b: arr2[1]} = obj)
// console.log(arr2)

// let array = [{
//   name: "Seyi",
//   pop: 123000
// },
// {
// name: "Tomide",
// pop: 12500
// }
  

// ]

// let popArray = []
// for(let i in array){
//   ({pop: popArray} = array[i])
// }

// console.log(popArray)]


let c = 3;
let d = 4;

[d, c] = [c, d]

console.log(d)
console.log(c)
