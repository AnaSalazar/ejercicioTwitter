var areaVisual = document.getElementById("areaVisual");
var areaVisual2 = document .getElementById("areaVisual2");


var textarea = document.createElement("textarea");
textarea.id = "areaTweet";
textarea.rows = 10;
textarea.cols = 50;
textarea.placeholder = "Escribe tu tweet";
areaVisual.appendChild(textarea);

var span = document.createElement("span");
span.innerHTML = "<strong>  De: </strong>";
areaVisual.appendChild(span);

var input = document.createElement("input");
input.id = "personaTweet"
input.type = "text";
input.placeholder = "Escribe tu nombre"
areaVisual.appendChild(input);

var boton = document.createElement("button");
boton.type = "submit";
boton.innerText = "Enviar"
boton.onclick = "agregarTweet(event);"
areaVisual.appendChild(boton);

var division = document.createElement("hr");
areaVisual.appendChild(division);

var subtitulo = document.createElement("h3");
subtitulo.innerText = "Tweets";
areaVisual2.appendChild(subtitulo);

function agregarTweet() {
   event.preventDefault();
   var tweet = document.getElementById("areaTweet").value;
   var personaEscribio = document.getElementById("personaTweet").value;
   var articulo = document.createElement("article");
   var espacioTweet = document.createElement("p");
   var de = document.createElement("p");
   var personaTweet = document.createElement("span");


    de.innerHTML = "De:";
    espacioTweet.innerHTML = tweet;
    personaTweet.innerHTML = personaEscribio;

    de.appendChild(personaTweet);
    de.style.fontSize = "12px";
    articulo.appendChild(espacioTweet);
    articulo.appendChild(de);

    areaVisual2.appendChild(articulo);
}
