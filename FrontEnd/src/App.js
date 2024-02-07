import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import CrearItem from './pages/Administrative/CrearItem';
import CrearProveedor from './pages/Administrative/CrearProveedor';
import CrearPublicidad from './pages/Administrative/CrearPublicidad';
import VerClientes from './pages/Administrative/VerClientes';
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
          
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
