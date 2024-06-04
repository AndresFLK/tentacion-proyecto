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
const CREATE_URL = "/usuarios/";

const token = sessionStorage.getItem('token');
  console.log(token);

const FormAddUsuarios = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [nombre, setNombre] = useState();
  const [cedula, setCedula] = useState();
  const [password, setPassword] = useState();
  const [primer_apellido, setPrimer_apellido] = useState();
  const [segundo_apellido, setSegundo_apellido] = useState();
  const [correo, setCorreo] = useState();
  const [id_rol, setId_rol] = useState();
  const [errMsg, setErrMsg] = useState();

  
  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [nombre, cedula, password, primer_apellido, segundo_apellido, correo, id_rol])

  const handleSubmit = async (e) => {
    try{
      const res = await axios.post(CREATE_URL, JSON.stringify({nombre, cedula, password, primer_apellido, segundo_apellido, correo, id_rol}), 
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
      });
      console.log(JSON.stringify(res?.data))

      setNombre('');
      setCedula('');
      setPassword('');
      setPrimer_apellido('');
      setSegundo_apellido('');
      setCorreo('');
      setId_rol('');

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
            <strong>Agregar Usuario al Sistema</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Agregue los datos del usuario 
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
                  <CFormLabel htmlFor="cedula">Cedula</CFormLabel>
                  <CFormInput
                    className="form-control"
                    type="text"
                    id="cedula"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setCedula(e.target.value)}
                    value={cedula}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="password">Contraseña</CFormLabel>
                  <CFormInput
                    className="form-control"
                    type="password"
                    id="password"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="primer_apellido">Primer Apellido</CFormLabel>
                  <CFormInput
                    className="form-control"
                    type="text"
                    id="primer_apellido"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setPrimer_apellido(e.target.value)}
                    value={primer_apellido}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="segundo_apellido">Segundo Apellido</CFormLabel>
                  <CFormInput
                    className="form-control"
                    type="text"
                    id="segundo_apellido"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setSegundo_apellido(e.target.value)}
                    value={segundo_apellido}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="correo">Correo Electrónico</CFormLabel>
                  <CFormInput
                    className="form-control"
                    type="email"
                    id="correo"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setCorreo(e.target.value)}
                    value={correo}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="id_rol">Rol</CFormLabel>
                  <CFormInput
                    className="form-control"
                    type="number"
                    id="id_rol"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setId_rol(e.target.value)}
                    value={id_rol}
                    required 
                  />
                </div>
                <br/><br/>
                <div className="col-auto">
                  <div className="d-grid gap-2">
                  <button className="btn btn-info profile-button btn-lg">Agregar Usuario</button>
            
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

export default FormAddUsuarios
