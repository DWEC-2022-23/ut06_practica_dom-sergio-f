let addElementButton = document.getElementById("addElementButton");
let container = document.getElementsByTagName("ul")[0];
addElementButton.addEventListener("click", function() {
    var li = document.createElement("li");
    li.innerText = document.getElementsByClassName("AñadirElemento")[0].value;
    container.appendChild(li);
    document.getElementsByClassName("AñadirElemento")[0].value = "";
});
