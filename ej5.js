// Las siguientes 3 líneas de código hacen que el programa funcione.
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/convierte/', (req, res) => {                    // La aplicación utiliza el apartado "convierte" de Localhost:5000 -> Como si fuera http://miweb.com/convierte/
const euros = Number(req.query.euros)                     // Se almacena en la constante "euros" el valor que se introducirá en la barra de direcciones
const resultado = euros * 1.2                             // Se almacena en la constante "resultado" el valor introducido en la barra de direcciones multiplicado por 1.2
const cadena = `<h2> En dolares son: ${resultado}</h2>
`                                                         // Guarda y muestra por pantalla una constante "cadena" con un string que contiene el valor de la constante "resultado"
res.send(cadena)                                          // Podemos apreciar que en JS es válido utilizar strings con formatos HTML dentro.
})
app.all('/', (req, res) => {                              // Al navegar a Localhost:5000 (directorio raíz) se ejecutará el siguiente bloque
res.send(`<p>Copia y pega:
<br>localhost:5000/convierte/?euros=100
<br> en la barra de direcciones</p>
<br><br> Cambia el valor de los euros y comprueba su funcionamiento
`)                                                                        // Se manda un mensaje con las intrucciones de funcionamiento del programa
});
app.listen(5000, () => console.log('Servidor preparado: localhost:5000')) // La aplicación manda un mensaje de CONSOLA conforme el servidor se está ejecutando en la dirección indicada

// Para detener el servidor se debe utilizar Ctrl + C