let shoppingList = document.getElementById("shopping-list");

function addItem() {
  let newItem = document.getElementById("new-item").value;
  if (newItem !== "") {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(newItem));
    li.addEventListener("click", removeItem);
    shoppingList.appendChild(li);
    document.getElementById("new-item").value = "";
  }
}

function removeItem() {
  this.parentNode.removeChild(this);
}