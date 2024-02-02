import Table from "../../components/Table";


export default function VerClientes(){
    const th = ['IdCliente', 'Cedula', 'Nombre', 'Apellido', 'Correo Electronico', 'Telefono', 'Editar', 'Borrar']
    const obj1 = {
        id: '1001', 
        cedula: '1-1234-5678', 
        nombre: 'Alice',
        apellido: 'Lopez',
        email: 'alice@gmail.com',
        tel: '12345678'
    };
    const obj2 = {
        id: '1001', 
        cedula: '1-0001-0002', 
        nombre: 'Juan',
        apellido: 'Martinez',
        email: 'juan@gmail.com',
        tel: '12345678'
    };
    return (
        <div class="col-md-10 mx-auto">
        <br /><br />
            <Table th={th} data1={obj1} data2={obj2}/>
        </div>
        
    )
}