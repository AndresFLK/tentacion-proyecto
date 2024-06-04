import {
  cilBuilding,
  cilCalendarCheck,
  cilInbox,
  cilRestaurant,
  cilStar,
  cilTruck,
  cilUser
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import React from 'react'

const _nav = [
  
  {
    component: CNavTitle,
    name: 'Modulos',
  },
  {
    component: CNavGroup,
    name: 'Usuarios',
    to: '/base',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Ver Administradores',
        to: '/Usuarios/VerAdministradores',
      },
      {
        component: CNavItem,
        name: 'Ver Clientes',
        to: '/Usuarios/VerClientes',
      },
      {
        component: CNavItem,
        name: 'Agregar Usuarios',
        to: '/Usuarios/CrearUsuarios',
      },
      
    ],
  },
  {
    component: CNavGroup,
    name: 'Inventario',
    to: '/buttons',
    icon: <CIcon icon={cilInbox} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Ver Inventario',
        to: '/Inventario/verInventario',
      },
      {
        component: CNavItem,
        name: 'Agregar Item',
        to: '/Inventario/crearItem',
      },
      // {
      //   component: CNavItem,
      //   name: 'Dropdowns',
      //   to: '/buttons/dropdowns',
      // },
    ],
  },
  {
    component: CNavGroup,
    name: 'Proveedores',
    icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Ver Proveedores',
        to: '/Proveedores/verProveedores',
      },
      {
        component: CNavItem,
        name: 'Agregar Proveedores',
        to: '/Proveedores/crearProveedor',
      },
      // {
      //   component: CNavItem,
      //   name: 'Checks & Radios',
      //   to: '/forms/checks-radios',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Range',
      //   to: '/forms/range',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Input Group',
      //   to: '/forms/input-group',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Floating Labels',
      //   to: '/forms/floating-labels',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Layout',
      //   to: '/forms/layout',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Validation',
      //   to: '/forms/validation',
      // },
    ],
  },
  {
    component: CNavGroup,
    name: 'Publicidades',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Ver Publicidades',
        to: '/Servicios/verServicios',
      },
      {
        component: CNavItem,
        name: 'Agregar Publicidades',
        to: '/Servicios/crearServicio',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Empresas',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Ver Empresas',
        to: '/Empresas/verEmpresas',
      },
      {
        component: CNavItem,
        name: 'Agregar Empresas',
        to: '/Empresas/crearEmpresa',
      },
      // {
      //   component: CNavItem,
      //   name: 'Modal',
      //   to: '/notifications/modals',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Toasts',
      //   to: '/notifications/toasts',
      // },
    ],
  },
  {
    component: CNavGroup,
    name: 'Reservas',
    to: '/widgets',
    icon: <CIcon icon={cilCalendarCheck} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Ver Reservas',
        to: '/Reservas/verReseservas',
      },
    ],
  },
  
]

export default _nav
