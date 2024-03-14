import { ButtonLink } from "../../components/Button";
import PublicityTable from "../../components/Publicity/Publicitytable";



export default function VerPublicidades(){
    const th = ['Empresa', 'Tiempo', 'Editar', 'Borrar']
    const obj1 = {
        id: 'Toures Juan', 
        nombre: '2 dias'
    };
    const obj2 = {
        id: 'Toures Juan', 
        nombre: '2 dias'
    };
    return (
        <div class="col-md-10 mx-auto">
        <br /><br />
        <div class="row mt-9">
        <ButtonLink to={"/crearPublicidad"} className="btn btn-primary profile-button btn-lg"> <i class="bi bi-image"></i> Registrar Nuevo Espacio Publicitario</ButtonLink>
            <br /><br />
        </div>
        <br /><br />
            <PublicityTable th={th} data1={obj1} data2={obj2}/>
        </div>
        
    )
}