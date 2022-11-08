import axios from 'axios'
import React, { useEffect, useState} from 'react'
import AlumnosIndividual from './AlumnosIndividual'
function ListaAlumnos (){

    const[dataalumno, setdataalumno]=useState([])

    useEffect(()=>{
        axios.get('api/alumno/obteneralumno').then(res =>{
            console.log(res.data)
            setdataalumno(res.data)
        }).catch(err =>{
            console.log(err)
        })
    }, [])

    //Mapear lista de alumnos en Objeto alumno
    const listalumnos = dataalumno.map(alumno =>{
        return(
            <div>
                <AlumnosIndividual alumno={alumno}/>
            </div>
        )
    })



    return(
        <div>
            <h2> Lista de Alumnos </h2>
            {listalumnos}
        </div>
    )
}

export default ListaAlumnos