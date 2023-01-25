let addElementButton = document.getElementById("addElementButton");
let deleteFirstElement = document.getElementById("deleteFirstElement");
let deleteLastElement = document.getElementById("deleteLastElement");
let container = document.getElementsByTagName("ul")[0];

addElementButton.addEventListener("click", function() {
    var li = document.createElement("li");
    li.innerText = document.getElementsByClassName("AñadirElemento")[0].value;
    container.appendChild(li);
    document.getElementsByClassName("AñadirElemento")[0].value = "";
});

deleteFirstElement.addEventListener("click", function() {
    container.removeChild(container.firstChild);
});

deleteLastElement.addEventListener("click", function() {
    container.removeChild(container.lastChild);
});

