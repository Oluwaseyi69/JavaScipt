function getData(url){
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function(){
      if(xhr.status === 200){
        let newResponse = JSON.parse(xhr.response).data;
        success(newResponse)
        createElements(newResponse)
      } else{
        error(xhr.response);
      }
    }

  })

}

function createElements(newResponse){
  let{avatar,email, first_name, id, last_name} = newResponse;
  console.log(first_name);
  let img = document.createElement("img");
  let fullName = document.createElement("hi");
  let mail = document.createElement("p")

  mail.innerText = email;
  img.setAttribute("src", avatar);
  fullName.innerHTML = first_name + " " +last_name;

}
getData("https://reqres.in/api/users/1")
  .then((res) => {
    console.log("Res1", res)
    return getData("https://reqres.in/api/users/2")
  }).then((res)=> {
    console.log("Res2", res)
    return getData("https://reqres.in/api/users/3")
  }).then((res) => {
    console.log("Res3", res)
    return getData("https://reqres.in/api/users/4")
  }).catch(err => {
    console.log(err);
  })



getData("https://reqres.in/api/users/1",(data) => {
  console.log("Reponse1 ->", data)
  getData("https://reqres.in/api/users/2", (data2) => {
    console.log("Response2 ->", data2)
    getData("https://reqres.in/api/users/3", (data3) => {
      console.log("Response3 ->", data3)
    },error)
  },error)
},error);




