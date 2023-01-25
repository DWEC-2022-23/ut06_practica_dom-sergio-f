document.getElementById('colorChangerButton').addEventListener('click', function() {
	document.getElementById('encabezado').style.color = document.getElementById('favcolor').value;
	// Por TagName
	//document.getElementsByTagName("h1")[0].style.color = document.getElementById('favcolor').value; 
});
