const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

calcula = (valor) => {
numero = Number(valor)
const resultado = numero / 1.2;  /* Se cambia el cálculo */
return resultado
}
app.get('/convierte/', (req, res) => {
const euros = calcula(req.query.dolares)                            /* Y también el nombre de las variables */
const cadena = `<p> La cantidad de ${req.query.dolares} dólares
convertida a euros son: </p>
<h3> ${euros} </h3>
`
res.send(cadena)
})

app.all('/', (req, res) => {
res.send(`<p>Puedes ir a la siguiente dirección:
<br>localhost:5000/convierte/?euros=100
<br><br> Cambiar número de euros y probar funcionamiento
`)
});

app.listen(5000, () => console.log('Server ready on localhost:5000'))