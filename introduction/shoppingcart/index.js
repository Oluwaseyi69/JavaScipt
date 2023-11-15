function createRowElements(){
  return {
    shoppingCart: document.getElementsByTagName("tbody")[0],
    newRow: document.createElement("tr"),
    newItem: document.createElement("td"),
    itemPrice: document.createElement("td"),
    removeButton: document.createElement("button")
  }
}
function getUserInput(){
  item = document.getElementById("item");
  price = document.getElementById("price");
  return {
    item, price
  }
}


function addToCart(){
  let {item, price} =  getUserInput();

  if(item.value !== "" && price.value !== ""){
    let {newRow, shoppingCart, newItem, itemPrice, removeButton} = createRowElements();
    newItem.innerText = item.value;
    itemPrice.innerText = price.value;
    removeButton.innerText = "Remove";
    removeButton.className = "remove";

    newRow.appendChild(newItem);
    newRow.appendChild(itemPrice);
     newRow.appendChild(removeButton);
    shoppingCart.appendChild(newRow);

    item.value = "";
    price.value = "";
  }

}

function removeFromCart(){
  let shoppingCart = document.getElementsByTagName("tbody")[0];
  let rows = shoppingCart.getElementsByTagName("tr");

  if(rows.length > 0){
    shoppingCart.removeChild(rows[rows.length - 1]);
  }
}