import Button, { ButtonLink } from "../../components/Button"
import Form from "../../components/Form"

export default function CrearProveedor(){
    return(
        <section class="py-5">
        <div class="container px-5">
            <div style={{display: "flex", justifyContent: "center"}}>
                <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5" style={{width: "70%"}}>
                <div class="text-center mb-5">
                    
                        <h1 class="fw-bolder">Crear Item</h1>
                        <p class="lead fw-normal text-muted mb-0">Coloque el nombre del proveedor que desea agregar</p>
                </div>
                <Form items={['Nombre']}>
                <div class="text-center mb-5">
                <br /><br /><br />
                <ButtonLink to={"/proveedores"} className="btn btn-primary btn-lg" style={{margin: '0 30px 0 0'}}>Registrar</ButtonLink>
                        <Button className="btn btn-danger btn-lg">Cancelar</Button>
                    </div>
                </Form>
                </div> 
            </div>
        </div>
        </section>
    )
}