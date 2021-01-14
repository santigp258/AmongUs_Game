/*
Hacer un programa, funcionalidad de among us:
-pedir al jugador 5 jugadores
-mostrar el nombre de los jugador en una lista
-hacer validaciones, en las que no se permitan datos erroneos
-pedir al jugador quien es el impostor
-si es un impostor, mostrar, si no lo es elminar al judador selecionado, y cada vez mostrar los restantes
-Si gana o pierde, lanzar una alerta
*/

//function validate

function validation(users_consult, i) {
  while (users_consult == "" || users_consult == null) {
    users_array[i].name = prompt(
      "Añada el jugador número " + (i + 1) + " de forma correcta"
    );

    if (users_array[i].name != "" && users_array[i].name != null) {
      break;
    }
  }
}


//array players
let users_array = [];

//get players
for (let i = 0; i < 5; i++) {
  let users_consult = prompt("Introduce el jugador número " + (i + 1));
  let users = {
    id: 1 + i,
    name: users_consult,
  };
  users_array.push(users);
  validation(users_consult, i);
}
 
//show players
document.write('<h4>Players:</h4><ul>')

users_array.forEach((element, index) => {
    document.write(`<li>${index + 1} - ${element.name} </li>`)
})

document.write('</ul>');

//define impostor
let num = Math.floor((Math.random() * 5) + 1);

//const impostor = users_array[num].id;

//find impostor 


setTimeout(() => {
    let find_impostor = parseInt(prompt("Who is the impostor?"));
    while (isNaN(find_impostor)|| typeof find_impostor == 'string' || find_impostor <= 0 || find_impostor > users_array.length) {
            find_impostor = parseInt(prompt("Say who is the impostor correctly"));

        if (!isNaN(find_impostor) && typeof find_impostor !== 'string'  || find_impostor > 0 && find_impostor < users_array.length) {
            break;
        }
    }

    console.log(typeof find_impostor);
    console.log(find_impostor);
}, 4000);