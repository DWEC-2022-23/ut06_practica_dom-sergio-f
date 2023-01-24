let container = document.getElementsByTagName("ul")[0];
function addElement(){
    var li = document.createElement("li");
    li.innerText = document.getElementsByClassName("AñadirElemento")[0].value;
    container.appendChild(li);
    document.getElementsByClassName("AñadirElemento")[0].value = "";

}