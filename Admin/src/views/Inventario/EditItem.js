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
const GET_URL = "/productos/";
const PUT_URL = "/productos/";

const FormEditItem = () => {

  const token = sessionStorage.getItem('token');

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idProducto = searchParams.get('id_producto'); // Retrieve the cedula value


  const [descripcion, setDescripcion] = useState();
  const [nombre, setNombre] = useState();
  const [precio, setPrecio] = useState();
  const [proveedores, setProveedores] = useState();
  const [cantidad, setCantidad] = useState();

  useEffect(() => {
    axios.get(GET_URL + encodeURIComponent(idProducto), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    .then(response => {
      console.log(response.data); // Handle the response data
      setNombre(response.data.nombre)
      setDescripcion(response.data.descripcion)
      setCantidad(response.data.cantidad)
      setPrecio(response.data.precio)
      setProveedores(response.data.proveedores)
    })
    .catch(error => {
      console.error("Error en la petición", error); // Handle the error
    });
  }, [idProducto]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(PUT_URL + encodeURIComponent(idProducto), JSON.stringify({nombre, descripcion, precio, proveedores, cantidad}), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    .then(response => {
      console.log(JSON.stringify(response?.data))
      alert("Modificacion Exitosa")
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
            <strong>Modificar Items del Sistema</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Modifique los datos del item del inventario que desea cambiar 
            </p>
            <br/>
              <CForm onSubmit={handleSubmit}>
                <div className="mb-3">
                  <CFormLabel htmlFor="idProducto">ID</CFormLabel>
                  <CFormInput
                    type="text"
                    id="idProducto"
                    name="idProducto"
                    value={idProducto}
                    readOnly={true}
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
                  <CFormLabel htmlFor="descripcion">Descripcion</CFormLabel>
                  <CFormInput
                    type="text"
                    id="descripcion"
                    name="descripcion"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="cantidad">Cantidad</CFormLabel>
                  <CFormInput
                    type="text"
                    id="cantidad"
                    name="cantidad"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="precio">Precio</CFormLabel>
                  <CFormInput
                    type="text"
                    id="precio"
                    name="precio"
                    value={precio}
                    onChange={e => setPrecio(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="proveedores">Proveedores</CFormLabel>
                  <CFormInput
                    type="text"
                    id="proveedores"
                    name="proveedores"
                    value={proveedores}
                    onChange={(e) => setProveedores(e.target.value)}
                  />
                </div>
                <br/>
                <div className="col-auto">
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary profile-button btn-lg">Modificar Item</button>
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

export default FormEditItem
