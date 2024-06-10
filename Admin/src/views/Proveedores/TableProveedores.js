import {
  cilPencil,
  cilTrash,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'
import { ButtonLink } from '../../components/ButtonLinks'
import axios from '../API/axios'

const DELETE_URL = "/proveedores/";
  
  const TableProveedores = () => {
  
    const token = sessionStorage.getItem('token');
    console.log(token);

    const [records, setRecords] = useState([])
      useEffect(() => {
        fetch('http://localhost:8008/proveedores', {
          method: "GET"
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
    
  

    const borrar = async (id_proveedor) => {
      try{
        const res = await axios.delete(DELETE_URL + id_proveedor, 
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
          }
        });
        alert("Proveedor Borrado")
  
      }catch (err){
          console.error("Error en la petición", err);
      }
    }
  
    return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Proveedores Activos</strong> 
            </CCardHeader>
            <CCardBody>
              <p className="text-body-secondary small">
                Revise los proveedores activos de la aplicación
              </p>
                <CTable hover>
                  <CTableHead color="primary">
                    <CTableRow>
                      <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {records.map((list, index) => (
                      <CTableRow>
                        <CTableHeaderCell scope="row" key={index}>{list.id_proveedor}</CTableHeaderCell>
                        <CTableDataCell>{list.nombre}</CTableDataCell>
                        <CTableDataCell>
                          <ButtonLink to={{
                                        pathname: "/Proveedores/editarProveedor",
                                        search: `?id_proveedor=${encodeURIComponent(list.id_proveedor)}`
                                      }}
                            className="btn btn-info profile-button"
                          >
                            <CIcon icon={cilPencil} className="me-2" />
                            Editar
                          </ButtonLink>
                          <span> </span>
                          <button className="btn btn-danger profile-button" onClick={() => borrar(list.id_proveedor)}><CIcon icon={cilTrash} className="me-2" />
                          Borrar</button>
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    )
  }
  
  export default TableProveedores
  
  