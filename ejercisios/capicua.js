/*
console.log(cadena[0]);
console.log(cadena[1]);
console.log(cadena[2]);
console.log(cadena[3]);
console.log(cadena[cadena.length-1]);
console.log(cadena.length);
*/
// recorriendo un array al revez

// de mayor a menor
/*for (var i = 0; i < cadena.length; i++) {
  console.log(cadena[i]);
    
}*/


var cadena = "65438";
var alrevez = "";
// de menor a mayor
for (var i = cadena.length -1 ; i >= 0; i--) {
    // console.log(cadena[i]);
    alrevez = alrevez + cadena[i];
}  

console.log(alrevez);
console.log(cadena);