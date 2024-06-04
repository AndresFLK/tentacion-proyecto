import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow,
} from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { ButtonLink } from '../../components/ButtonLinks';
import axios from '../API/axios';
const GET_URL = "/servicios/";
const PUT_URL = "/servicios/";

const FormEditServicio= () => {

  const token = sessionStorage.getItem('token');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idServicio = searchParams.get('id_servicio'); // Retrieve the cedula value



  const [titulo, setTitulo] = useState();
  const [tiempo, setTiempo] = useState();
  const [descripcion, setDescripcion] = useState();
  const [imagen, setImagen] = useState();
  const [contacto, setContacto] = useState();
  const [id_empresa, setIdEmpresa] = useState();

  useEffect(() => {
    axios.get(GET_URL + encodeURIComponent(idServicio), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(response.data); // Handle the response data
      setTitulo(response.data.titulo)
      setTiempo(response.data.tiempo)
      setDescripcion(response.data.descripcion)
      setImagen(response.data.imagen)
      setContacto(response.data.contacto)
      setIdEmpresa(response.data.empresa)
    })
    .catch(error => {
      console.error("Error en la petición", error); // Handle the error
    });
  }, [idServicio]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(PUT_URL + encodeURIComponent(idServicio), JSON.stringify({titulo, tiempo, descripcion, imagen, id_empresa,contacto}), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    .then(response => {
      console.log(JSON.stringify(response?.data))
      alert("Cambio Exitoso")
    })
    .catch(error => {
      console.log(JSON.stringify(response)) // Handle the error
    });
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Modificar Servicios Publicitarios del Sistema</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Modifique los datos del servicio desea cambiar 
            </p>
            <br/>
              <CForm onSubmit={handleSubmit}>
              <div className="mb-3">
                  <CFormLabel htmlFor="titulo">Titulo del Servicio</CFormLabel>
                  <CFormInput
                    type="text"
                    id="titulo"
                    onChange={(e) => setTitulo(e.target.value)}
                    value={titulo}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="tiempo">Tiempo</CFormLabel>
                  <CFormInput
                    type="text"
                    id="tiempo"
                    onChange={(e) => setTiempo(e.target.value)}
                    value={tiempo}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="descripcion">Descripcion</CFormLabel>
                  <CFormInput
                    type="text"
                    id="descripcion"
                    onChange={(e) => setDescripcion(e.target.value)}
                    value={descripcion}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="imagen">Imagen</CFormLabel>
                  <CFormInput
                    type="text"
                    id="imagen"
                    onChange={(e) => setImagen(e.target.value)}
                    value={imagen}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="id_empresa">Empresa</CFormLabel>
                  <CFormInput
                    type="text"
                    id="id_empresa"
                    onChange={(e) => setIdEmpresa(e.target.value)}
                    value={id_empresa}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="contacto">Contacto</CFormLabel>
                  <CFormInput
                    type="text"
                    id="contacto"
                    onChange={(e) => setContacto(e.target.value)}
                    value={contacto}
                  />
                </div>
                <br/>
                <div className="col-auto">
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary profile-button btn-lg">Modificar Servicio</button>
                  </div>
                </div>
                <br/>
              </CForm>
            
          </CCardBody>
        </CCard>
      </CCol>
      
    </CRow>
  )
}

export default FormEditServicio
