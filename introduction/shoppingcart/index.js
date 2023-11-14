function createRowElements(){
  return {
    shoppingCart: document.getElementsByTagName("tbody")[0],
    newRow: document.createElement("tr"),
    newItem: document.createElement("td"),
    itemPrice: document.createElement("td")
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
    let {newRow, shoppingCart, newItem, itemPrice} = createRowElements();
    newItem.innerText = item.value;
    itemPrice.innerText = price.value;

    newRow.appendChild(newItem);
    newRow.appendChild(itemPrice);
    shoppingCart.appendChild(newRow);

    item.value = "";
    price.value = "";
  }

}