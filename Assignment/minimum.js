function minimum(first_number, second_number){
  if(first_number < second_number){
    return first_number;
  }
  else{
    return second_number;
  }
}
console.log(minimum(3, 7))
console.log(minimum(7, 5))