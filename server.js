const express = require ('express')
const app = express()

//Importar conexion MongoDB
const archivoBD = require('./connection')

//Importacion del archivo de rutas y modelo alumno

const rutasalumno = require('./routes/alumno')

//Importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))


app.use('/api/alumno', rutasalumno)

app.get('/', (req, res) =>{
    res.end('Bienvenidos al servidor backend Node.js. Corriendo')
})

app.listen(5000, function(){
    console.log('El servidor NODE2 esta corriendo correctamente')
})