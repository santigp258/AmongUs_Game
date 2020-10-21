'use strict'

/*
Hacer un programa, funcionalidad de among us:
-pedir al jugador 5 jugadores
-mostrar el nombre de los jugador en una lista
-hacer validaciones, en las que no se permitan datos erroneos
-pedir al jugador quien es el impostor
-si es un impostor, mostrar, si no lo es elminar al judador selecionado, y cada vez mostrar los restantes
-Si gana o pierde, lanzar una alerta
*/

//users
    var user = prompt("Añada su primer jugador");
    var user2 = prompt("Añada su segundo jugador");
    var user3 = prompt("Añada su tercer jugador");
    var user4 = prompt("Añada su cuarto jugador");
    var user5 = prompt("Añada su quinto jugador");


    while(user == "" || user == null || user2 == "" || user2 == null || 
    user3 == "" || user3 == null || user4 == "" || user4 == null || user5 == "" || user5 == null){
        
        if(user == "" || user == null){
            user = prompt("Añada su primer jugador de forma correcta");
        }
        if(user2 == "" || user2 == null){
            user2 = prompt("Añada su segundo jugador de forma correcta");
        }
        if(user3 == "" || user3 == null){
            user3 = prompt("Añada su tercer jugador de forma correcta");
        }
        if(user4 == "" || user4 == null){
            user4 = prompt("Añada su cuarto jugador de forma correcta");
        }
        if(user5 == "" || user5 == null){
            user5 = prompt("Añada su quinto jugador de forma correcta");
        }

        if(user != "" && user != null && user2 != "" && user2 != null  
        && user3 != "" && user3 != null  && user4 != "" && user4 != null && user5 != "" && user5 != null ){
            break;
        }
    }

    var users_array = [user, user2, user3, user4, user5];
    
    document.write("<h1>Jugadores:</h1>");
    document.write("<ul>");

    users_array.forEach((element, index, array)=>{
        document.write("<li>" + index + "- " + element + "</li>");
    });

    document.write("</ul>");

    var num = Math.floor((Math.random() * 4) + 1); 

    const impostor = users_array[num];

  
    setTimeout(()=>{
       
        var peticion = prompt("¿Quién crees que es el impostor? Selecciona un numero del 0 al 4");
        while(peticion == "" || peticion == null){
                if(peticion == "" || peticion == null){
                    peticion = parseInt(prompt("Di quién es el impostor de forma correcta"));
                }

                if(peticion != "" && peticion != null ){
                    break;
                }                
        }
      
        var index = users_array.indexOf(users_array[peticion]);
        var index2 = users_array.join();
        var index3 = index2.match(users_array[peticion]);
       /* console.log(users_array[peticion]) */
        while(index > -1){
           
             index = users_array.indexOf(users_array[peticion]);
         if(index > -1 ){
                if(index == num){
                    alert(impostor + " es el impostor"); 
                    alert("Has ganado");
                    break;
                    
                } 
                var search = users_array.find(user=> user == index3);
                /* var search_index = lenguages.findIndex(lenguage=> lenguage == "JS"); */
                
                users_array.splice(index3, 1);
                console.log("se ha elminado");
                console.log(users_array);
                
            }
            
            if(index3 != impostor){
                alert(users_array[index] + " No es el impostor");
                document.write("<h1>Quedan " + users_array.length + " jugadores:</h1>");
                document.write("<ul>");
    
            users_array.forEach((element, index, array)=>{
                document.write("<li>" + index + "- " + element + "</li>");
            });
    
            document.write("</ul>");
        
                peticion = prompt("Intenta de nuevo encontrar al impostor");
        while(peticion == "" || peticion == null){
        
            if(peticion == "" || peticion == null){
                peticion = prompt("Di quién es el impostor de forma correcta");
            }
        
            if(peticion != "" && peticion != null){
                break;
            }
                }
            
            }else{
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



 






