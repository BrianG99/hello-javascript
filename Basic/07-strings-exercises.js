/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let nombre = "Brian"
let apellido = "Garcia" 

console.log(`${nombre}  ${apellido}`)


// 2. Muestra la longitud de una cadena de texto
console.log(apellido.length)

// 3. Muestra el primer y último carácter de un string
console.log(apellido[0])
console.log(apellido[5])

console.log(`${apellido[0]} y ${apellido[5]}`)

// 4. Convierte a mayúsculas y minúsculas un string
console.log(nombre.toUpperCase())
console.log(nombre.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
console.log(`Esto
    es una 
    impreson
    en varias lineas`)

// 6. Interpola el valor de una variable en un string
let cantar = "Lala"
let reir = "JaJa"

console.log(`${cantar} y luego ${reir}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let palabra = " Hola como estas "

console.log(palabra.replace(/ /g, "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(palabra.includes("a"))

// 9. Comprueba si dos strings son iguales
let prueba = "hola"
let prueba1 = "hola"

console.log(prueba === prueba1)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(prueba.length === prueba1.length)