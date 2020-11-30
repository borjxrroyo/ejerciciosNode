// Las siguientes líneas de código hacen que el programa funcione.
const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.post('/bienvenida/', (req, res) => {
console.log(req.body.nombre)
const cadena = `Hola! ${req.body.nombre}`           // Se define una constante "cadena" que incluye un string con "Hola! " + la variable "nombre" pedida en la barra de direcciones
res.send(cadena)                                    // Guarda y muestra por pantalla una constante "cadena" con el saludo y el nombre introducido
})
app.get('/despedida/', (req, res) => {                   // La aplicación utiliza el apartado "despedida" de Localhost:5000 -> Como si fuera http://miweb.com/despedida/
const cadena = `Adiós! ${req.query.nombre}`         // Se define una constante "cadena" que incluye un string con "Adiós! " + la variable "nombre" pedida en la barra de direcciones
res.send(cadena)                                    // Muestra por pantalla una constante "cadena" con un string que contiene "Adiós! " + la variable "nombre"
})
app.listen(5000, '127.0.0.1', () => console.log('Servidor preparado: 127.0.0.1:5000'))  // La aplicación manda un mensaje de CONSOLA conforme el servidor se está ejecutando en la dirección indicada

// Para detener el servidor se debe utilizar Ctrl + C