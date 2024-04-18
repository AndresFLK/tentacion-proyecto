import { useEffect, useRef, useState } from "react";

import axios from "../API/axios";
const REGISTER_URL = "/reservas/";

export default function ReservaUsuario(){

    const userRef = useRef();

    const token = sessionStorage.getItem('token');
    var userString = sessionStorage.getItem('user');
    var user = JSON.parse(userString);

    const [fecha, setFecha] = useState();
    const [nombre_reserva, setNombreReserva] = useState();
    const cedula = user.cedula

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(fecha,)
        console.log(nombre_reserva)
        console.log(cedula)


        try{
            const res = await axios.post(REGISTER_URL, JSON.stringify({fecha, nombre_reserva, cedula}), 
                {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `${token}`
                }
            });
            alert("Reserva Exitosa")
            window.location.href = '/perfil';
            

        }catch (err){
            alert("Error al Hacer la Reserva")
            console.error("Error en la petición", err);
        }
    }

    return(
        <section class="py-5">
                <div class="container px-5">
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5" style={{width: "70%"}}>
                        <div class="text-center mb-5">
                            <h1 class="fw-bolder">¡Ven a Tentación!</h1>
                            <p class="lead fw-normal text-muted mb-0">Coloca tus datos para reservar una mesa</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                                    <label htmlFor="cedula">Cedula</label>
                                    <input 
                                        className="form-control"
                                        type="text"
                                        id="cedula"
                                        ref={userRef}
                                        autoComplete="off"
                                        readOnly="true"
                                        value={user.cedula}
                                        required 
                                    />
                                    <label htmlFor="nombre_reserva">Cantidad de Personas</label>
                                    <input 
                                        className="form-control"
                                        type="text"
                                        id="nombre_reserva"
                                        onChange={(e) => setNombreReserva(e.target.value)}
                                        value={nombre_reserva}
                                        required 
                                    />
                                    <label htmlFor="fecha">Fecha de la Resera</label>
                                    <input 
                                        className="form-control"
                                        type="date"
                                        id="fecha"
                                        onChange={(e) => setFecha(e.target.value)}
                                        value={fecha}
                                        required 
                                    />
                                    
                                    <div class="d-grid">
                                    <br/><br/>
                                        <button className="btn btn-primary btn-lg">Hacer Reserva</button>
                            
                                    </div>
                                </form>
                        </div> 
                    </div>
                </div>
        </section>
    )
}