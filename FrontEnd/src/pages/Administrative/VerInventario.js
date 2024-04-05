import { ButtonLink } from "../../components/Button";
import InventoryTable from "../../components/Inventory/InventoryTable";

export default function VerInventario(){

    const token = sessionStorage.getItem('token');
    console.log(token);

    const th = ['IdProducto', 'Nombre', 'Descripcion', 'Cantidad', 'Precio Unitario', 'Proveedor', 'Editar', 'Borrar']
    const obj1 = {
        id: '1001', 
        nombre: 'Pechuga de pollo', 
        descripcion: 'Paquete de 10 pechugas de pollo deshuesadas',
        cantidad: '5',
        precioUnitario: '¢30,000.00',
        proveedor: 'Pipasa'
    };
    const obj2 = {
        id: '1002', 
        nombre: 'Arroz', 
        descripcion: 'Bolsa de arroz de 10kg',
        cantidad: '4',
        precioUnitario: '¢5000.00',
        proveedor: 'Tio Pelon'
    };

    return (
        
        <div class="col-md-10 mx-auto">
        <br /><br />
        
        <div class="row mt-9">
        <ButtonLink to={"/crearItem"} className="btn btn-primary profile-button btn-lg"> <i class="bi bi-basket2-fill"></i> Registrar Nuevo Producto</ButtonLink>
            <br /><br />
        </div>

        <br /><br />
            <InventoryTable th={th} data1={obj1} data2={obj2}/>
        </div>
    )
}