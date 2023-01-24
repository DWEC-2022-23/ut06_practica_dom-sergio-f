function darkMode(){
    if(!document.body.classList.contains("inverso")){
     document.body.classList.toggle("inverso");
     document.getElementById("darkModeButton").value = "fondo claro";
    }else{
     document.body.classList.toggle("inverso");
     document.getElementById("darkModeButton").value = "fondo oscuro";
    }
}