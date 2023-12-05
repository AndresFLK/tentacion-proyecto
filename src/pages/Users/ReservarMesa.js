import Button, { ButtonLink } from "../../components/Button"
import Form from "../../components/Form"

export default function ReservarMesa(){
    return(
        <section class="py-5">
                <div class="container px-5">
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5" style={{width: "70%"}}>
                        <div class="text-center mb-5">
                            
                                <h1 class="fw-bolder">¡Bienvenido a Tentación!</h1>
                                <p class="lead fw-normal text-muted mb-0">Porfavor llena los datos para procesar tu reserva</p>
                        </div>
                        <Form items={['Cantidad de Comensales', 'Fecha', 'Nombre de la Reserva']}>
                        <br /><br /><br />
                        <div class="text-center mb-5">
                        <ButtonLink to={"/reserva"} className="btn btn-primary btn-lg" style={{margin: '0 30px 0 0'}}>Reservar</ButtonLink>
                                <Button className="btn btn-danger btn-lg">Cancelar</Button>
                            </div>
                        </Form>
                        </div> 
                    </div>
                </div>
        </section>
    )
}