var h3Elements = document.querySelectorAll('h3');
for (let i = 0; i < h3Elements.length; i++) {
    h3Elements[i].addEventListener('click',function(event){
   
    var clickedH3 = event.target;
    var divPadre = clickedH3.parentNode;
    var h2 = divPadre.previousElementSibling;

    var h3Text = clickedH3.innerText;
    var h2Text = h2.innerText;

    var ul = clickedH3.nextElementSibling;
    var liElements = Array.from(ul.querySelectorAll("li"));
    var liText = liElements.map(li => li.innerText).join(", ");

    var p = document.createElement("p");
    p.innerText = `Has elegido ${h3Text} que se imparte en turno de ${h2Text}. 
    Los nº de grupos que se imparten son ${liElements.length}: ${liText}`;
    
    var resultado = document.getElementById("resultado");
    resultado.appendChild(p);
    });
}