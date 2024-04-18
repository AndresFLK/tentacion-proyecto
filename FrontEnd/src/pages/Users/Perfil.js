import { useEffect, useState } from "react";
import { ButtonLink } from "../../components/Button";

export default function Perfil(){

    const token = sessionStorage.getItem('token');
    console.log(token);
  
    const [records, setRecords] = useState([])
      useEffect(() => {
          fetch('http://localhost:8008/auth/profile', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`  // Add the Authorization header with the token
              },
          })
          .then(response => response.json())
          .then(data => setRecords(data))
          .catch(error => console.error('Error al consumir la API:', error));
      }, []); // The empty array causes this effect to only run on mount


    return(
        <>
        <br />
        <div class="col-md-9 mx-auto">
            <div class="bg-white shadow rounded overflow-hidden">
        <div class="px-4 pt-0 pb-5 cover" >
          <div class="media align-items-end profile-head" style={{display: "flex"}}>
            
            <div class="media-body mb-5 text-white" style={{margin: '0 0 0 30px'}}>
              <h2 class="mt-0 mb-0">{records.nombre} {records.primer_apellido}</h2>
              <p class="small mb-4">
              </p>
            </div>
          </div>
        </div>
        <div class="px-4">
            <div class="col-md-12">
            <div class="p-3 py-5">
            
                <div class="row mt-9">
                
                <div style={{height: "130px", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <div class="row mt-9">
                    <ButtonLink to={{
                                      pathname: "/editarPerfil",
                                      search: `?cedula=${encodeURIComponent(records.cedula)}`
                                    }}
                          className="btn btn-primary profile-button btn-lg"
                        >
                        <i class="bi bi-person-circle"></i> Editar Perfil
                </ButtonLink>
                    </div>
                    <div class="row mt-9">
                        <button class="btn btn btn-outline-dark profile-button btn-lg" type="button"><i class="bi bi-calendar-check"></i> Ver Reservas</button>
                        
                    </div>
                </div>



                
                
                <div class="col-md-12">
                <br></br><br></br>
                    <label class="labels">Cedula:</label> 
                    <br />
                    <span class="text-black-50">{records.cedula}</span>
                    <br /><br />
                </div>
                    <div class="col-md-12">
                        <label class="labels">Nombre:</label> 
                        <br />
                        <span class="text-black-50">{records.nombre} {records.primer_apellido} {records.segundo_apellido}</span>
                        <br /><br />
                    </div>
                    <div class="col-md-12">
                        <label class="labels">Correo Electronico:</label> 
                        <br />
                        <span class="text-black-50">{records.correo}</span>
                        <br /><br />
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