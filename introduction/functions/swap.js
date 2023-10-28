let value = [200, 2, 5, 9, 7]

for(let x = 0; x < value.length; x++){
  for (let y = x ; y < value.length; y++){
    if(value[x] > value [y]){
    let temp = value[x]
    value[x] = value[y]
    value[y] = temp;
    }
  }
}


console.log(value)