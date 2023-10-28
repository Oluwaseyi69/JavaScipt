function arrayToList(number){

  let list = null;
  for(let index = number.length -1; index >= 0; index--) {
    list = {
      value: number[index], 
      rest: list
    };
  }

  return list;
}


let list2 = arrayToList([1, 2, 3]);
console.log(list2);

function listToArray(list){

  let array = [];

}