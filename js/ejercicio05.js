const h3Elements = document.querySelectorAll("h3");
h3Elements.forEach(h3 => {
    h3.addEventListener("click", handleClick);
});
function handleClick(event) {
    // Obtén el elemento h3 en el que se hizo clic
    const clickedH3 = event.target;
    
    // Utiliza la propiedad parentNode para obtener el elemento div padre
    const parentDiv = clickedH3.parentNode;

    // Utiliza la propiedad previousElementSibling para obtener el elemento h2 anterior
    const h2 = parentDiv.previousElementSibling;
   
    // Utiliza la propiedad innerText para obtener el texto del h3 y h2
    const h3Text = clickedH3.innerText;
    const h2Text = h2.innerText;
    
    // Utiliza la propiedad querySelector para obtener la lista de elementos li
    const ul = clickedH3.nextElementSibling;
    const liElements = Array.from(ul.querySelectorAll("li"));
    // Utiliza la propiedad innerText para obtener el texto de cada li
    const liText = liElements.map(li => li.innerText).join(", ");
    
    // Selecciona el elemento div que mostrara la informacion
    const resultado = document.querySelector("#resultado");
    // Crea un elemento p para mostrar la información
    const p = document.createElement("p");
    p.innerText = `Has elegido ${h3Text} que se imparte en turno de ${h2Text}. Los nº de grupos que se imparten son ${liElements.length}: ${liText}`;
    
    // Agrega el elemento p al elemento resultado
    resultado.appendChild(p);
}