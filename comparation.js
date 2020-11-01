

setTimeout(() => {

    var peticion = prompt("¿Quién crees que es el impostor?");
    while (peticion == "" || peticion == null) {
        if (peticion == "" || peticion == null) {
            peticion = prompt("Di quién es el impostor de forma correcta");
        }

        if (peticion != "" && peticion != null) {
            break;
        }
    }

    var index = users_array.indexOf(users_array[peticion]);
    var index2 = users_array.join();
    var index3 = index2.match(users_array[peticion]);
    /* console.log(users_array[peticion]) */
    while (index > -1) {

        index = users_array.indexOf(users_array[peticion]);
        if (index > -1) {
            if (index == num) {
                alert(impostor + " es el impostor");
                alert("Has ganado");
                break;

            }
            var search = users_array.find(user => user == index3);
            console.log("search " + search);
            /* var resultIndex = users_array.indexOf(users_array[]); */ //puede servir
            /* var search_index = lenguages.findIndex(lenguage=> lenguage == "JS"); */

            users_array.splice(index3, 1, "");
            console.log("se ha elminado");
            console.log(users_array);

        }

        if (index3 != impostor) {
            alert(users_array[index] + " No es el impostor");
            document.write("<h1>Quedan " + users_array.length + " jugadores:</h1>");
            document.write("<ul>");

            users_array.forEach((element, index, array) => {
                document.write("<li>" + index + "- " + element + "</li>");
            });

            document.write("</ul>");

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

}, 5000);



/*   users_array.forEach((element, index, array)=>{
      console.log("<li>" + index + "- " + element + "</li>");
  }); */

console.log(impostor);

console.log(num);
console.log(users_array);