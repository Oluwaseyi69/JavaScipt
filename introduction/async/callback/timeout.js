const file = require("fs")

file.readFileSync("sample.txt", "utf-8", (err, result) =>{
  if(err === null){
    console.log(result)
  }
})

function getData(data){
  console.log(data);
}

setTimeout(() => {
  console.log("HEllo js")
}, 3000)


getData("blood!!")

function sendEmail(){
  console.log("email sent")
}
setTimeout(sendEmail, 5000)

console.log("post email");