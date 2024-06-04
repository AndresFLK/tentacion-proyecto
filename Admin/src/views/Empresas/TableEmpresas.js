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

const DELETE_URL = "/empresas/";

const TableEmpresas = () => {

  const token = sessionStorage.getItem('token');
  console.log(token);

  const [records, setRecords] = useState([])
    useEffect(() => {
        fetch('http://localhost:8008/empresas', {
          method: "GET",
        })
        .then(response => response.json())
        .then(data => setRecords(data))
        .catch(error => console.error('Error al consumir la API:', error));
    }, []); // The empty array causes this effect to only run on mount


    const borrar = async (id_empresa) => {
      try{
        const res = await route.delete(DELETE_URL + id_empresa, 
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
          }
        });
        alert("Empresa Borrada")
  
      }catch (err){
          console.error("Error en la petición", err);
      }
    }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Empresas Activos</strong> 
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Revise las empresas activas de la aplicación
            </p>
              <CTable hover>
                <CTableHead color="primary">
                  <CTableRow>
                    <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Contacto</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {records.map((list, index) => (
                    <CTableRow>
                      <CTableHeaderCell scope="row" key={index}>{list.id_empresa}</CTableHeaderCell>
                      <CTableDataCell>{list.nombre}</CTableDataCell>
                      <CTableDataCell>{list.contacto}</CTableDataCell>
                      <CTableDataCell>
                        <ButtonLink to={{
                                      pathname: "/Empresas/editarEmpresa",
                                      search: `?id_empresa=${encodeURIComponent(list.id_empresa)}`
                                    }}
                          className="btn btn-info profile-button"
                        >
                          <CIcon icon={cilPencil} className="me-2" />
                          Editar
                        </ButtonLink>
                        <span> </span>
                        <button className="btn btn-danger profile-button" onClick={() => borrar(list.id_empresa)}><CIcon icon={cilTrash} className="me-2" />
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

export default TableEmpresas

