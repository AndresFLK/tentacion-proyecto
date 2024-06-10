import {
  cilPencil,
  cilTrash,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ButtonLink } from '../../components/ButtonLinks'
import route from '../API/axios'

const DELETE_URL = "/usuarios/";

const TableUsuarios = () => {

  const token = sessionStorage.getItem('token');
  console.log(token);

  const [records, setRecords] = useState([])
  useEffect(() => {
    fetch('http://localhost:8008/usuarios/admins', {
      method: "GET",
      headers: {
        Authorization: token
      }
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
  


    const borrar = async (cedula) => {
      try{
        const res = await route.delete(DELETE_URL + cedula, 
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
          }
        });
        alert("Usuario Borrado")
  
      }catch (err){
          console.error("Error en la petición", err);
      }
    }


  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Usuarios Activos</strong> 
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Revise los usuarios activos de la aplicación
            </p>
              <CTable hover>
                <CTableHead color="primary">
                  <CTableRow>
                    <CTableHeaderCell scope="col">Cedula</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Correo</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Rol</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {records.map((list, index) => (
                    <CTableRow>
                      <CTableDataCell>{list.cedula}</CTableDataCell>
                      <CTableDataCell>{list.nombre}  {list.primer_apellido}</CTableDataCell>
                      <CTableDataCell>{list.correo}</CTableDataCell>
                      <CTableDataCell>{list.rol}</CTableDataCell>
                      <CTableDataCell>
                        <ButtonLink to={{
                                      pathname: "/Usuarios/editarUsuario",
                                      search: `?cedula=${encodeURIComponent(list.cedula)}`
                                    }}
                          className="btn btn-info profile-button"
                        >
                          <CIcon icon={cilPencil} className="me-2" />
                          Editar
                        </ButtonLink>
                        <span> </span>
                        <button className="btn btn-danger profile-button" onClick={() => borrar(list.cedula)}><CIcon icon={cilTrash} className="me-2" />
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

export default TableUsuarios

