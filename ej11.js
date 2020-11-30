// Las siguientes líneas de código hacen que el programa funcione.
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/mayoromenor/', (req, res) => {                   // La aplicación utiliza el apartado "mayoromenor" de Localhost:5000 -> Como si fuera http://miweb.com/mayoromenor/
const a = Number(req.query.primero)                        // Variable que almacena el primer número introducido
const b = Number(req.query.segundo)                        // Variable que almacena el segundo número introducido
let resultado = a>b ? `El mayor es ${a}`                   // Comprobación de cuál es mayor a cuál
: b>a
? `El mayor es ${b}` : `Son iguales`
res.send(resultado)                                        // Envío de resultado
})
app.all('/', (req, res) => {
res.send(`<p>Puedes ir a la siguiente dirección:
<br>localhost:5000/mayoromenor/?primero=5&segundo=9
<br><br> Cambiar valores y probar funcionamiento
`)                                                         // Instrucciones de uso
});
app.listen(5000, () => console.log('Servidor preparado: 5000'))  // Servidor en funcionamiento

/**************************** CON SENTENCIAS IF-ELSE ****************************/

/*

var resultado;

if (a > b) {
    resultado = "El mayor es A"
} else {
    resultado = "El mayor es B"
}

*/