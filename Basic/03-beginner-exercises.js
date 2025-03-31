/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//este es mi comentario en una linea 


// 2. Escribe un comentario en varias líneas

/* Este es mi comentario en multiples 
lineas o eso
quiero creer
*/


// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

var saludo = "Hola" 
let numero = 12
let numerodec = 12.3 
let isRaining = true
let biginit = 12n
let undefined
let symbol = Symbol("this is a symbol")
let estoNull = null

// 4. Imprime por consola el valor de todas las variables

console.log(saludo)
console.log(numero)
console.log(numerodec)
console.log(isRaining)
console.log(biginit)
console.log(undefined)
console.log(symbol)
console.log(null)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof(saludo))
console.log(typeof(numero))
console.log(typeof(numerodec))
console.log(typeof(isRaining))
console.log(typeof(biginit))
console.log(typeof(undefined))
console.log(typeof(symbol))
console.log(typeof(null))



// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

saludo = "Hey"
numero = 23
numerodec = 13.4
isRaining = false 
biginit = 123n
undefined = undefined 
symbol = Symbol("esto es raro?")
estoNull = null


// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

saludo = 12
numero = "12"
numerodec = "13.3"
isRaining = Symbol("ya no es booleano")
biginit = true 
undefined = null 
symbol = "esto sera string"
estoNull = undefined

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const saludos = "Buenos Dias"
const edad = 23
const altura = 1.65
const isCold = true
const bigInit = 12n 
const undefined1 = undefined
const symbol1 = Symbol("Esto es un symbol")
const null1 = null

// 9. A continuación, modifica los valores de las constantes
saludos = "Malos dias"
altura = 1.68
isCold = false
bigInit = 13n 
undefined1 = undefined
symbol1 = Symbol("Esto es un symbol errorificado")
null1 = null

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

/* El error que aparece para saludos, altura, isCold, bigInit, undefined1, symbol1 y null1 es: 
  Uncaught TypeError: Assignment to constant variable.
*/