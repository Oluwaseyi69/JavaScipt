function loop(value, test, update, body) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}

loop(
  6, 
  (value) => value >0,              
  (value) => value - 1,  
  (value) => {
    console.log(value);
  } 
);
