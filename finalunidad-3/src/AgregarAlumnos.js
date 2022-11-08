import React, {useState} from 'react'
import uniqid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'

function AgregarAlumnos (){


    //Hooks
    const [nombre, setNombre]= useState('')
    const [carnet, setCarnet]= useState('')
    const [email, setEmail]= useState('')
    const [entradahora, setHoraEntrada]= useState('')
    const [salidahora, setHoraSalida]= useState('')
    
    function agregarAlumno(){
            var alumno ={
            nombre: nombre, 
            carnet: carnet,
            email: email,
            entradahora: entradahora,
            salidahora: salidahora, 
            idalumno: uniqid()
        }
        console.log(alumno)

        axios.post('/api/alumno/agregaralumno', alumno)
        
        .then(res =>{
           // alert(res.data)
           Swal.fire('Felicidades','el usuario se creo con exito')
        })
        
        .then(err =>{console.log(err)})

    }

    return(
        <div className='container'>
            <div className='row'>
                    <h2 className='mt-4'> Crear un nuevo alumno </h2>
            </div>

            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <div className='mb-3'>
                        <label htmlFor='nombre' className='form-label'> Nombre </label>
                    </div>
                        <input type='text' className='form-control' value={nombre} onChange={(e)=> {setNombre(e.target.value)}}></input>

                    <div className='mb-3'>
                        <label htmlFor='carnet' className='form-label'> Carnet </label>
                        <input type='text' className='form-control' value={carnet} onChange={(e)=> {setCarnet(e.target.value)}}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'> Email </label>
                        <input type='email' className='form-control' value={email} onChange={(e)=> {setEmail(e.target.value)}}></input>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='entradahora' className='form-label'> Hora entrada </label>
                        <input type='text' className='form-control' value={entradahora} onChange={(e)=> {setHoraEntrada(e.target.value)}}></input>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='salidaHora' className='form-label'> Hora salida </label>
                        <input type='text' className='form-control' value={salidahora} onChange={(e)=> {setHoraSalida(e.target.value)}}></input>
                    </div>

                    <button onClick={agregarAlumno} className='btn btn-success'> Guardar </button>

                </div>
            </div>
            
        </div>
    )
}

export default AgregarAlumnos