import { Link } from "react-router-dom";
import { ButtonLink } from "./Button";

export default function Navbar(){

    
    function openAppB() {
        const appBWindow = window.open('http://localhost:3000/base/popovers#/dashboard');
        
        setTimeout(function() {
            const token = sessionStorage.getItem('token');
            console.log(token);
            appBWindow.postMessage({ accessToken: token }, 'http://localhost:3000');
        }, 2000); 
    }

    function handleClick(e) {
        e.preventDefault();
        openAppB();
    }

    function logOut(e) {
        e.preventDefault()
        sessionStorage.removeItem('token');
        sessionStorage.clear();
        window.location.href = '/';
    }

    function profile(e) {
        e.preventDefault()
        window.location.href = '/perfil';
    }

    if(sessionStorage.getItem('token')){
        var userString = sessionStorage.getItem('user');
        var user = JSON.parse(userString);
        console.log(user.rol); 
    }
    

    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-5">
            <CustomLink to="/" className="navbar-brand">Restaurante Tentacion</CustomLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item">
                            <ButtonLink to={"/serviciosExternos"} className="btn btn-primary" style={{ margin: '0px 15px 0px 15px' }}>Servicios</ButtonLink>
                        </li>
                        {
                            user && user.rol === "ADMIN" &&
                            <>
                                <li className="nav-item">
                                <ButtonLink to={"/pedir"} className="btn btn-primary" style={{ margin: '0px 15px 0px 0px' }}>Agregar Orden</ButtonLink>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-primary" href="#" onClick={handleClick}>Administrativo</a>
                                </li>
                            </>
                            
                        }
                        {
                            user &&
                            <>
                                <li className="nav-item">
                                    <a className="btn btn-primary" href="#" onClick={profile} style={{ margin: '0px 15px 0px 15px' }}><i class="bi bi-person-fill"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-primary" href="#" onClick={logOut} ><i class="bi bi-door-open-fill bi"></i></a>
                                </li>
                            </>
                        }
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