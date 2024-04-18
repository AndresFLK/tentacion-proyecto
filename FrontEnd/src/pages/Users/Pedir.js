import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { ButtonLink } from "../../components/Button";
import MenuItem from "../../components/MenuItem";
import useSocket from '../Hooks/useSocket';

const Pedir = () => {
  // const [ordenes, setOrdenes] = useState([]);
  // const token = sessionStorage.getItem('token')
  // const socket = io('http://localhost:8008', { query: { token } });

  const token = sessionStorage.getItem('token');
  const socket = useSocket(token);
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    //socket.connect();

    socket.on('order_update', (data) => {
      setOrdenes(data.ordenes); // Update the state with the new orders
    });

    socket.on('error', (error) => {
      console.log('Error:', error);
    });

    // Clean up on unmount
    return () => {
      // socket.off('order_update');
      // socket.off('error');
      // socket.disconnect();
      socket.off('order_update');
      socket.off('error');

    };
  }, [socket]);

  const emitNewOrder = () => {
    const descripcion = document.getElementById('descripcion').value;
    const num_mesa = document.getElementById('num_mesa').value;
    const precio = document.getElementById('precio').value;
    const estado = 'pendiente'; // This is set as default

    socket.emit('new_order', {
        descripcion: descripcion,
        num_mesa: parseInt(num_mesa, 10),
        precio: parseFloat(precio),
        estado: estado
    });

    document.getElementById('descripcion').value = '';
    document.getElementById('num_mesa').value = '';
    document.getElementById('precio').value = '';
  };

  const updateOrderState = () => {
    const orderId = document.getElementById('orderId').value;
    const orderState = document.getElementById('orderState').value;
    socket.emit('update_order_state', {
      id_orden: orderId,
      estado: orderState
    });

    document.getElementById('orderId').value = '';
    document.getElementById('orderState').value = '';
  };

  return (
    <>
      <div class="container py-5">
        <div class="row d-flex my-12" >
           <div class="col-md-5" >
             <div class="card mb-4">
                 <div class="card-header py-3">
                   <h5 class="mb-0">Enviar Pedido</h5>
                 </div>
                 <div class="card-body" >
                   <div class="row" >
                     <div class="accordion-body">
                     <form id="orderForm">
                        <input type="text" id="descripcion" placeholder="Descripción del pedido" class="form-control mb-2"/>
                        <input type="number" id="num_mesa" placeholder="Número de mesa" class="form-control mb-2"/>
                        <input type="text" id="precio" placeholder="Precio" class="form-control mb-2"/>
                      </form>                     
                     </div>
                     <hr class="my-4" />
                   </div>
                   <button id="emit" onClick={emitNewOrder} className="btn btn-success btn-lg btn-block" style={{marginRight: "20px"}}>Enviar Pedido</button>
                 </div>
             </div>
             <div class="card mb-4">
                 <div class="card-header py-3">
                   <h5 class="mb-0">Actualizar Estado de Pedido</h5>
                 </div>
                 <div class="card-body" >
                   <div class="row" >
                     <div class="accordion-body">
                     <form>
                        <input id="orderId" placeholder="Numero de Orden" className='form-control mb-2'/>
                        <input id="orderState" placeholder="Estado" className='form-control mb-2'/>
                     </form>                      
                     </div>
                     <hr class="my-4" />
                   </div>
                   <button id="updateOrder" onClick={updateOrderState} className="btn btn-success btn-lg btn-block" style={{marginRight: "20px"}}>Actualizar Estado</button>
                 </div>
             </div>
           </div>
           <div class="col-md-7" >
             <div class="card mb-4">
                 <div class="card-header py-3">
                   <h5 class="mb-0">Pedidos Activos</h5>
                 </div>
                 <div class="card-body" >
                   <div class="row" >
                    <div class="accordion-body">
                      <div id="ordenes">
                        {ordenes.map(orden => (
                          <>
                            <div class="col-lg-4">
                              <div class="position-relative mb-5">
                                  <a class="h4 fw-bolder text-decoration-none link-dark stretched-link" href="#!">{"Mesa# " + orden.num_mesa} </a>
                                  <br /><br />
                                  <p>Orden# {orden.id_orden}</p>
                                  <p style={{textAlign:"justify"}}>{orden.descripcion}</p>
                                  <div class="container">
                                      
                                  </div>
                                  <div style={{display: "flex", justifyContent: "space-between"}}>
                                    <p style={{textAlign:"justify"}}>{orden.precio}</p>
                                  </div>
                                  {
                                    orden.estado === 'pendiente' ? (
                                      <button className="btn btn-warning btn-sm btn-block" style={{ marginRight: "20px" }}>
                                        {orden.estado}
                                      </button>
                                    ) : orden.estado === 'en preparacion' ? (
                                      <button className="btn btn-primary btn-sm btn-block" style={{ marginRight: "20px" }}>
                                        {orden.estado}
                                      </button>
                                    ) : orden.estado === 'por entregar' ? (
                                      <button className="btn btn-info btn-sm btn-block" style={{ marginRight: "20px" }}>
                                        {orden.estado}
                                      </button>
                                    ) : orden.estado === 'entregada' ? (
                                      <button className="btn btn-success btn-sm btn-block" style={{ marginRight: "20px" }}>
                                        {orden.estado}
                                      </button>
                                    ) : null
                                  }
                                  
                              </div>
                            </div>
                            <hr></hr>
                          </>
                          
                        ))}
                      </div>
                                           
                    </div>
                    <hr class="my-1" />
                  </div>
                
              </div>
            </div>
          </div>
        <div/>
        </div>
        
      </div>
    </>
    
  );
};

export default Pedir;