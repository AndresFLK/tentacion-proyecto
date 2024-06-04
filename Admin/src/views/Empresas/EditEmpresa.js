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
const GET_URL = "/empresas/";
const PUT_URL = "/empresas/";

const FormEditEmpresa= () => {

  const token = sessionStorage.getItem('token');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idEmpresa = searchParams.get('id_empresa'); // Retrieve the cedula value



  const [nombre, setNombre] = useState();

  useEffect(() => {
    axios.get(GET_URL + encodeURIComponent(idEmpresa), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(response.data); // Handle the response data
      setNombre(response.data.nombre)
    })
    .catch(error => {
      console.error("Error en la petición", error); // Handle the error
    });
  }, [idEmpresa]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(PUT_URL + encodeURIComponent(idEmpresa), JSON.stringify({nombre}), {
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
            <strong>Modificar Empresas del Sistema</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Modifique los datos de la empresa que desea cambiar 
            </p>
            <br/>
              <CForm onSubmit={handleSubmit}>
                <div className="mb-3">
                  <CFormLabel htmlFor="nombre">Nombre</CFormLabel>
                  <CFormInput
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <br/>
                <div className="col-auto">
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary profile-button btn-lg">Modificar Empresa</button>
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

export default FormEditEmpresa
