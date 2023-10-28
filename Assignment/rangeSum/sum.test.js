const {sum, multiply, divide} = require('./sum')

test ("that we can add 2 numbers", () =>{
  expect(sum(4, 3)).toBe(7);
})

test ("test to multiply", () =>{
  expect(multiply(5, 6)).toBe(30);
})

test ("test to divide", () =>{
  expect(divide(2, 10)).toBe(5);
})
