// Las siguientes 3 líneas de código hacen que el programa funcione.
const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}))

app.get('/saludo/', (req, res) => {                                  // La aplicación utiliza el apartado "saludo" de Localhost:5000 -> Como si fuera http://miweb.com/saludo/

const cadena = `Hola! ${req.query.nombre}`
// Se define una constante "cadena" que incluye un string con "Hola" + la variable "nombre" pedida en la barra de direcciones

res.send(cadena)                                                     // La aplicación devuelve el valor de la constante "cadena" con el nombre obtenido en la barra
})
app.all('/', (req, res) => {                                         // Al navegar a Localhost:5000 (directorio raíz) se ejecutará el siguiente bloque
res.send(`<p>Copia y pega:
<br>localhost:5000/saludo/?nombre=Borja
<br> en la barra de direcciones</p>
<br><br> Cambia el nombre por otro y comprueba su funcionamiento
`)                                                                   // Se manda un mensaje con las intrucciones de funcionamiento del programa
});
app.listen(5000, () => console.log('Servidor preparado: localhost:5000')) // La aplicación manda un mensaje de CONSOLA conforme el servidor se está ejecutando en la dirección indicada

// Para detener el servidor se debe utilizar Ctrl + C