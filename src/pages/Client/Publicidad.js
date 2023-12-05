import InfoSpace from "../../components/InfoSpace";


export default function Publicidad(){
    return(
      <>
        <header class="py-5">
          <div class="container px-5">
            <div class="row justify-content-center">
              <div class="col-lg-8 col-xxl-6">
                <div class="text-center my-5">
                  <h1 class="fw-bolder mb-3">Servicios cercanos a Tentación</h1>
                  <p class="lead fw-normal text-muted mb-4">
                    ¿Buscas algun tour, hospedaje, o quiza algún otro servicio?
                    <br />
                    Encuentra los servicios afiliados a Tentación. ¡Calidad garantizada!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <InfoSpace 
        title={"Expediciones Juan"} 
        img={"https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}/>

        <InfoSpace 
        title={"Cabañas 123"} 
        img={"https://images.pexels.com/photos/1172518/pexels-photo-1172518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}/>

        <InfoSpace 
        title={"Vehiculos Mario"} 
        img={"https://images.pexels.com/photos/9331870/pexels-photo-9331870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"}/>
      </>
    )
}