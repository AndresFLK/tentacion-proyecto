import Button, { ButtonLink } from "../../components/Button";
import Form from "../../components/Form";

export default function Login(){



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
                        <Form items={['Correo Electronico', 'Contraseña']}>
                        <div class="d-grid">
                                <ButtonLink to={"/menu"} className="btn btn-primary btn-lg">Iniciar Sesion</ButtonLink>
                            </div>
                        </Form>
                        <br/><br/><br/>
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