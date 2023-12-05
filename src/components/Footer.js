import { CustomLink } from "./Navbar";


export default function Footer(){

    const style = {
        position: "fixed",
        bottom: 0
    };

    return(
        <footer class="bg-dark py-4 mt-auto" style={{style}}>
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Restaurante Tentacion</div></div>
                    <div class="col-auto">
                        <CustomLink to="/us" className="link-light small">Sobre Nosotros</CustomLink>
                        <CustomLink to="/contact" className="link-light small">Contacto</CustomLink>
                    </div>
                </div>
            </div>
        </footer>
    )
}


