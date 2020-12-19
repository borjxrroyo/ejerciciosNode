const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}))

const validar_cadena = (valor) => {
const resultado = (valor == "") ? 'esta vacio'
: isNaN(valor) ? "no es un número"
: Number(valor) // si
return resultado
}
const comprobar_edad = (valor) => {
return valor >= 18 ? ('Mayor de edad. Acceso permitido') : /* ¿Lo mismo que en el ejercicio 7? */
('Menor de edad. Acceso denegado')
}
app.get('/votar/', (req, res) => {
const respuesta = validar_cadena(req.query.edad)
const mensaje = (typeof respuesta == 'number')
? comprobar_edad(respuesta)
: respuesta
res.send(`La respuesta es: ${mensaje}`)
})

app.all('*',(req, res)=>{
res.send(`<h3> localhost:3000/votar/?edad=33 </h3>`)
})
app.listen(3000)
console.log("The server is listening on port 3000...")