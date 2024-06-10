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

const TableReservas = () => {

  const token = sessionStorage.getItem('token');
  console.log(token);

  const [records, setRecords] = useState([])
    useEffect(() => {
      fetch('http://localhost:8008/reservas', {
        method: "GET",
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
    


  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Reservas Activas</strong> 
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              Revise las reservas activas de la aplicación
            </p>
              <CTable hover>
                <CTableHead color="primary">
                  <CTableRow>
                    <CTableHeaderCell scope="col">ID</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Usuario</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Fecha</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Cantidad de Personas</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {records.map((list, index) => (
                    <CTableRow>
                      <CTableHeaderCell scope="row" key={index}>{list.id_reserva}</CTableHeaderCell>
                      <CTableDataCell>{list.usuario}</CTableDataCell>
                      <CTableDataCell>
                        {new Date(list.fecha).toLocaleDateString('en-US', {
                          weekday: 'long', // "Monday"
                          year: 'numeric', // "2024"
                          month: 'long', // "March"
                          day: 'numeric' // "29"
                        })}
                      </CTableDataCell>
                      <CTableDataCell>{list.nombre_reserva}</CTableDataCell>
                      <CTableDataCell>
                        <ButtonLink to={{
                                      pathname: "/Servicios/editarServicio",
                                      search: `?id_servicio=${encodeURIComponent(list.id_servicio)}`
                                    }}
                          className="btn btn-info profile-button"
                        >
                          <CIcon icon={cilPencil} className="me-2" />
                          Editar
                        </ButtonLink>
                        <span> </span>
                        <ButtonLink to={"/Usuarios/editarUsuario"} className="btn btn-danger profile-button">
                          <CIcon icon={cilTrash} className="me-2" />
                          Borrar
                        </ButtonLink>
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

export default TableReservas

