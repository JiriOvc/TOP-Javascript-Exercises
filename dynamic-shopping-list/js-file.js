let ul = document.querySelector("ul");
let input = document.querySelector("input");
let btnAdd = document.querySelector("#btnAdd");

function addButton() {
   let newItem = input.value;
   let li = document.createElement("li");
   let span = document.createElement("span");
   let btnRemove = document.createElement("button")

   li.appendChild(span);
   span.textContent = newItem
   li.appendChild(btnRemove);
   btnRemove.textContent = "Delete";

   ul.appendChild(li);

   input.value = "";
   input.focus()

   function deleteButton() {
   ul.removeChild(li)
}
   btnRemove.addEventListener("click", deleteButton)
   
}

btnAdd.addEventListener("click", addButton);












