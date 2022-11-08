import axios from 'axios'
import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
function AlumnosIndividual ({alumno}){

    const navegar = useNavigate()
    //Funcion para borrar alumno
    function borraralumno(idalumno){
        axios.post('/api/alumno/borraralumno', {idalumno: idalumno}).then(res =>{
            console.log(res.data)
           alert(res.data)
           navegar(0)
        }).catch(err => {
            console.log(err)
        })
    }



    return(
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6 offset-3'>
                    <ul className='list-group'>
                        <li className='list-group-item'>{alumno.idalumno}</li>
                        <li className='list-group-item'>{alumno.nombre}</li>
                        <li className='list-group-item'>{alumno.carnet}</li>
                        <li className='list-group-item'>{alumno.email}</li>
                        <li className='list-group-item'>{alumno.entradahora}</li>
                        <li className='list-group-item'>{alumno.salidahora}</li>
                    </ul>

                    <Link to={`/editaralumno/${alumno.idalumno}`}> <li className='btn btn-success'> Editar</li></Link>
                    &nbsp;
                    <button className='btn btn-danger' onClick={()=>{borraralumno(alumno.idalumno)}}>Eliminar</button>
                    <hr className='mt-4'></hr>
                </div>
                
            </div>
        </div>
    )
}

export default AlumnosIndividual