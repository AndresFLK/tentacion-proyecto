import HeaderAbout from "../../components/AboutComponents/HeaderAbout";
import Principles from "../../components/AboutComponents/Principles";
import Ubicacion from "../../components/AboutComponents/Ubicacion";
import MainItem from "../../components/MainItem";

export default function Nosotros(){
    return(
        <>
        <HeaderAbout />
        <Principles />
        <div class="bg-dark py-5" >
            <div class="container px-5 my-5 " style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
                <MainItem 
                    titulo={"Su Historia en Nuestro Espacio"} 
                    desc={"Cada cliente que cruza nuestras puertas se convierte en parte de nuestra historia. Valoramos cada visita y nos esforzamos por crear recuerdos que perduren mucho después de que el último plato haya sido servido."} 
                    style={{backgroundImage: "url('https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
                />
                <br /><br />
                <Ubicacion />
            </div>
        </div>
        </>
    )
}