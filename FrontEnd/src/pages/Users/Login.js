import { useEffect, useRef, useState } from "react";
import AuthContext from "../../Context/AuthProvider";
import { ButtonLink } from "../../components/Button";

import axios from "../../API/axios";
const LOGIN_URL = "/auth/login";

export default function Login(){
    
    const userRef = useRef();
    const errRef = useRef();

    const [cedula, setCedula] = useState();
    const [password, setPassword] = useState();
    const [errMsg, setErrMsg] = useState();

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [cedula, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post(LOGIN_URL, JSON.stringify({cedula, password}), 
                {
                    headers: {'Content-Type': 'application/json'}
                }
            );
            console.log(JSON.stringify(res?.data))

            const accessToken = res?.data?.token;

            sessionStorage.setItem('token', accessToken);
            console.log("Token almacenado:", sessionStorage.getItem('token'));

            setCedula('');
            setPassword('');
        }catch (err){
            console.error("Error en la petición", err);
        }
    }


    return(
        <section class="py-5">
                <div class="container px-5">
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div style={{width: "400px", height: "100%"}}>
                            <img style={{width: "100%", borderRadius: "20px 0 0 20px"}} src="https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">

                            </img>
                        </div>
                        <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5" style={{width: "70%"}}>
                        <div class="text-center mb-5">
                            
                                <h1 class="fw-bolder">¡Bienvenido a Tentación!</h1>
                                <p class="lead fw-normal text-muted mb-0">Coloca tus datos para Iniciar Sesion</p>
                        </div>
                        <div class="row gx-5 justify-content-center">
                            <div class="col-xl-8">
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
                                        <button className="btn btn-primary btn-lg">Iniciar Sesion</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                        <br/><br/>
                        <div class="text-center mb-5">
                            <ButtonLink to={"/registro"} className="btn btn-primary btn-lg" style={{margin: '0 30px 0 0'}}>Crear una Cuenta</ButtonLink>
                            <ButtonLink to={"/recuperarcontra"} className="btn btn-outline-dark btn-lg px-4">Olvide mi Contraseña</ButtonLink>
                        </div>
                        </div> 
                    </div>
                </div>
        </section>
    )
}