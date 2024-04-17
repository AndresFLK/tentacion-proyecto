import { useEffect, useState } from "react";
import InfoSpace from "../../components/InfoSpace";


export default function Publicidad(){


  const [records, setRecords] = useState([])
  useEffect(() => {
      fetch('http://localhost:8008/servicios', {
        method: "GET",
      })
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(error => console.error('Error al consumir la API:', error));
  }, []); // The empty array causes this effect to only run on mount

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
        {records.map((list, index) => (
          <InfoSpace 
            title={list.titulo} 
            img={list.imagen} 
            text={list.descripcion}
          />
        ))}
        
      </>
    )
}