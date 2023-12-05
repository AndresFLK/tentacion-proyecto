import { Link } from "react-router-dom"
import { ButtonLink } from "./Button"

export default function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container px-5">
    <CustomLink to="/" className="navbar-brand">Restaurante Tentacion</CustomLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Cliente</a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                    <CustomLink to="/perfil" className="dropdown-item">Perfil</CustomLink>
                    <CustomLink to="/serviciosExternos" className="dropdown-item">Espacio Publicitario</CustomLink>
                    <CustomLink to="/reservaciones" className="dropdown-item">Hacer una Reservacion</CustomLink>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Admin</a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                        <CustomLink to="/verClientes" className="dropdown-item">Usuarios</CustomLink>
                        <CustomLink to="/crearPublicidad" className="dropdown-item">Crear Espacio Publicitario</CustomLink>
                        <CustomLink to="/verPublicidades" className="dropdown-item">Ver Espacios Publicitarios</CustomLink>
                        <CustomLink to="/crearItem" className="dropdown-item">Crear Item</CustomLink>
                        <CustomLink to="/inventario" className="dropdown-item">Ver Inventario</CustomLink>
                        <CustomLink to="/pedidos" className="dropdown-item">Ver Pedidos</CustomLink>
                        <CustomLink to="/pedir" className="dropdown-item">Añadir Orden</CustomLink>
                        <CustomLink to="/ordenes" className="dropdown-item">Ver Ordenes</CustomLink>
                    </ul>
                </li>
                <ButtonLink to={"/pedir"} className="btn btn-primary">Ver Carrito</ButtonLink>
                <i class="bi bi-cart-plus-fill"></i>
            </ul>
        </div>
    </div>
</nav>
    )
}


export function CustomLink({ to, children, ...props }){
    return(
        <li>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}