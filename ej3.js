// Las siguientes 3 líneas de código hacen que el programa funcione.
const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}))


app.get('/saludo/', (req, res) => {                                        // La aplicación utiliza el apartado "saludo" de Localhost:5000 -> Como si fuera http://miweb.com/saludo/

const cadena = `Hola! ${req.query.nombre}`
// Se define una constante "cadena" que incluye un string con "Hola" + la variable "nombre" pedida en la barra de direcciones

res.send(cadena)                                                           // La aplicación devuelve el valor de la constante "cadena" con el nombre obtenido en la barra
})
app.listen(5000, () =>                                                     // La aplicación se posiciona en el puerto 5000
console.log('Ir a dirección: localhost:5000/saludo/?nombre=tunombre'))     // La aplicación manda un mensaje de CONSOLA conforme el servidor se está ejecutando en la dirección indicada