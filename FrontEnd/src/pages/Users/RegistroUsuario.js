import { useEffect, useRef, useState } from "react";

import axios from "../../API/axios";
const REGISTER_URL = "/auth/register";

export default function RegistroUsuario(){

    const userRef = useRef();

    const [cedula, setCedula] = useState();
    const [password, setPassword] = useState();
    const [nombre, setNombre] = useState();
    const [primer_apellido, setPrimerApellido] = useState();
    const [segundo_apellido, setSegundoApellido] = useState();
    const [correo, setCorreo] = useState();

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post(REGISTER_URL, JSON.stringify({cedula, password, nombre, primer_apellido, segundo_apellido, correo}), 
                {
                    headers: {'Content-Type': 'application/json'}
                }
            );
            console.log(JSON.stringify(res?.data))
            window.location.href = '/login';
            

        }catch (err){
            console.error("Error en la petición", err);
        }
    }

    return(
        <section class="py-5">
                <div class="container px-5">
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5" style={{width: "70%"}}>
                        <div class="text-center mb-5">
                            
                                <h1 class="fw-bolder">¡Bienvenido a Tentación!</h1>
                                <p class="lead fw-normal text-muted mb-0">Coloca tus datos para crear tu cuenta</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                                    <label htmlFor="cedula">Cedula</label>
                                    <input 
                                        className="form-control"
                                        type="text"
                                        id="cedula"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setCedula(e.target.value)}
                                        value={cedula}
                                        required 
                                    />
                                    <label htmlFor="nombre">Nombre</label>
                                    <input 
                                        className="form-control"
                                        type="text"
                                        id="nombre"
                                        onChange={(e) => setNombre(e.target.value)}
                                        value={nombre}
                                        required 
                                    />
                                    <label htmlFor="primer_apellido">Primer Apellido</label>
                                    <input 
                                        className="form-control"
                                        type="text"
                                        id="primer_apellido"
                                        onChange={(e) => setPrimerApellido(e.target.value)}
                                        value={primer_apellido}
                                        required 
                                    />
                                    <label htmlFor="password">Segundo Apellido</label>
                                    <input 
                                        className="form-control"
                                        type="text"
                                        id="segundo_apellido"
                                        onChange={(e) => setSegundoApellido(e.target.value)}
                                        value={segundo_apellido}
                                        required 
                                    />
                                    <label htmlFor="correo">Correo Electronico</label>
                                    <input 
                                        className="form-control"
                                        type="email"
                                        id="correo"
                                        onChange={(e) => setCorreo(e.target.value)}
                                        value={correo}
                                        required 
                                    />
                                    <label htmlFor="password">Contraseña</label>
                                    <input 
                                        className="form-control"
                                        type="password"
                                        id="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        required 
                                    />
                                    <div class="d-grid">
                                    <br/><br/>
                                        <button className="btn btn-primary btn-lg">Crear una Cuenta</button>
                            
                                    </div>
                                </form>
                        </div> 
                    </div>
                </div>
        </section>
    )
}