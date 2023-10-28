// const arrayOfArrays = [[1, 2, 3], [4, 5], [6, 7, 8]];

// const flattenArray = [];
// for (const subArray of arrayOfArrays) {
//   for (const element of subArray) {
//     flattenArray.push(element);
//   }
// }

// console.log(flattenArray);

let arrays = [[1, 2, 3], 
              [4, 5], 
              [6, 7, 8]];

let newArray = [].concat(... arrays)

console.log(newArray.map(Number))
