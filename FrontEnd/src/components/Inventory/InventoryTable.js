import React, { useState } from "react";
import "./Modal.css";



export default function InventoryTable({th, data1, data2}){

    const [modal, setModal] = useState(true);

    const toggleModal = () => {
        setModal(!modal);
    }

    if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

    return(
        <>
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
        <CustomTrTd data={data1} toggleModal={toggleModal}/>
        <CustomTrTd data={data2} toggleModal={toggleModal}/>
        </tbody>
        </table>
            
        {modal && (
        <div>
            <div className="overlay" onClick={toggleModal}>
                <div className="modal-content">
                <div style={{ textAlign: 'center', marginBottom: '10%'}}>
                    <h4>¿Está seguro que desea borrar este Producto?</h4>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', width: '50%', justifyContent: 'space-between', margin: 'auto' }}>
                    <button class="btn btn-secondary profile-button" type="button" style={{ width: '40%' }}>Cancelar</button>
                    <button class="btn btn-danger profile-button" type="button" style={{ width: '40%' }}>Borrar</button>     
                </div>
                
                </div>
            </div>
        </div>
        )}
        
        
      </>
    )
}

export function CustomTh({children}){
    return(
        <th scope="col" class="bg-success" style={{ textAlign: 'center' }}>{children}</th>
    )
}




export function CustomTrTd({data, toggleModal}){


    return(
        <>
        <tr>
            <th scope="row" style={{ textAlign: 'center' }} className="h">{data.id}</th>
            <td style={{ textAlign: 'center' }}>{data.nombre}</td>
            <td style={{ textAlign: 'center' }}>{data.descripcion}</td>
            <td>
                <div style={{ display: 'flex', alignItems: 'center', width: '100px', justifyContent: 'space-between', margin: 'auto' }}>
                    <button className="btn btn-danger btn-circle btn-xl" type="button">-</button>
                        {data.cantidad}
                    <button className="btn btn-success btn-circle btn-xl" type="button">+</button>
                </div>
            </td>
            <td style={{ textAlign: 'center' }}>{data.precioUnitario}</td>
            <td style={{ textAlign: 'center' }}>{data.proveedor}</td>
            <td style={{ textAlign: 'center' }}><button class="btn btn-primary profile-button" type="button" >Editar</button></td>
            <td style={{ textAlign: 'center' }}>
            <button 
                onClick={toggleModal}
                class="btn btn-danger profile-button" type="button">Borrar</button>
            </td>
        </tr>
        
        </>
    )
}