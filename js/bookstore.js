
var data;


var description =0;
var detalle =0;
var idioma =0;
var titulo=0;




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
	
	
	slides();


}).then(function(){

	
  
}).catch(function (error) {
   console.log("Request failed: " + error.message);
});


function slides(){
	
	var one = document.getElementById("board");
		for(var i = 0; i < data.length; i++){
			var div = document.createElement("div");
			var div2 = document.createElement("div2");
			var a = document.createElement("a");
			var img = document.createElement("img");
			var H = document.createElement("H");
			
			one.appendChild(div);
			one.appendChild(img);
			one.appendChild(div2);
			one.appendChild(H);
			one.appendChild(a);
			
			img.src=data[i].portada;
			a.textContent=data[i].descripcion; 
			H.textContent=data[i].titulo;
			
			div.textContent="front image";
			div.setAtribute.class="front";
			
			div2.textContent="back image";
			div2.setAttribute("backgroundColor", "black");
			div2.class="back";
			
		}
		
	}

