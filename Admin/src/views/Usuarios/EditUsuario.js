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
const GET_URL = "/usuarios/";
const PUT_URL = "/usuarios/";

const FormEditUsuarios = () => {

  const token = sessionStorage.getItem('token');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cedula = searchParams.get('cedula'); // Retrieve the cedula value


  const [nombre, setNombre] = useState();
  const [primer_apellido, setPrimer_apellido] = useState();
  const [segundo_apellido, setSegundo_apellido] = useState();
  const [correo, setCorreo] = useState();
  const [id_rol, setId_rol] = useState();


  useEffect(() => {
    axios.get(GET_URL + encodeURIComponent(cedula), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    .then(response => {
      console.log(response.data); // Handle the response data
      setNombre(response.data.nombre)
      setPrimer_apellido(response.data.primer_apellido)
      setSegundo_apellido(response.data.segundo_apellido)
      setCorreo(response.data.correo)
      setId_rol(response.data.rol)
    })
    .catch(error => {
      console.error("Error en la petición", error); // Handle the error
    });
  }, [cedula]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(PUT_URL + encodeURIComponent(cedula), JSON.stringify({nombre, primer_apellido, segundo_apellido, correo, id_rol}), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    .then(response => {
      console.log(JSON.stringify(response?.data))
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
            <strong>Modificar Usuario del Sistema</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Modifique los datos del usuario que desea cambiar 
            </p>
            <br/>
              <CForm onSubmit={handleSubmit}>
                <div className="mb-3">
                  <CFormLabel htmlFor="cedula">Cedula</CFormLabel>
                  <CFormInput
                    type="text"
                    id="cedula"
                    name="cedula"
                    value={cedula}
                    readOnly={true}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="email">Correo Electronico</CFormLabel>
                  <CFormInput
                    type="email"
                    id="email"
                    name="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                </div>
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
                <div className="mb-3">
                  <CFormLabel htmlFor="primerApellido">Primer Apellido</CFormLabel>
                  <CFormInput
                    type="text"
                    id="primerApellido"
                    name="primerApellido"
                    value={primer_apellido}
                    onChange={e => setPrimer_apellido(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="segundoApellido">Segundo Apellido</CFormLabel>
                  <CFormInput
                    type="text"
                    id="segundoApellido"
                    name="segundoApellido"
                    value={segundo_apellido}
                    onChange={(e) => setSegundo_apellido(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="rol">Rol</CFormLabel>
                  <CFormInput
                    type="text"
                    id="rol"
                    name="rol"
                    value={id_rol}
                    onChange={(e) => setId_rol(e.target.value)}
                  />
                </div>
                <br/>
                <div className="col-auto">
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary profile-button btn-lg">Modificar Usuario</button>
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

export default FormEditUsuarios
