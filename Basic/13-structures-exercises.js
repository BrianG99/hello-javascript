/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let myArray = []
myArray = ["Gato", "Perro", "Vaca", "Caballo", "Loro"]
console.log(myArray)

// 2. Añade dos más. Uno al principio y otro al final
myArray.unshift("Toro")
myArray.push("Rinoceronte")

// 3. Elimina el que se encuentra en tercera posición
myArray.splice(2,1)
console.log(myArray)

// 4. Crea un set que almacene cinco libros
let mySet = new Set(["Juego de Tronos", "Necronomicon", "Maze Runner", "El Horror de Donwich", "Anibal"])

console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido
mySet.add("Juego de Tronos")
mySet.add("Pinocho")

// 6. Elimina uno concreto a tu elección
mySet.delete("Pinocho")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map ([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"]
])
console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

if(myMap.has(5)){
    if(myMap.get(5)){
     console.log(myMap.get(5))
 }
 }else{
     console.log("No es el 5to mes")
 }
// 9. Añade al mapa una clave con un array que almacene los meses de verano
let myArrayMap = ["Diciembre", "Enero", "Febrero", "Marzo"]
myMap.set("fechas", myArrayMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let experimento = ["hola", "brian"]
let experimento1 = new Set(experimento)
let experimento2 = new Map ([
  ["saludo", experimento1]])

console.log(experimento2)