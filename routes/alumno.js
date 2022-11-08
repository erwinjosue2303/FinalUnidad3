const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaalumno = new eschema({
    nombre: String, 
    carnet: String, 
    email: String,
    entradahora: String,
    salidahora: String, 
    idalumno: String
})

const ModeloAlumno = mongoose.model('alumnos', eschemaalumno)

module.exports = router


/* router.get('/ejemplo', (req, res)=>{
    res.end('Saludo carga desde ruta ejemplo')
}) */

//Agregar Alumnos
router.post('/agregaralumno', (req, res) =>{
    const nuevoalumno = new ModeloAlumno({
        nombre: req.body.nombre,
        carnet: req.body.carnet,
        email: req.body.email,
        entradahora: req.body.entradahora,
        salidahora: req.body.salidahora,
        idalumno: req.body.idalumno

    })
    nuevoalumno.save(function(err){
        if(!err){
            res.send('Usuario agregado correctamente!!!')
        }else{
            res.send(err)
        }
    })
})

//Obtener todos los alumnos
router.get('/obteneralumno', (req, res) =>{
    ModeloAlumno.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Obtener data de alumno
router.post('/obtenerdataalumno', (req, res) =>{
    ModeloAlumno.find({idalumno:req.body.idalumno}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Actualizar alumno

router.post('/actualizaalumno', (req, res) =>{

   ModeloAlumno.findOneAndUpdate({idalumno:req.body.idalumno}, {
    nombre: req.body.nombre,
    carnet: req.body.carnet,
    email: req.body.email,
    entradahora: req.body.entradahora,
    salidahora: req.body.salidahora
   }, (err) => {
    if(!err){
        res.send('Alumno actualizado correctamente!')
    }else{
        res.send(err)
    }
   })
})

//Eliminar Alumno

router.post('/borraralumno', (req, res) =>{

    ModeloAlumno.findOneAndDelete({idalumno:req.body.idalumno}, (err) =>{
        if(!err){
            res.send('Alumno borrado correctamente!')
        }else{
            res.send(err)
        }
    })
 })

