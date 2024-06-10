import { useEffect, useState } from "react";
import InfoSpace from "../../components/InfoSpace";

export default function Publicidad() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8008/servicios', {
      method: "GET",
    })
      .then(response => response.json())
      .then(data => {
        // Asegúrate de que data es un arreglo antes de actualizar el estado
        if (Array.isArray(data)) {
          setRecords(data);
        } else {
          console.error('La API no devolvió un arreglo como se esperaba');
        }
      })
      .catch(error => console.error('Error al consumir la API:', error));
  }, []); // El array vacío hace que este efecto se ejecute solo una vez al montarse el componente

  return (
    <>
      <header className="py-5">
        <div className="container px-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xxl-6">
              <div className="text-center my-5">
                <h1 className="fw-bolder mb-3">Servicios cercanos a Tentación</h1>
                <p className="lead fw-normal text-muted mb-4">
                  ¿Buscas algun tour, hospedaje, o quiza algún otro servicio?
                  <br />
                  Encuentra los servicios afiliados a Tentación. ¡Calidad garantizada!
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      {records.length === 0 ? (
        <h1>Hola</h1>
      ) : (
        records.map((list, index) => (
          <InfoSpace
            key={index}
            title={list.titulo}
            img={list.imagen}
            text={list.descripcion}
          />
        ))
      )}
    </>
  );
}
