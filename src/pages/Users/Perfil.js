

export default function Perfil(){
    return(
        <>
        <br />
        <div class="col-md-9 mx-auto">
            <div class="bg-white shadow rounded overflow-hidden">
        <div class="px-4 pt-0 pb-4 cover" >
          <div class="media align-items-end profile-head" style={{display: "flex"}}>
            <div class="profile mr-3" style={{display: "flex", flexDirection: "column"}}>
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                alt="..."
                width="130"
                class="rounded mb-2 img-thumbnail"
              />
              <button class="btn btn-primary profile-button" type="button">Cambiar Foto</button>
              
            </div>
            <div class="media-body mb-5 text-white" style={{margin: '0 0 0 30px'}}>
              <h4 class="mt-0 mb-0">Andres Ospina</h4>
              <p class="small mb-4">
                <i class="fas fa-map-marker-alt mr-2"></i>Manuel Antonio
              </p>
            </div>
          </div>
        </div>
        <br /><br />
        <div class="px-4 py-3">
            <div class="col-md-12">
            <div class="p-3 py-5">
            
                <div class="row mt-9">
                
                <div style={{height: "120px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <div class="row mt-9">
                    <button class="btn btn-primary profile-button btn-lg" type="button"><i class="bi bi-person-circle"></i> Editar Perfil</button>
                        <br /><br />
                    </div>
                    <div class="row mt-9">
                    
                    <button class="btn btn-outline-dark btn-lg px-4" type="button"> <i class="bi bi-basket2-fill"></i> Historial de Pedidos</button>
                    <br /><br />
                    </div>
                </div>
                    
                    <div class="col-md-12">
                    <br /><br />
                        <label class="labels">Cedula:</label> 
                        <br />
                        <span class="text-black-50">1-1234-5678</span>
                        <br /><br />
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Nombre:</label> 
                        <br />
                        <span class="text-black-50">Edgar Andres Ospina Perilla</span>
                        <br /><br />
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Direccion:</label> 
                        <br />
                        <span class="text-black-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                        <br /><br />
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Telefono:</label> 
                        <br />
                        <span class="text-black-50">7102-3745</span>
                        <br /><br />
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Correo Electronico:</label> 
                        <br />
                        <span class="text-black-50">andres@gmail.com</span>
                        <br /><br />
                    </div>
                    <div class="col-md-12">
                        <button class="btn btn-outline-dark px-4" type="button">Cambiar Contraseña</button>
                    </div>
                    
                </div>
                
            </div>
            
            </div>
            
        </div>
        
            </div>
        </div>
        </>
    )
}