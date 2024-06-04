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
const CREATE_URL = "/proveedores/";

const token = sessionStorage.getItem('token');
  console.log(token);

const FormAddProveedor = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [nombre, setNombre] = useState();
  const [errMsg, setErrMsg] = useState();

  
  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [nombre])

  const handleSubmit = async (e) => {
    try{
      const res = await axios.post(CREATE_URL, JSON.stringify({nombre}), 
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
      });
      console.log(JSON.stringify(res?.data))

      setNombre('');

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
            <strong>Agregar Proveedores al Sistema</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Agregue los datos del proveedor 
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
                <br/><br/>
                <div className="col-auto">
                  <div className="d-grid gap-2">
                  <button className="btn btn-info profile-button btn-lg">Agregar Proveedor</button>
            
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

export default FormAddProveedor

