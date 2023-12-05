

export default function Table({th, data1, data2}){
    return(
        <table class="table">
        <thead class="thead-dark">
          <tr>
            {th.map((item) =>{
                    return(
                        <CustomTh>{item}</CustomTh>
                    );
            })}
          </tr>
        </thead>
        <tbody>
        <CustomTrTd data={data1} />
        <CustomTrTd data={data2} />
        </tbody>
      </table>
    )
}

export function CustomTh({children}){
    return(
        <th scope="col" class="bg-success">{children}</th>
    )
}

export function CustomTrTd({data}){
    return(
        <tr>
            <th scope="row">{data.id}</th>
            <td>{data.cedula}</td>
            <td>{data.nombre}</td>
            <td>{data.apellido}</td>
            <td>{data.email}</td>
            <td>{data.tel}</td>
            <td><button class="btn btn-primary profile-button" type="button">Editar</button></td>
            <td><button class="btn btn-danger profile-button" type="button">Borrar</button></td>
        </tr>
    )
}