/*
Hacer un programa, funcionalidad de among us:
-pedir al jugador 5 jugadores
-mostrar el nombre de los jugador en una lista
-hacer validaciones, en las que no se permitan datos erroneos
-pedir al jugador quien es el impostor
-si es un impostor, mostrar, si no lo es elminar al judador selecionado, y cada vez mostrar los restantes
-Si gana o pierde, lanzar una alerta
*/

//functions
function validation(users_consult, i) {
  while (!expresions.users.test(users_consult)) {
    users_array[i].name = prompt(
      "Añada el jugador número " + (i + 1) + " de forma correcta"
    );

    if (expresions.users.test(users_array[i].name)) {
      break;
    }
  }
}

function showUsers() {
  document.write("<h4>Players:</h4><ul>");

  users_array.forEach((element, index) => {
    document.write(`<li>${element.id} - ${element.name} </li>`);
  });

  document.write("</ul>");
}

//Expressions validate
const expresions = {
  users: /^[A-Za-z0-9_]{1,20}$/,
  find_impostor: /^[1-5]{1}$/,
};
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
showUsers();
console.log(users_array);

//define impostor
let num = Math.floor(Math.random() * 4 + 1); //generate random number from 1 to 5

const id_impostor = users_array[num].id;
console.log(id_impostor);
//console.log(impostor);
setTimeout(() => {
  let find_impostor = parseInt(prompt("Who is the impostor?"));
  while (!expresions.find_impostor.test(find_impostor)) {
    find_impostor = parseInt(
      prompt("Say who the impostor is. Choose numbers from 1 to 5")
    );
    if (expresions.find_impostor.test(find_impostor)) {
      break;
    }
  }
  const found = users_array.find((element) => element.id == find_impostor); //separate element selected for user
  const impostor = users_array.find((element) => element.id == id_impostor); //object impostor

  const indexElement = (element) => element == found; //find element index selected for user
  let index = users_array.findIndex(indexElement);
  console.log(found);
  if(found.id !== id_impostor){
    users_array.splice(index, 1);
    showUsers();
}
  //let index = users_array.indexOf(found);
  // console.log(index);
  /*   console.log(typeof find_impostor);
    console.log(find_impostor);
    console.log(users_array.length); */
}, 4000);
