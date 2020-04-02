var gravedad_mercurio = 3.7
var gravedad_venus = 8.87
var gravedad_tierra = 9.8
var gravedad_marte = 3.71
var gravedad_jupiter = 24.79
var gravedad_saturno = 10.44
var gravedad_urano = 8.87
var gravedad_neptuno = 11.15


var botonjs = document.getElementById("boton")
botonjs.addEventListener("click", calcular)

var peso
var peso_usuario
var planeta_usuario
var peso_final

function calcular ()
{
  peso = document.getElementById("peso-usuario")
  peso_usuario = parseInt(peso.value)
  planeta_usuario = document.getElementById("planeta").value

  switch (planeta_usuario)
  {
    case "Mercurio":
        peso_final = peso_usuario * gravedad_mercurio / gravedad_tierra
      break;
    case "Venus":
        peso_final = peso_usuario * gravedad_venus / gravedad_tierra
      break;
    case "Marte":
        peso_final = peso_usuario * gravedad_marte / gravedad_tierra
      break;
    case "Jupiter":
        peso_final = peso_usuario * gravedad_jupiter / gravedad_tierra
      break;
    case "Saturno":
        peso_final = peso_usuario * gravedad_saturno / gravedad_tierra
      break;
    case "Urano":
        peso_final = peso_usuario * gravedad_urano / gravedad_tierra
      break;
    default:
        peso_final = peso_usuario * gravedad_neptuno / gravedad_tierra
  }

  peso_final = parseInt(peso_final)

  resultado.innerText = "Tu peso en " + planeta_usuario + " es " + peso_final + " kilos"
}
