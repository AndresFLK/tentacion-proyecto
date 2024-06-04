import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react';
import React, { useEffect, useRef, useState } from 'react';
import axios from '../API/axios';
const CREATE_URL = "/empresas/";

const token = sessionStorage.getItem('token');
console.log(token);

const FormAddEmpresa = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [nombre, setNombre] = useState();
  const [contacto, setContacto] = useState();
  const [errMsg, setErrMsg] = useState();

  
  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [nombre])

//falta agregar el contacto
  const handleSubmit = async (e) => {
    try{
      const res = await axios.post(CREATE_URL, JSON.stringify({nombre, contacto}), 
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
      });
      console.log(JSON.stringify(res?.data))

      setNombre('');
      setContacto('');

    }catch (err){
        console.log(JSON.stringify(res?.data))
        console.error("Error en la petición", error);
    }
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Agregar Empresas al Sistema</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Agregue los datos de la empresa 
            </p>
              <CForm onSubmit={handleSubmit}>
                <div className="mb-3">
                  <CFormLabel htmlFor="nombre">Nombre</CFormLabel>
                  <CFormInput
                    className="form-control"
                    type="text"
                    id="nombre"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="contacto">Contacto</CFormLabel>
                  <CFormInput
                    className="form-control"
                    type="text"
                    id="contacto"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setContacto(e.target.value)}
                    value={contacto}
                    required 
                  />
                </div>
                <br/><br/>
                <div className="col-auto">
                  <div className="d-grid gap-2">
                  <button className="btn btn-info profile-button btn-lg">Agregar Empresa</button>
            
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

export default FormAddEmpresa

