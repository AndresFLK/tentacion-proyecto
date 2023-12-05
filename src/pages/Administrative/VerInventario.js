import { ButtonLink } from "../../components/Button";
import Table from "../../components/Table";

export default function VerInventario(){
    const th = ['IdProducto', 'Nombre', 'Descripcion', 'Cantidad', 'Precio Unitario', 'Proveedor', 'Editar', 'Borrar']
    const obj1 = {
        id: '1001', 
        cedula: 'Pechuga de pollo', 
        nombre: 'Paquete de 10 pechugas de pollo deshuesadas',
        apellido: '5',
        email: '¢30,000.00',
        tel: 'Pipasa'
    };
    const obj2 = {
        id: '1002', 
        cedula: 'Arroz', 
        nombre: 'Bolsa de arroz de 10kg',
        apellido: '4',
        email: '¢5000.00',
        tel: 'Tio Pelon'
    };
    return (
        
        <div class="col-md-10 mx-auto">
        <br /><br />
        
        <div class="row mt-9">
        <ButtonLink to={"/crearItem"} className="btn btn-primary profile-button btn-lg"> <i class="bi bi-basket2-fill"></i> Registrar Nuevo Producto</ButtonLink>
            <br /><br />
        </div>

        <br /><br />
            <Table th={th} data1={obj1} data2={obj2}/>
        </div>
        
    )
}