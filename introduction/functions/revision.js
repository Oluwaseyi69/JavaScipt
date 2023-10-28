// function weekend(wash, read){
//   let sun = wash();
//   let rain = read();

//   return sun + " " +rain;

// }
// function x(){
//   return ("thank you");
// }
// function y(){
//   return("you are welcome");
// }
// console.log(weekend(x, y));

function days(hour, minute){
  let time = hour();
  let time2 = minute();
  
  return time + "," + time2;
}
function c (){
  return 2 * 60
}
function d (){
  return ("ok")
}
console.log(days(c, d))