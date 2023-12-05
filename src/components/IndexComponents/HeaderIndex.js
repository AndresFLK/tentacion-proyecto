import { ButtonLink } from "../Button";


export default function HeaderIndex(){
    return(
        <header class="bg-dark py-5">
            <div class="container px-5">
            <div class="row gx-5 align-items-center justify-content-center">
                <div class="col-lg-8 col-xl-7 col-xxl-6">
                    <div class="my-5 text-center text-xl-start">
                        <h1 class="display-5 fw-bolder text-white mb-2">Restaurante Tentación</h1>
                        <p class="lead fw-normal text-white-50 mb-4">
                            Bienvenido a nuestro hogar culinario, donde la comida se fusiona con la hospitalidad en un abrazo de sabores y comodidad. ¡Es un placer tenerte con nosotros!
                        </p>
                    <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                        <ButtonLink to={"/login"} className="btn btn-primary btn-lg px-4 me-sm-3">Iniciar Sesion</ButtonLink>
                        <a class="btn btn-outline-light btn-lg px-4" href="#!">Sobre Nosotros</a>
                    </div>
                    </div>
                </div>
                <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                    <img class="img-fluid rounded-3 my-5" src="https://scontent.fsyq3-1.fna.fbcdn.net/v/t39.30808-6/277569183_266717375669050_4407849763631722809_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=783fdb&_nc_ohc=-50WqL_5qfkAX86XkqS&_nc_ht=scontent.fsyq3-1.fna&oh=00_AfBBNkj55XBYbntoiiWJe-bd6UJeONdTxSBre-NBAeUMhQ&oe=656D4095" alt="..." />
                </div>
                </div>
            </div>
        </header>
    )
}