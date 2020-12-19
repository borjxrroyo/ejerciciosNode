const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

vernota = (numero) => {
let resultado = numero > 4 ? "Aprobado" : "Suspendido"
return resultado
}
inicia = () => {
const valor = Number(txt1.value)
vernota(valor)
}



app.get('/aprosuspen/', (req, res) => {
const euros = vernota(req.query.numero)                            /* Y también el nombre de las variables */
const cadena = `<p> Con un ${req.querynumero}, tu nota es: </p>
<h3> ${resultado} </h3>
`
res.send(cadena)
})

app.all('/', (req, res) => {
res.send(`<p>Puedes ir a la siguiente dirección:
<br>localhost:5000/aprosuspen/?numero=10
<br><br> Cambiar número de nota y probar funcionamiento
`)
});

app.listen(5000, () => console.log('Servidor preparado, puerto 5000'))

/*

ReferenceError: resultado is not defined
    at D:\Archivos\Asignaturas FP\Repositorios\ejerciciosNode\ej4f_express.js:19:8
    at Layer.handle [as handle_request] (D:\Archivos\Asignaturas FP\Repositorios\ejerciciosNode\node_modules\express\lib\router\layer.js:95:5)
    at next (D:\Archivos\Asignaturas FP\Repositorios\ejerciciosNode\node_modules\express\lib\router\route.js:137:13)
    at Route.dispatch (D:\Archivos\Asignaturas FP\Repositorios\ejerciciosNode\node_modules\express\lib\router\route.js:112:3)
    at Layer.handle [as handle_request] (D:\Archivos\Asignaturas FP\Repositorios\ejerciciosNode\node_modules\express\lib\router\layer.js:95:5)
    at D:\Archivos\Asignaturas FP\Repositorios\ejerciciosNode\node_modules\express\lib\router\index.js:281:22
    at Function.process_params (D:\Archivos\Asignaturas FP\Repositorios\ejerciciosNode\node_modules\express\lib\router\index.js:335:12)
    at next (D:\Archivos\Asignaturas FP\Repositorios\ejerciciosNode\node_modules\express\lib\router\index.js:275:10)
    at urlencodedParser (D:\Archivos\Asignaturas FP\Repositorios\ejerciciosNode\node_modules\body-parser\lib\types\urlencoded.js:91:7)
    at Layer.handle [as handle_request] (D:\Archivos\Asignaturas FP\Repositorios\ejerciciosNode\node_modules\express\lib\router\layer.js:95:5)

*/