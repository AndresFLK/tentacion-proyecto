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
import React, { useEffect, useRef, useState } from 'react';
import { ButtonLink } from '../../components/ButtonLinks';
import axios from '../API/axios';
const CREATE_URL = "/productos/";

const token = sessionStorage.getItem('token');
  console.log(token);

const FormAddItem = () => {


  const userRef = useRef();

  const [nombre, setNombre] = useState();
  const [descripcion, setDescripcion] = useState();
  const [precio, setPrecio] = useState();
  const [proveedores, setProveedores] = useState();
  const [cantidad, setCantidad] = useState();

  useEffect(() => {
      userRef.current.focus();
  }, [])


  const handleSubmit = async (e) => {
    try{
      const res = await axios.post(CREATE_URL, JSON.stringify({nombre, descripcion, precio, proveedores, cantidad}), 
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`
        }
      });
      console.log(JSON.stringify(res?.data))

      setNombre('');
      setDescripcion('');
      setPrecio('');
      setCantidad('');
      setProveedores('');

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
            <strong>Agregar Items al Inventario</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Llene los datos del item que desea agregar
            </p>
            <br/>
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
                <CFormLabel htmlFor="cantidad">Cantidad</CFormLabel>
                  <CFormInput
                    className="form-control"
                    type="text"
                    id="cantidad"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setCantidad(e.target.value)}
                    value={cantidad}
                    required 
                  />
                </div>
                <div className="mb-3">
                <CFormLabel htmlFor="precio">Precio</CFormLabel>
                  <CFormInput
                    className="form-control"
                    type="text"
                    id="precio"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setPrecio(e.target.value)}
                    value={precio}
                    required 
                  />
                </div>
                <div className="mb-3">
                <CFormLabel htmlFor="proveedores">Proveedores</CFormLabel>
                  <CFormInput
                    className="form-control"
                    type="text"
                    id="proveedores"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setProveedores(e.target.value)}
                    value={proveedores}
                    required 
                  />
                </div>
                <br/><br/>
                <div className="col-auto">
                  <div className="d-grid gap-2">
                  <button className="btn btn-info profile-button btn-lg">Agregar Item</button>
            
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

export default FormAddItem
