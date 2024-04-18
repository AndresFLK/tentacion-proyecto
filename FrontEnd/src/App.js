import { Route, Routes } from 'react-router-dom';
import ReservaUsuario from './Reservas/ReservasUsuario';
import EditarEmpresa from './components/Companies/editarEmpresa';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import EditarEspacio from './components/Publicity/editarEspacio';
import CrearEmpresa from './pages/Administrative/CrearEmpresa';
import CrearItem from './pages/Administrative/CrearItem';
import CrearProveedor from './pages/Administrative/CrearProveedor';
import CrearPublicidad from './pages/Administrative/CrearPublicidad';
import EditarItem from './pages/Administrative/EditarItem';
import EditarProveedor from './pages/Administrative/EditarProovedor';
import VerClientes from './pages/Administrative/VerClientes';
import VerEmpresas from './pages/Administrative/VerEmpresas';
import VerPublicidades from './pages/Administrative/VerEspPubli';
import VerInventario from './pages/Administrative/VerInventario';
import VerOrdenes from './pages/Administrative/VerOrdenes';
import VerPedidos from './pages/Administrative/VerPedidos';
import VerProveedores from './pages/Administrative/VerProveedores';
import VerReservas from './pages/Administrative/VerReservas';
import Publicidad from './pages/Client/Publicidad';
import VerReserva from './pages/Client/VerReserva';
import Nosotros from './pages/Informatives/About';
import Contact from './pages/Informatives/Contact';
import Home from "./pages/Informatives/Home";
import Menu from './pages/Menu';
import CambiarContra from './pages/Passwords/CambiarContra';
import RecuperarContra from './pages/Passwords/RecuperarContra';
import FormEditPerfil from './pages/Users/EditPerfil';
import Login from './pages/Users/Login';
import Pedir from './pages/Users/Pedir';
import Perfil from './pages/Users/Perfil';
import RegistroUsuario from './pages/Users/RegistroUsuario';
import ReservarMesa from './pages/Users/ReservarMesa';
import VerPedido from './pages/Users/VerPedido';



function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<RegistroUsuario />} />
          <Route path="/verClientes" element={<VerClientes />} />
          <Route path="/recuperarContra" element={<RecuperarContra />} />
          <Route path="/cambiarContra" element={<CambiarContra />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/crearPublicidad" element={<CrearPublicidad />} />
          <Route path="/verPublicidades" element={<VerPublicidades />} />
          <Route path="/serviciosExternos" element={<Publicidad />} />
          <Route path="/crearItem" element={<CrearItem />} />
          <Route path="/inventario" element={<VerInventario />} />
          <Route path="/pedidos" element={<VerPedidos />} />
          <Route path="/pedido" element={<VerPedido />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pedir" element={<Pedir />} />
          <Route path="/reservaciones" element={<ReservarMesa />} />
          <Route path="/ordenes" element={<VerOrdenes />} />
          <Route path="/reserva" element={<VerReserva />} />
          <Route path="/reservas" element={<VerReservas />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/crearProveedor" element={<CrearProveedor />} />
          <Route path="/proveedores" element={<VerProveedores />} />
          <Route path="/editarItem" element={<EditarItem />} />
          <Route path="/editarProovedor" element={<EditarProveedor />} />
          <Route path="/editarEspacio" element={<EditarEspacio />} />
          <Route path="/crearEmpresa" element={<CrearEmpresa />} />
          <Route path="/verEmpresas" element={<VerEmpresas />} />
          <Route path="/editarEmpresa" element={<EditarEmpresa />} />
          <Route path="/editarPerfil" element={<FormEditPerfil />} />
          <Route path="/reservarMesa" element={<ReservaUsuario />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
