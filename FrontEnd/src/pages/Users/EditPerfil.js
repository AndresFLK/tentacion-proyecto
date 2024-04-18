import { useEffect, useState } from 'react';
import Button, { ButtonLink } from "../../components/Button";
import axios from '../API/axios';
const GET_URL = "/auth/profile";
const PUT_URL = "/auth/profile";

export default function FormEditPerfil(){

    var token = sessionStorage.getItem('token')
    
    const [cedula, setCedula] = useState();
    const [nombre, setNombre] = useState();
    const [primer_apellido, setPrimerApellido] = useState();
    const [segundo_apellido, setSegundoApellido] = useState();
    const [correo, setCorreo] = useState();

    useEffect(() => {
        axios.get(GET_URL,{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
        })
        .then(response => {
        console.log(response.data); // Handle the response data
        setCedula(response.data.cedula)
        setNombre(response.data.nombre)
        setPrimerApellido(response.data.primer_apellido)
        setSegundoApellido(response.data.segundo_apellido)
        setCorreo(response.data.correo)
        })
        .catch(error => {
        console.error("Error en la petición", error); // Handle the error
        });
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(PUT_URL, JSON.stringify({cedula, nombre, primer_apellido, segundo_apellido, correo}), {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
        })
        .then(response => {
        console.log(JSON.stringify(response?.data))
        alert("Modificacion Exitosa")
        window.location.href = '/perfil';
        })
        .catch(error => {// Handle the error
        });
    }

    return(
        <section class="py-5">
                <div class="container px-5">
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5" style={{width: "70%"}}>
                        <div class="text-center mb-5">
                            
                                <h1 class="fw-bolder">Modifique los Datos de su Perfil</h1>
                                <p class="lead fw-normal text-muted mb-0">Coloque los datos que desea cambiar</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="primer_apellido">Primer Apellido</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    id="primer_apellido"
                                    name="primer_apellido"
                                    value={primer_apellido}
                                    onChange={(e) => setPrimerApellido(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="segundo_apellido">Segundo Apellido</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    id="segundo_apellido"
                                    name="segundo_apellido"
                                    value={segundo_apellido}
                                    onChange={(e) => setSegundoApellido(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="correo">Correo Electronico</label>
                                <input
                                    className='form-control'
                                    type="text"
                                    id="correo"
                                    name="correo"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                />
                            </div>
                            <br/>
                            <div className="col-auto">
                            <div className="d-grid gap-2">
                                <button className="btn btn-primary profile-button btn-lg">Modificar Cuenta</button>
                            </div>
                            </div>
                            <br/>
                        </form>
                        <div class="text-center mb-5">
                                <Button className="btn btn-danger btn-lg">Cancelar</Button>
                            </div>
                        </div> 
                    </div>
                </div>
        </section>
    )
}