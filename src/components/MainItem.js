

export default function MainItem({titulo, desc, ...props}){
    return(
        
                    <div class="card border-0 shadow rounded-3 overflow-hidden">
                        <div class="card-body p-0">
                            <div class="row gx-0">
                                <div class="col-lg-6 col-xl-5 py-lg-5">
                                    <div class="p-4 p-md-5">
                                        <div class="badge bg-primary bg-gradient rounded-pill mb-2">
                                            #1 Mas Pedido
                                        </div>
                                        <div class="h2 fw-bolder">
                                            {titulo}
                                        </div>
                                        <p>
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-xl-7">
                                    <div class="bg-featured-blog" {...props}>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
           
    )
}