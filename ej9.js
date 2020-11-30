// Las siguientes líneas de código hacen que el programa funcione.
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/convierte/', (req, res) => {                    // La aplicación utiliza el apartado "convierte" de Localhost:5000 -> Como si fuera http://miweb.com/convierte/
const euros = Number(req.query.euros)                     // Se define una constante "euros" que incluye la cantidad de euros pedida en la barra de direcciones
const resultado = euros * 1.2                             // Se define una constante "resultado" que almacena el dato introducido y lo multiplica por 1.2
const cadena = `<h2> Resultado de la conversión </h2>
<p> La cantidad de ${euros}
convertida a dolares son: </p>
<h3> ${resultado} </h3>
<p> Gracias por utilizar este conversor </p>
`
res.send(cadena)                                          // Muestra por pantalla una constante "cadena" con el resultado
})
app.all('/', (req, res) => {
res.send(`<p>Puedes ir a la siguiente dirección:
<br>localhost:5000/convierte/?euros=100
<br><br> Cambiar número de euros y probar funcionamiento
`)                                                        // Instrucciones de funcionamiento
});
app.listen(5000, () => console.log('Servidor preparado: 5000'))    // Confirmación de ejecución