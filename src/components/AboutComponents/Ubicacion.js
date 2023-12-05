

export default function Ubicacion(){
    return(
        <>
            <div class="col-lg-8 col-xxl-6" style={{display: "flex", flexDirection:"column", justifyContent: "center"}}>
                <div class="text-center my-5" >
                    <h1 class="fw-bolder mb-3 text-white">
                        ¿Donde estamos ubicados?
                    </h1>
                    <p class="lead fw-normal text-muted mb-4">
                        Estamos en Calle 4, Frente al Malecón, entrada principal de Quepos., Quepos, Costa Rica
                    </p>
                    <div class="embed-responsive embed-responsive-16by9" style={{width:"600", height:"450", border:0}}>
                        <iframe class="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.8913106613954!2d-84.16756632503635!3d9.430932190647347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa173955a17e6ed%3A0x6a1ec87c22c82f3f!2sRestaurante%20Tentaci%C3%B3n!5e0!3m2!1ses!2scr!4v1701790460236!5m2!1ses!2scr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{width:"600px", height:"450px", border:0}}></iframe>
                    </div>
                </div>
            </div>
        </>
        
    )
}