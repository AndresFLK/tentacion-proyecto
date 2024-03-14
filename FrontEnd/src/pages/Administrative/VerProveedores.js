import { ButtonLink } from "../../components/Button";
import SupplierTable from "../../components/Supplier/SupplierTable";

export default function VerProveedores(){
    const th = ['IdProveedor', 'Nombre','Editar', 'Borrar']
    const obj1 = {
        id: '1001', 
        nombre: 'Pipasa'
    };
    const obj2 = {
        id: '1002', 
        nombre: 'Tio Pelon'
    };
    return (
        
        <div class="col-md-10 mx-auto">
        <br /><br />
        
        <div class="row mt-9">
        <ButtonLink to={"/crearProveedor"} className="btn btn-primary profile-button btn-lg"> <i class="bi bi-person-plus-fill"></i> Registrar Nuevo Proveedor</ButtonLink>
            <br /><br />
        </div>

        <br /><br />
            <SupplierTable th={th} data1={obj1} data2={obj2}/>
        </div>
    )
}