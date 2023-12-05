import Button, { ButtonLink } from "../../components/Button";
import Form from "../../components/Form";

export default function RegistroUsuario(){
    return(
        <section class="py-5">
                <div class="container px-5">
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5" style={{width: "70%"}}>
                        <div class="text-center mb-5">
                            
                                <h1 class="fw-bolder">¡Bienvenido a Tentación!</h1>
                                <p class="lead fw-normal text-muted mb-0">Coloca tus datos para crear tu cuenta</p>
                        </div>
                        <Form items={['Cedula', 'Nombre', 'Apellidos', 'Telefono', 'Direccion', 'Correo Electronico', 'Contraseña']}>
                        <div class="text-center mb-5">
                        <ButtonLink to={"/login"} className="btn btn-primary btn-lg" style={{margin: '0 30px 0 0'}}>Registrarse</ButtonLink>
                                <Button className="btn btn-danger btn-lg">Cancelar</Button>
                            </div>
                        </Form>
                        </div> 
                    </div>
                </div>
        </section>
    )
}