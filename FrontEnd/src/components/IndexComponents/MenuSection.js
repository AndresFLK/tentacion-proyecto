import { ButtonLink } from "../Button"


export default function MenuSection(){
    return (
        <section class="py-5">
            <div class="container px-5 my-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6">
                        <div class="text-center">
                            <h2 class="fw-bolder">Un Vistazo a Nuestro Menu</h2> <br /><br />
                        </div>
                    </div>
                </div>
                <div class="row gx-5">
            <div class="col-lg-4 mb-5">
                <div class="card h-100 shadow border-0">
                    <img class="card-img-top" src="https://images.pexels.com/photos/6424962/pexels-photo-6424962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
                    <div class="card-body p-4">
                        <div class="badge bg-primary bg-gradient rounded-pill mb-2">#1 Más Pedido
                        </div>
                        <br /><br />
                        <a class="text-decoration-none link-dark stretched-link" href="#!">
                            <h4 class="card-title mb-3">Atún Tentación</h4>
                        </a>
                        <p class="card-text mb-0">
                            Deliciosa creación que combina la frescura del atún con un toque cautivador de la cocina asiática con sabores equilibrados y texturas irresistibles que te transportarán a un viaje gastronómico
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-5">
                <div class="card h-100 shadow border-0">
                    <img class="card-img-top" src="https://images.pexels.com/photos/726000/pexels-photo-726000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
                    <div class="card-body p-4">
                        <div class="badge bg-primary bg-gradient rounded-pill mb-2">
                            #2 Más Pedido
                        </div>
                            <br /><br />
                            <a class="text-decoration-none link-dark stretched-link" href="#!">
                                <h4 class="card-title mb-3">Pasta frutti di Mare</h4>
                            </a>
                            <p class="card-text mb-0">
                                Este manjar culinario fusiona la simplicidad italiana con la abundancia de los frutos del mar, creando una experiencia gastronómica que deleitará incluso a los paladares más exigentes.
                            </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 mb-5">
                <div class="card h-100 shadow border-0">
                    <img class="card-img-top" src="https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." />
                    <div class="card-body p-4">
                        <div class="badge bg-primary bg-gradient rounded-pill mb-2">
                            #3 Más Pedido
                        </div>
                        <br /><br />
                        <a class="text-decoration-none link-dark stretched-link" href="#!">
                            <h4 class="card-title mb-3">Ensalada Tentación</h4>
                        </a>
                        <p class="card-text mb-0">
                            Este platillo se presenta con una base de mahi-mahi o pollo, queso mozzarella, aguacate, cebolla morada, zanahorias y tomates cherry, creando así una experiencia que deleitará tus sentidos con cada bocado.
                        </p>
                    </div>
                </div>
            </div>
                </div>
                <div class="text-center">
                <ButtonLink to={"/menu"} className="btn btn-primary btn-lg px-4 me-sm-3">Ver Menu Completo</ButtonLink>
                
                </div>
            </div>
        </section>
    )
}