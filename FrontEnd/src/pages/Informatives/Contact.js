import Button from "../../components/Button";
import Form from "../../components/Form";


export default function Contact(){


    return(
        <section class="py-5">
                <div class="container px-5">
                    <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div class="text-center mb-5">
                            <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i>
                            </div>
                                <h1 class="fw-bolder">Contacta con Nosotros</h1>
                                <p class="lead fw-normal text-muted mb-0">¡Nos encantaría saber que piensas!</p>
                        </div>
                        <Form items={['Correo Electronico', 'Nombre', 'Asunto', '¡Cuentanos!']}>
                            <div class="d-grid">
                                <Button className="btn btn-primary btn-lg disabled">Enviar</Button>
                            </div>
                        </Form>
                        
                    </div>
                    
                </div>
        </section>
    )
}