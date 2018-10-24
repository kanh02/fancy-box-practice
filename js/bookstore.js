var data;

fetch("https://api.myjson.com/bins/1h3vb3", {

	method: "GET",

}).then(function (response) {

	if (response.ok) {
		return response.json();
	}
	throw new Error(response.statusText);
}).then(function (json) {
	data = json.books;
	console.log(data);

	slides(data);

}).then(function () {

}).catch(function (error) {
	console.log("Request failed: " + error.message);
});


function slides(array) {

	for (var i = 0; i < array.length; i++) {

		var slider = document.getElementById("fancy");
		var container = document.createElement("div");
		var flip = document.createElement("div");
		var front = document.createElement("div");
		var back = document.createElement("div");

		var title = document.createElement("h1");
		var descrip = document.createElement("p");
		var botton = document.createElement("button");

		descrip.textContent = array[i].descripcion;
		title.textContent = array[i].titulo;
		botton.textContent = "More Info";

		container.setAttribute("class", "flip-container")
		flip.setAttribute("class", "flipper")

		front.setAttribute("class", "front")
		front.style.backgroundImage = "URL('" + array[i].portada + "')";
		front.style.backgroundRepeat = "no-repeat";
		front.style.backgroundPosition = "center";
		front.style.backgroundSize = "contain";
		front.style.height = "400px";
		front.style.width = "250px";

		back.setAttribute("class", "back")
		back.style.backgroundColor = "#d6d6c1";
		back.style.backgroundPosition = "center";
		back.style.backgroundSize = "contain";
		back.style.height = "400px";
		back.style.width = "250px";

		back.appendChild(title);
		back.appendChild(descrip);
		back.appendChild(botton);

		flip.appendChild(front);
		flip.appendChild(back);
		container.appendChild(flip);
		slider.appendChild(container);
	}
}


function filter(data) {

	var input, filter, contenedor, div, h1, i;
	var hide = document.getElementById("oculto");

	input = document.getElementById('Search');
	filter = input.value.toUpperCase();
	contenedor = document.getElementById("fancy");
	div = contenedor.getElementsByClassName('flip-container');

	var temp1 = 0;
	hide.style.display = "none";
	for (i = 0; i < div.length; i++) {
		hide.style.display = "none";
		h1 = div[i].getElementsByTagName("h1")[0].textContent;

		if (h1.toUpperCase().includes(filter)) {
			div[i].style.display = "block";
			temp1++;
		} else if (div != null) {
			div[i].style.display = "none";
			if (temp1 == 0) {
				hide.style.display = "block";
			}
		}
	}
}
