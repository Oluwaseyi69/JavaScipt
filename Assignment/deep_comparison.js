function deepEqual(value1, value2){
  if(value1 === value2){
    return true;
  }
  if(typeof value1 === "object" 
   && typeof value2 === "object" ){
     
    const newValue1 = Object.keys(value1);
    const newValue2 = Object.keys(value2);

 
    return true;
   }
   return false;

}
  console.log(deepEqual(6, 6))
  console.log(deepEqual(6, "6"))
  console.log(deepEqual("man", "woman"))

