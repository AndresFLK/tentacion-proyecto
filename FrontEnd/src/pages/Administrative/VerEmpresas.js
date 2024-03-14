import { ButtonLink } from "../../components/Button";
import CompanyTable from "../../components/Companies/CompanyTable";


export default function VerEmpresas(){
    const th = ['Nombre', 'Publicidades', 'Editar', 'Borrar']
    const obj1 = {
        id: 'Toures Juan', 
        nombre: 'EP-1'
    };
    const obj2 = {
        id: 'Toures Juan', 
        nombre: 'EP-2'
    };
    return (
        <div class="col-md-10 mx-auto">
        <br /><br />
        <div class="row mt-9">
        <ButtonLink to={"/crearEmpresa"} className="btn btn-primary profile-button btn-lg"> <i class="bi bi-person-lines-fill"></i> Registrar Nueva Empresa</ButtonLink>
            <br /><br />
        </div>
        <br /><br />
            <CompanyTable th={th} data1={obj1} data2={obj2}/>
        </div>
        
    )
}