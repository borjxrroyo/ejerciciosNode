// Las siguientes 3 líneas de código hacen que el programa funcione.
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/iva/', (req, res) => {                          // La aplicación utiliza el apartado "iva" de Localhost:5000 -> Como si fuera http://miweb.com/iva/
const euros = Number(req.query.euros)                     // Se almacena en la constante "euros" el valor que se introducirá en la barra de direcciones
const resultado = euros * (21/100)                        // Se almacena en la constante "resultado" el valor introducido en la barra de direcciones multiplicado por 0.21 (Valor del IVA)

const cadena = `<h2> El valor del IVA para ${euros} es: ${resultado}</h2>

`                                                         // Guarda y muestra por pantalla una constante "cadena" con un string que contiene el valor del IVA respecto al número introducido
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