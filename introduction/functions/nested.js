//function as an expression, assisgning a function to a variable

let func = function(x, y){
  return x - y;
}

console.log(func(2, 4))

//Nested Function
function outerFunc(x){
  function innerFunc(y){
    return x + y
  }
  return innerFunc;
}
let ofFive = outerFunc(7)
console.log(ofFive(4))
console.log(ofFive(6))
console.log(ofFive(5))

// Arrow Function
//Function as parameter
let banga = function(people){
  // console.log(proteinPerHead)

  function ingredients(palmkernel, veggies, protein){
    let palmKernelCost = palmkernel * people;
    let proteinPerHead = palmkernel;

    console.log(` For ${people}, we will spend ${palmKernelCost}, we will use ${veggies}, ${proteinPerHead}`)
  }
  ingredients(1, "ugwu", "Fish");
} 

banga(10)