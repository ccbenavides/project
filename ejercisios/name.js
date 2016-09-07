/*
var area;
var radio = 3;
var PI = 3.14;

function calculararea(parametro1){
    area = PI * (parametro1*parametro1)
    return area;
}

console.log(calculararea(radio));
*/
/*
var uno = prompt("ingrese un numero");
var dos = prompt("ingrese otro numero");

if(uno === dos){
    console.log("son iguales");

} else {
    console.log("son diferentes");
}*/
/*
var uno = prompt("ingrese un numero");
if(uno > 0){
    console.log("es positivo");
} else {
    consoe.log("es negativo");
}
*/
/*
var uno = prompt("ingrese un numero");
var dos = prompt("ingrese otro numero");

if(uno % dos === 0){
    console.log("son multiplos");
} else {
    console.log("no son multiplos");
} */
/*
var uno = prompt("ingrese un muero");
var dos = prompt("ingrese otro numero");

if(uno > dos){
    console.log("el primer numero es mayor");
} else {
    console.log("el segundo numero es mayor");
}
*/
/*
var uno = prompt("ingrese un muero");
var dos = prompt("ingrese otro numero");

if(uno > dos){
    console.log("el primer numero es mayor");
    } else if (dos > uno){

    } else {
        console.log("son iguales");
    }
    */
    /*
var uno = prompt("ingrese un muero");
var dos = prompt("ingrese otro numero");

if(uno > dos){
    console.log(uno, dos);
} else {
    console.log(dos, uno);
} */
/*
var uno = prompt("ingrese un muero");
var dos = prompt("ingrese otro numero");
var tres = prompt("ingrese otro numero");

if(uno >= dos && uno >= tres){
    console.log(uno, dos, tres);
} else if (dos >= uno && uno >= tres && dos >= tres){
    console.log(dos, uno, tres);
} else  {
    console.log(tres, dos, uno); 
}
  */
  /*
var numero = prompt("ingrese un numero entre 0 y 9.999");
console.log(numero.length);
*/
/*
var numero = pormpt("ingrese un numero entre 0 y 9.999");
if(numero < 0 && numero > 9.999){
    console.log("el numero es incorrecto");
} else {
    for(var uno = 0; ){

    }
}
*/
/*
var numero = prompt("ingrese un numero entre 0 y 9.999");
var convertir = numero.toString();
var alrevez = "";
if(numero >= 0 && numero <= 9999 ){
    console.log("el numero es correcto");
    for(var i = convertir.length -1; i >= 0; i-- ){
    alrevez = alrevez + convertir[i]
    } 
    if (alrevez === convertir){
        console.log("es capicua");
    } else {
        console.log("no es capicua");
    }
} else {
    console.log("el numero es incorrecto");
} 
*/

/*
var pokemon1 = {
    nombre : "charmander",
    tipo : "fuego",
    evolucion : "charmeleon",
    peso : 12,
    ataque : function(){
        console.log("lanzallamas");
    }
}

var pokemon2 = {
    nombre : "bulbasaur",
    tipo : "planta",
    evolucion : "ivysaur",
    peso : 13,
    ataque : function(){
        console.log("latigosepa");
    }
}

var pokemon3 = {
    nombre : "squirtle",
    tipo : "agua",
    evolucion : "waltortle",
    peso : 14,
    ataque : function(){
        console.log("hidrobomba");
    }
}

// console.log(pokemon1.ataque());

class Pokemon {
    constructor(nombre, tipo, evolucion, peso, ataque){
        this.nombre = nombre;
        this.tipo = tipo;
        this.evolucion = evolucion;
        this.peso = peso;
        this.ataque = ataque;
    }
    metodo1(){
        console.log("nombre " + this.nombre +  " tipo "  + this.tipo +  " evolucion " + this.evolucion + " " + "peso " + this.peso + " " + "ataque " + " " + this.ataque);
    }
}
*/

var objeto = {
        titulo : "Free Speech Now  Brutal War on the Internet",
        mes_dia : "10 agosto",
        imagen : "url: https://cdn-images-1.medium.com/fit/t/800/240/0*eIftYj-G7GSiHZ_B.jpg",
        autor : "Anders Emil Maller",
        descripcion : "The internet has ruined...",
        favoritos : "100",
        respuestas : "31 responses",
        categoria : "trouble stories"
}