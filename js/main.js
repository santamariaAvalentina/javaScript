// asi haria sin array
const jugador1 = "messi"
const jugador2 = "dibu martinez"
const jugador3 = "cuti Romero"
const jugador4 = "lautaro martinez"
const jugador5 = "julian alvarez"

//agrego otro jugador
const jugador6 = "nico paz" //pero no es campion del mundo, o sea no es afin el dato con el resto 

//ARRAYS los datos tiene que ser integramente entre si SI O SI POR ESO YO ARMO LOS GRUPOS COMO DEBE SER

//EJEMPLO
//     ELECTRODOMESTICOS 
//     LAVARROPAS
//     TELEVISORES
//     TELEVISORES 4K
//     TELEVISORES 65´´

///O SEA 
// 1- DETERMINO QUE TAN ESPECIFICA VA A SER MI LISTA (Asi veo la info real y filtre por la necesidad del usurio)
// 2- ARMO EL ARRAY
//        el nombre es semantico y en plural (JUGADORES)

const jugadores = [ "messi","dibu martinez", "cuti Romero", "lautaro martinez", "julian alvarez"]

// pero para ver todos debo colocar indice que quiero ver

console.log(jugadores[3]) //nombre + numero que quiero ver

// si tengo muchos elementos como veo cuanto son??

console.log(jugadores.length)

//METODOS:

                                         //como AGREGO

//.push :arrega un elemento nuevo al final del array

jugadores.push("dybala") //(se agrega al final)

//.unshift :lo agrega al inicio
jugadores.unshift("paredes") // y tdo el indexado modifica la posicion o sea el indexado por eso no es muy recomendable

                                       //como ELIMINO???

//uso pop :elimino el ultimo elemento del array

jugadores.pop()//o seas alimino a dybala que fue el ultimo que lo agregue

//shift: quita el primero del array 
jugadores.shift()

                                    //Como BUSCO info??

//includes():es un booleano o sea busca si esta o no (true o false)

console.log(jugadores.includes("messi"))

console.log(jugadores.includes("julian")) //va a dar false por que busca el dato completo

//indexOf():busca un elemento y si lo encuantra devuelve el numero de indice y si no lo encuentra da -1

console.log(jugadores.indexOf("messi")) // 0

                                     //como ORDENO???

//sort :ordena alfabeticamente el array 

jugadores.sort()

//reverse(): invierte el array o sea el 0 es el 5 y el 5-> 0 (ojo altera el indexado)

juagadores.reverse()

//estos dos se pueden combinar son los unicos que se concatenan

jugadores.sort().reverse()

                               //como MEJORO LA VISUALIZACION


//.join(): netamente para visualizar info , o sea coloca strings entre medio de los elementos hace mas legible el dato, 
           //mas amigable la visuali

console.log(jugadores.join(" - "))

                                // ELIMINAR EN EL MEDIO 

//.splice():borra elementos , si o si necesita 2 valores por parametro para funcionar

jugadores.splice(2) //asi no funciona por que desaparece todo y deja solo 2 elementos por que puese 2 por que puse 1 solo valor 
                    //o sea le dije borra desde el indice en adelntye porque no le puse el stop

jugadores.splice(2,1)  //agrego el ultimo indice que le dice ¿cualtos elementos quiero borrar ? solo 1

//y si son 2 ?

jugadores.splice(2,2) //asi borra 2 

//si no son consecutivos es un splice por cada elemento

                            //ELIMINO Y AGREGO EN EL MEDIO

jugadores.splice(2,1, "tagliafico") //o sea elimino eld e la posiicon 2, solo ese por que puse 1 y agrego a tagliafico

                            //NO BORRES PERO AGREGA EN EL MEDIO

jugadores.splice(2,0, "Depol") //en la posison 2, no elimines nada 0 y agrega a "depol"


                             //como INTERACTUA EL USUARIO CON ESTO?? (VER CLASE CASI AL FINAL)


                             //COMO CORRO ESTO???
                            
const jugadores = [ "messi","dibu martinez", "cuti Romero", "lautaro martinez", "julian alvarez"]  

//CON FOR-OF: se usa para recorrer el array , para no usar el for normal y 
//            colocar la cantidad de elementos, y va ser menos pesada y con menos errores la estructura es mas simple

for(const jugador of jugadores){// la variable debe tener el singular del array "jugador", o sea para cada elemeto (jugador) del(of) array(jugadores)
    console.log ("Jugador: " + jugador) //va a mostrar hasta que vea el ultimo elemento del array
}


                            














