//Declaramos 2 "variables", una A (que contenga el string "Hola") y una B (que contenga el string " mundo!")

const a = "Hola"
let b = " mundo!"

// const : define constantes. Tiene alcance de bloque, como let.
// var :   define variables con un alcance de función.
// let :   define variables con un alcance de bloque y a partir de la línea en la que se declaran.

console.log(`Constante a contiene ${a}`)
console.log(`Variable b contiene ${b}`)
console.log(`La concatenación es `, a + b )

/* Las 3 instrucciones anteriores escriben EN LA CONSOLA los strings pedidos, los cuales indicarán:

- El contenido de la constante A
- El contenido de la variable B
- La concatenación de ambos elementos

*/

// Cabe destacar que los textos y variables pueden juntarse utilizando comillas dobles y nombres de variables:    "Hola " + NombreUsuario
// O bien encerrando el texto entre acentos abiertos (`) e incluyendo las variables dentro, tal que así:          `Hola ${NombreUsuario}`