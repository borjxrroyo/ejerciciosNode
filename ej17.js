const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}))

/*****************************************************************
SyntaxError: Unexpected end of input
    at wrapSafe (node:internal/modules/cjs/loader:1018:16)
    at Module._compile (node:internal/modules/cjs/loader:1066:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1131:10)
    at Module.load (node:internal/modules/cjs/loader:967:32)
    at Function.Module._load (node:internal/modules/cjs/loader:807:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:76:12)
    at node:internal/main/run_main_module:17:47
*****************************************************************/

const validar_cadena = (valor) => {
const resultado = (valor == "") ? 'está vacio'
: isNaN(valor) ? "no es un número"
: Number(valor) // si
return resultado
}
/*const comprobar_edad = (valor) => {
return valor >= 18 ? ('Mayor de edad. Acceso permitido') :
('Menor de edad. Acceso denegado')
}*/

const comprobar_edad = (valor) => {
    if (valor >= 18){
        alert("Mayor de edad, acceso permitido.");
    } else {
        alert("Menor de edad, acceso denegado.");
    }
    if (valor > 120 || valor < 1){
        alert("Error. Edad no permitida.");
    }

app.get('/votar/', (req, res) => {
const respuesta = validar_cadena(req.query.edad)
const mensaje = (typeof respuesta == 'number')
? comprobar_edad(respuesta)
: respuesta
res.send(`La respuesta es: ${mensaje}`)
})

app.get('/ciudad/', (req, res) => {
    const respuestacity = validar_cadena(req.query.ciudad)
    const mensaje = (typeof respuestacity == 'string')
    ? comprobar_ciudad(respuestacity)
    : respuestacity
    res.send(`La respuesta es: ${mensaje}`)
    })

const comprobar_ciudad = (valorcity) => {
    if (valorcity == "Palma"){
        alert("Permitido.");
    } else {
        alert("No permitido.");
    }

app.all('*',(req, res)=>{
res.send(`<h3> localhost:3000/votar/?edad=33 </h3>`)
})
app.listen(3000)
console.log("El servidor está escuchando en el puerto 3000")