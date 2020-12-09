// Las siguientes líneas de código hacen que el programa funcione.
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/convierte/', (req, res) => {                    // La aplicación utiliza el apartado "convierte" de Localhost:5000 -> Como si fuera http://miweb.com/convierte/
const celsius = Number(req.query.celsius)         
const fahrenheit = Number(req.query.fahrenheit)
const resultado_f = (celsius * 1.8) + 32     
const resultado_c = (fahrenheit - 32) / 1.8
const cadena = `<h2> Resultado de la conversión </h2>
<p> La cantidad de ${celsius} celsius
convertida a fahrenheit son: </p>
<h3> ${resultado_f} </h3>
<br>
<p> La cantidad de ${fahrenheit} fahrenheit
convertida a celsius son: </p>
<h3> ${resultado_c} </h3>
<p> Gracias por utilizar este conversor </p>
`
res.send(cadena)                                          // Muestra por pantalla una constante "cadena" con el resultado
})
app.all('/', (req, res) => {
res.send(`<p>Puedes ir a la siguiente dirección:
<br>localhost:5000/convierte/?celsius=100 || localhost:5000/convierte/?fahrenheit=100
<br><br> Cambiar número de euros y probar funcionamiento
`)                                                        // Instrucciones de funcionamiento
});
app.listen(5000, () => console.log('Servidor preparado: 5000'))    // Confirmación de ejecución
