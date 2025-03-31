/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let a = 2
let b = 4

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a ** b)
console.log(a % b)
a++
console.log(a)
b--
console.log(b)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let c = 10
let d = 11

console.log(c>d)
console.log(c<d)
console.log(c>=d)
console.log(c<=d)
console.log(c==10)
console.log(c==d)
console.log(c===d)
console.log(d===11)
console.log(c!=d)
console.log(c!==d)


// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let v = 6
let j = 5

console.log(v>j)
console.log(v>=j)
console.log(v==6)
console.log(v===v)
console.log(v!=j)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(j>v)
console.log(v<=j)
console.log(v==j)
console.log(v==="6")
console.log(v!==v)

// 5. Utiliza el operador lógico and

console.log(j > v && v < j)

// 6. Utiliza el operador lógico or

console.log(j < v || v == 6)

// 7. Combina ambos operadores lógicos

console.log(j < v && j < 10 || v >= j)

// 8. Añade alguna negación

console.log(!(j < v && j < 10 || v >= j))

// 9. Utiliza el operador ternario

v == 6 ? console.log("v es 6") : console.log("v no es 6")

// 10. Combina operadores aritméticos, de comparáción y lógicas

let numero = 1
let numero2 = 2

console.log((!(numero+numero2 > 1)&&(numero2>numero))||(numero==1))