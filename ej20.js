const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}))
const convertir_a_numero = (valor) => {
const convertido = valor == "" ? "esta vacio"
: isNaN(valor) ? "no es un número"
: Number(valor) // sí que convierte a numero
const valor_numerico = typeof(convertido)==='number'
? convertido
: 0
return { cantidad: valor_numerico, mensaje: convertido }
}
const seleccionar_factor = (moneda) => {
const factor_switch = (busca) => ({
"dolar": 1.2,
"euro": 0.82,
"libra": 0.8,
"peso": 2,
})[busca] || false
return (factor_switch(moneda))
}

app.get('/conversor/', (req, res) => {
const numeroValido = convertir_a_numero(req.query.cantidad)
const {cantidad, mensaje} = numeroValido
const factor = seleccionar_factor(req.query.divisa)
const resultado = cantidad ? (factor * cantidad)
: 'no puede calcularse'
res.write (`Resultado: ${resultado} `)
res.write (`Mensaje: ${mensaje}`)
res.end()
})
app.all('*',(req, res)=>{
res.send(`<h3> localhost:3000/conversor/?cantidad=100&divisa=dolar </h3>`)
})
app.listen(3000)
console.log("Puerto de servidor: 3000")