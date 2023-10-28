function every(array, predicate) {
  for (let item of array) {
    if (!predicate(item)) {
      return false;
    }
  }
  return true;
}

const numbers = [2, 4, 6, 9, 20];
const isEven = (num) => num % 2 === 0;

console.log(every(numbers, isEven));


// function every(array, predicate){
//   if(!array === predicate ){ return false}
//   else{
//     return true;
//   }
// }
// const numbers = [2, 4, 6, 9, 20];
// const isEven = (num) => num % 2 === 0;

// console.log(every(numbers, isEven));