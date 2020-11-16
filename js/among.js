"use strict";

/*
Hacer un programa, funcionalidad de among us:
1-pedir al jugador 5 jugadores
2-mostrar el nombre de los jugador en una lista
3-hacer validaciones, en las que no se permitan datos erroneos
4-pedir al jugador quien es el impostor
5-si es un impostor, mostrar, si no lo es elminar al judador selecionado, y cada vez mostrar los restantes
6-Si gana o pierde, lanzar una alerta
*/

//users validation
function validation(users) {
  while (users == "" || users == null) {
    users_array[i] = prompt(`Enter nickname player ${i + 1} correctly`);

    if (users_array[i] != "" && users_array[i] != null) {
      break;
    }
  }
}

//Pedir jugadores
var users_array = new Array(5);

for (var i = 0; i < 5; i++) {
  users_array[i] = prompt(`Enter nickname for player ${i + 1}`);
  validation(users_array[i]);
}

document.write("<h1>Jugadores:</h1>");
document.write("<ul>");

users_array.forEach((element, index, array) => {
  document.write("<li>" + (index + 1) + "- " + element + "</li>");
});

document.write("</ul>");

const num = Math.floor(Math.random() * 4 + 1); //random selection of impostor

const impostor = users_array[num]; //escoger del array al impostor

console.log(impostor);

/*************  FIN DE PUNTOS 1, 2 y 3   ************ */

//Inicio siguientes puntos

setTimeout(() => {
  var find_impostor = prompt("¿Quién crees que es el impostor?");

  function validate(peticion) {
    while (
      peticion == "" ||
      peticion == null ||
      !users_array.includes(peticion)
    ) {
      if (peticion == "" || peticion == null) {
        peticion = prompt("Di quién es el impostor de forma correcta");
      }

      if (!users_array.includes(peticion)) {
        result = prompt(`Player '${peticion}' no exists, try again!`);
      } else {
        result = peticion;
        return result;
      }

      if (peticion != "" && peticion != null) {
        break;
      }
    }
  }
  validate(find_impostor);

  var arraytoString = users_array.join(); //convierto a string el array de jugadores
  var result = arraytoString.match(find_impostor);
  console.log(result);
  if (result == null) {
    validate(result);
  }


  console.log(result);

  console.log("-------")
  console.log(find_impostor); //identifico la eleccion del jugador por indice

  //var election_index3 = index3;
}, 3000); /* var search_index = lenguages.findIndex(lenguage=> lenguage == "JS"); 
   
      users_array.splice(index, 1, "");
      console.log(users_array);
    }
    var div_impostor = document.querySelector(".impostor");
    var div_players = document.querySelector(".players");
    if (index3 != impostor) {
      alert(index3 + " No es el impostor");
      div_impostor.innerHTML = `<h1>Quedan ${users_array.length} jugadores:</h1><ul>`;

      users_array.forEach((element, index, array) => {
        div_players.innerHTML = `<li> ${index + 1} ${element} </li>  </ul>`;
      });

      peticion = prompt("Intenta de nuevo encontrar al impostor");
      while (peticion == "" || peticion == null) {
        if (peticion == "" || peticion == null) {
          peticion = prompt("Di quién es el impostor de forma correcta");
        }

        if (peticion != "" && peticion != null) {
          break;
        }
      }
    } else {
      alert(impostor + " es el impostor");
      alert("¡Has ganado!");
      break;
    }
    console.log(index);
  }
}, 3000); */
/* console.log(users_array[peticion]) */
/* while (!index.includes()) {
    if (index > -1) {
      if (index == num) {
        alert(impostor + " es el impostor");
        alert("Has ganado"); //else if(!index.includes(peticion)){
        `Player ${peticion} no exists, try again!`
      }
        break;
      } //puede servir
       var search = users_array.find(user => user == index3);
            console.log("search " + search);
            var resultIndex = users_array.indexOf(users_array[]); */
