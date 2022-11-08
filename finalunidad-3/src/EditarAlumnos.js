import axios from 'axios'
import React, { useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
function EditarAlumnos (){

    const params = useParams()

    const [nombre, setNombre]= useState('')
    const [carnet, setCarnet]= useState('')
    const [email, setEmail]= useState('')
    const [entradahora, setHoraEntrada]= useState('')
    const [salidahora, setHoraSalida]= useState('')


    //Para regresar al index
    const navegar = useNavigate()

    useEffect(() =>{
        axios.post('/api/alumno/obtenerdataalumno', {idalumno: params.idalumno}).then(res =>{
            console.log(res.data[0])
            const dataalumno = res.data[0]
            setNombre(dataalumno.nombre)
            setCarnet(dataalumno.carnet)
            setEmail(dataalumno.email)
            setHoraEntrada(dataalumno.entradahora)
            setHoraSalida(dataalumno.salidahora)
        })
    }, [])

    //Funcion que actualiza
    function editarAlumno(){
        //Nuevo objeto para actualizar el alumno
        const actualizaralumno ={
            nombre: nombre, 
            carnet: carnet,
            email: email,
            entradahora: entradahora,
            salidahora: salidahora, 
            idalumno: params.idalumno
        }

        //Hacer la peticion utilizando axios
        axios.post('/api/alumno/actualizaalumno', actualizaralumno)
        
        .then(res =>{
            console.log(res.data)
            Swal.fire('El alumno fue editado')
            navegar('/')
        })
        
        .then(err =>{console.log(err)})

    }
    return(
        <div className='container'>
            <div className='row'>
                    <h2 className='mt-4'> Editar Alumno </h2>
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

                    <button onClick={editarAlumno} className='btn btn-success'> Actualizar </button>

                </div>
            </div>
            
        </div>
    )
}

export default EditarAlumnos