/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
const nombre = "Brian"

if(nombre == Brian){
    console.log("Hola Brian")
}else{
    console.log("No eres Brian")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const usuario = "Pedro"
const contra = "xd123fgT"

if( usuario === "Pedro" && contra === "xd123fgT"){
    console.log("Usted se ha logeado")
}else{
  console.log("El usuario o la contrasena es incorrecta")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
const numero = 5
if(numero > 0){
    console.log("El numero es positivo")
}else if(numero < 0){
    console.log("El numero es negativo")
}else{
    console.log("El valor es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
const persona = "Junior"
const edad = 15

if(edad >= 18){
    console.log(`${persona} puede votar`)
}else {
    const falta = 18 - edad
    console.log(`${persona} no puede votar, le faltan ${falta} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const edad1 = 18

const comprobar = edad1 >= 18 ?  "adulto": "menor"
console.log(comprobar)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
const mes = 1
let estacion

switch(mes){
    case 1 :
    case 2 :
        estacion = "Verano"
        break
    case 3:
        estacion = "Verano/Otoño"
        break
    case 4 :
    case 5 :
        estacion = "Otoño"
         break
    case 6:
        estacion = "Otoño/Invierno"
        break
    case 7 :
    case 8 :
        estacion = "Invierno"
        break
    case 9:
        estacion = "Invierno/Primavera"
        break
    case 10 :
    case 11 :
        estacion = "Primavera"
        break
    case 12:
        estacion = "Primavera/Verano"
        break
    default:
        mes = "Numero de mes incorrecto"
}
console.log(estacion)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

let dias
switch(mes){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        dias = "Tu mes tiene 31 dias"
        break
    case 4: case 6: case 9: case 11:
         dias = "Tu mes tiene 30 dias"
         break
    case 2:
         dias = "Tu mes tiene 28 dias, 29 en los bisiestos"  
        break
    default:
        dias = "El mes no existe"  

}
console.log(dias)

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

const lenguaje = ingles
let mensaje

switch(lenguaje){
    case ingles:
        mensaje = "Hello"
        break
    case espanol:
        mensaje = "Hola"
        break
    case frances:
        mensaje = "Oi creo xd"
        break
    case portugues:
        mensaje = "OU amigou"
        break
    default:
        mensaje = "Mi base de datos es dimitou amigou"
}
console.log(mensaje)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
xd

// 10. Usa un switch para hacer de nuevo el ejercicio 7
xd