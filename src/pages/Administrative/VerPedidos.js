import Table from "../../components/Table";

export default function VerPedidos(){
    const th = ['IdPedido', 'Cedula Cliente', 'Descripcion de la Orden', 'Precio', 'Direccion', 'Estado', 'Aztualizar Estado', 'Borrar']
    const obj1 = {
        id: '1001', 
        cedula: '1-1234-5678', 
        nombre: 'Arroz con pollo x2 - Casado de carne x1',
        apellido: '¢16,750.00',
        email: 'Calle Segunda despues del Hotel Buena Vista, Casa #43',
        tel: 'En preparacion'
    };
    const obj2 = {
        id: '1002', 
        cedula: '1-0022-0033', 
        nombre: 'Hamburguesa doble con queso x1 - Ensalada Tentacion x3',
        apellido: '¢21,345.00',
        email: 'Villa Serena, Apartamento #2',
        tel: 'Aceptado'
    };
    return (
        
        <div class="col-md-10 mx-auto">
        <br /><br />

        <br /><br />
            <Table th={th} data1={obj1} data2={obj2}/>
        </div>
        
    )
}