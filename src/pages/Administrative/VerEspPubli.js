import Table from "../../components/Table";


export default function VerPublicidades(){
    const th = ['Empresa', 'Tiempo', 'Editar', 'Borrar']
    const obj1 = {
        id: 'Toures Juan', 
        cedula: '2 dias'
    };
    const obj2 = {
        id: 'Toures Juan', 
        cedula: '2 dias'
    };
    return (
        <div class="col-md-10 mx-auto">
        <br /><br />
            <Table th={th} data1={obj1} data2={obj2}/>
        </div>
        
    )
}