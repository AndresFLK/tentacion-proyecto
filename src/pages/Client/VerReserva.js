

export default function VerReserva(){
    return(
        <section class="py-5">
            <div class="container px-5 my-5">
            <div class="accordion mb-5" id="accordionExample">
                                <div class="accordion-item">
                                    <h3 class="accordion-header" id="headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Reserva Activa</button></h3>
                                    <div class="accordion-collapse collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="col-ma">
                                            <div class="card mb-4">
                                            <div class="card-header py-3">
                                                        <h5 class="mb-0">Datos de la Reserva</h5>
                                                    </div>
                                                    <div class="card-body">
                                                        <ul class="list-group list-group-flush">
                                                            <li
                                                            class="list-group-item align-items-center border-0 px-0 pb-0">
                                                            <span>Cantidad de Comensales: 4</span><br />
                                                            <span>Fecha: 12 de agosto 2023</span><br />
                                                            <span>Nombre de la Reserva: Andres Ospina</span><br />
                                                            <span>Total: ¢45,360.00</span><br />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <button type="button" class="btn btn-danger btn-lg btn-block" style={{marginRight: "20px"}}>
                                                        Cancelar Reserva
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h3 class="accordion-header" id="headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Reserva Completada</button></h3>
                                    <div class="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        
                                        <div class="col-ma">
                                            <div class="card mb-4">
                                            <div class="card-header py-3">
                                                        <h5 class="mb-0">Datos de la Reserva</h5>
                                                    </div>
                                                    <div class="card-body">
                                                        <ul class="list-group list-group-flush">
                                                            <li
                                                            class="list-group-item align-items-center border-0 px-0 pb-0">
                                                            <span>Cantidad de Comensales: 4</span><br />
                                                            <span>Fecha: 12 de agosto 2023</span><br />
                                                            <span>Nombre de la Reserva: Andres Ospina</span><br />
                                                            <span>Total: ¢45,360.00</span><br />
                                                            </li>
                                                        </ul>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h3 class="accordion-header" id="headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Reserva Completada</button></h3>
                                    <div class="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        
                                        <div class="col-ma">
                                            <div class="card mb-4">
                                                    <div class="card-header py-3">
                                                        <h5 class="mb-0">Datos de la Reserva</h5>
                                                    </div>
                                                    <div class="card-body">
                                                        <ul class="list-group list-group-flush">
                                                            <li
                                                            class="list-group-item align-items-center border-0 px-0 pb-0">
                                                            <span>Cantidad de Comensales: 4</span><br />
                                                            <span>Fecha: 12 de agosto 2023</span><br />
                                                            <span>Nombre de la Reserva: Andres Ospina</span><br />
                                                            <span>Total: ¢45,360.00</span><br />
                                                            </li>
                                                        </ul>
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