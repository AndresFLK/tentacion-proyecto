import MenuItem from "../../components/MenuItem"

export default function VerOrdenes(){
    return(
        <section class="py-5">
            <div class="container px-5 my-5">
            <div class="accordion mb-5" id="accordionExample">
                                <div class="accordion-item">
                                    <h3 class="accordion-header" id="headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Orden en Preparacion</button></h3>
                                    <div class="accordion-collapse collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <MenuItem 
                                            titulo={"Hamburguesa Tentación"} 
                                            desc={"Una jugosa hamburguesa de carne de res premium, acompañada de cebolla caramelizada y queso Gouda ahumado que le aporta un sabor ahumado y suave."} 
                                            img={""} 
                                            price={"¢8,500.00"}/>
                                            <MenuItem 
                                            titulo={"Tacos Short Rib"} 
                                            desc={"Una jugosa hamburguesa de carne de res premium, acompañada de cebolla caramelizada y queso Gouda ahumado que le aporta un sabor ahumado y suave."} 
                                            img={""} 
                                            price={"¢8,500.00"}/>
                                        </div>
                                        <div class="col-ma">
                                            <div class="card mb-4">
                                                    <div class="card-header py-3">
                                                    <h5 class="mb-0">Datos de la Orden</h5>
                                                    </div>
                                                    <div class="card-body">
                                                    <ul class="list-group list-group-flush">
                                                        <li
                                                        class="list-group-item align-items-center border-0 px-0 pb-0">
                                                        <span>IdOrden: 1001</span><br />
                                                        <span>Mesa: #5</span>
                                                        </li>
                                                        
                                                    </ul>
                                                    <br />
                                                    <button type="button" class="btn btn-primary btn-lg btn-block" style={{marginRight: "20px"}}>
                                                        Ver Mas
                                                    </button>
                                                    <button type="button" class="btn btn-success btn-lg btn-block" style={{marginRight: "20px"}}>
                                                        Actualizar Estado
                                                    </button>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h3 class="accordion-header" id="headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Orden En Preparacion</button></h3>
                                    <div class="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <MenuItem 
                                            titulo={"Hamburguesa Tentación"} 
                                            desc={"Una jugosa hamburguesa de carne de res premium, acompañada de cebolla caramelizada y queso Gouda ahumado que le aporta un sabor ahumado y suave."} 
                                            img={""} 
                                            price={"¢8,500.00"}/>
                                            <MenuItem 
                                            titulo={"Tacos Short Rib"} 
                                            desc={"Una jugosa hamburguesa de carne de res premium, acompañada de cebolla caramelizada y queso Gouda ahumado que le aporta un sabor ahumado y suave."} 
                                            img={""} 
                                            price={"¢8,500.00"}/>
                                        </div>
                                        <div class="col-ma">
                                            <div class="card mb-4">
                                                    <div class="card-header py-3">
                                                    <h5 class="mb-0">Datos de la Orden</h5>
                                                    </div>
                                                    <div class="card-body">
                                                    <ul class="list-group list-group-flush">
                                                        <li
                                                        class="list-group-item align-items-center border-0 px-0 pb-0">
                                                        <span>IdOrden: 1001</span><br />
                                                        <span>Mesa: #5</span>
                                                        </li>
                                                        
                                                    </ul>
                                                    <br />
                                                    <button type="button" class="btn btn-primary btn-lg btn-block" style={{marginRight: "20px"}}>
                                                        Ver Mas
                                                    </button>
                                                    <button type="button" class="btn btn-success btn-lg btn-block" style={{marginRight: "20px"}}>
                                                        Actualizar Estado
                                                    </button>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h3 class="accordion-header" id="headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Orden Entregada</button></h3>
                                    <div class="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <MenuItem 
                                            titulo={"Hamburguesa Tentación"} 
                                            desc={"Una jugosa hamburguesa de carne de res premium, acompañada de cebolla caramelizada y queso Gouda ahumado que le aporta un sabor ahumado y suave."} 
                                            img={""} 
                                            price={"¢8,500.00"}/>
                                            <MenuItem 
                                            titulo={"Tacos Short Rib"} 
                                            desc={"Una jugosa hamburguesa de carne de res premium, acompañada de cebolla caramelizada y queso Gouda ahumado que le aporta un sabor ahumado y suave."} 
                                            img={""} 
                                            price={"¢8,500.00"}/>
                                        </div>
                                        <div class="col-ma">
                                            <div class="card mb-4">
                                                    <div class="card-header py-3">
                                                    <h5 class="mb-0">Datos de la Orden</h5>
                                                    </div>
                                                    <div class="card-body">
                                                    <ul class="list-group list-group-flush">
                                                        <li
                                                        class="list-group-item align-items-center border-0 px-0 pb-0">
                                                        <span>IdOrden: 1001</span><br />
                                                        <span>Mesa: #5</span>
                                                        </li>
                                                        
                                                    </ul>
                                                    <br />
                                                    <button type="button" class="btn btn-primary btn-lg btn-block" style={{marginRight: "20px"}}>
                                                        Ver Mas
                                                    </button>
                                                    <button type="button" class="btn btn-info btn-lg btn-block" style={{marginRight: "20px"}}>
                                                        Orden Entregada
                                                    </button>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
        </section>
    )
}