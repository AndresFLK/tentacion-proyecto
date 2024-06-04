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
const CREATE_URL = "/servicios/";

const token = sessionStorage.getItem('token');
  console.log(token);

const FormAddServicio = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [titulo, setTitulo] = useState();
  const [tiempo, setTiempo] = useState();
  const [descripcion, setDescripcion] = useState();
  const [imagen, setImagen] = useState();
  const [contacto, setContacto] = useState();
  const [id_empresa, setIdEmpresa] = useState();

  const [errMsg, setErrMsg] = useState();

  
  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [titulo])

  const handleSubmit = async (e) => {
    try{
      const res = await axios.post(CREATE_URL, JSON.stringify({titulo, tiempo, descripcion, imagen, id_empresa, contacto}), 
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
      });
      console.log(JSON.stringify(res?.data))

      setTitulo('');

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
            <strong>Agregar Servicios Publicitarios al Sistema</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Agregue los datos del servicio que desea agregar 
            </p>
              <CForm onSubmit={handleSubmit}>
                <div className="mb-3">
                  <CFormLabel htmlFor="titulo">Titulo del Servicio</CFormLabel>
                  <CFormInput
                    className="form-control"
                    type="text"
                    id="titulo"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setTitulo(e.target.value)}
                    value={titulo}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="tiempo">Tiempo</CFormLabel>
                  <CFormInput
                    className="form-control"
                    type="text"
                    id="tiempo"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setTiempo(e.target.value)}
                    value={tiempo}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="descripcion">Descripcion</CFormLabel>
                  <CFormInput
                    className="form-control"
                    type="text"
                    id="descripcion"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setDescripcion(e.target.value)}
                    value={descripcion}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="imagen">Imagen</CFormLabel>
                  <CFormInput
                    className="form-control"
                    type="text"
                    id="imagen"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setImagen(e.target.value)}
                    value={imagen}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="id_empresa">Empresa</CFormLabel>
                  <CFormInput
                    className="form-control"
                    type="text"
                    id="id_empresa"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setIdEmpresa(e.target.value)}
                    value={id_empresa}
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
                  <button className="btn btn-info profile-button btn-lg">Agregar Servicio</button>
            
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

export default FormAddServicio

