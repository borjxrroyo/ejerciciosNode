const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}))

validar = () => {
comprueba = (n1,n2) => {
const num1 = Number(n1)
const num2 = Number(n2)
const mensaje = (isNaN(num1) || isNaN(num2))
? "Algun num no es correcto"
: " Números correctos"
return mensaje
}
return comprueba
}
app.get('/entrada/', (req, res) => {
const numerosValidos = validar()
res.write(numerosValidos(req.query.valor1,req.query.valor2))
res.end()
})
app.all('*',(req, res)=>{
res.send(`<h3> localhost:3000/entrada/?valor1=4&ampvalor2=7 </h3>`)
})
app.listen(3000)
console.log("El servidor está escuchando en el puerto 3000...")  // Supongo que habría que meter un if (valor >= 0 && <= 120) pero... ¿dónde?