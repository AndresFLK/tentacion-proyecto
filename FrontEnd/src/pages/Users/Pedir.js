// import { useEffect } from 'react';
// import io from 'socket.io-client';
// import { ButtonLink } from "../../components/Button";
// import MenuItem from "../../components/MenuItem";

// export default function Pedir(){

//   var token = sessionStorage.getItem('token')

//     return(
//     <>
//       <div class="container py-5">
//         <div class="row d-flex my-12" >
//           <div class="col-md-5" >
//             <div class="card mb-4">
//                 <div class="card-header py-3">
//                   <h5 class="mb-0">Enviar Pedido</h5>
//                 </div>
//                 <div class="card-body" >
//                   <div class="row" >
//                     <div class="accordion-body">
//                     <form>
//                       <input id='emit'/>
//                     </form>                      
//                     </div>
//                     <hr class="my-4" />
//                   </div>
//                   <button className="btn btn-success btn-lg btn-block" style={{marginRight: "20px"}}>Enviar Pedido</button>
//                 </div>
//             </div>
//           </div>
//           <div class="col-md-7" >
//             <div class="card mb-4">
//                 <div class="card-header py-3">
//                   <h5 class="mb-0">Pedidos Activos</h5>
//                 </div>
//                 <div class="card-body" >
//                   <div class="row" >
//                     <div class="accordion-body">
//                     <MenuItem 
//                       titulo={"Hamburguesa Tentaciónsss"} 
//                       desc={"Una jugosa hamburguesa de carne de res premium, acompañada de cebolla caramelizada y queso Gouda ahumado que le aporta un sabor ahumado y suave."} 
//                       img={""} 
//                       price={"¢8,500.00"}
//                     />                       
//                     </div>
//                     <hr class="my-1" />
//                   </div>
                
//               </div>
//             </div>
//           </div>
//         <div/>
//         </div>
        
//       </div>
//     </>
    
//     )
// }



import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const Pedir = () => {
  const [ordenes, setOrdenes] = useState([]);
  const token = sessionStorage.getItem('token')
  const socket = io('http://localhost:8008', { query: { token } });
  useEffect(() => {
     // Ideally, this token should be stored securely and not hard-coded
    
    
    // socket.on('connect', () => {
    //   console.log('Conectado al servidor');
    // });

    socket.connect();

    socket.on('order_update', (data) => {
      setOrdenes(data.ordenes); // Update the state with the new orders
    });

    socket.on('error', (error) => {
      console.log('Error:', error);
    });

    // Clean up on unmount
    return () => {
      socket.off('connect');
      socket.off('order_update');
      socket.off('error');
      socket.close();
    };
  }, []);

  const emitNewOrder = () => {
    socket.emit('new_order', {
      descripcion: 'Descripción del pedido',
      num_mesa: 5,
      precio: 19.99,
      estado: 'pendiente'
    });
  };

  const updateOrderState = () => {
    const orderId = document.getElementById('orderId').value;
    const orderState = document.getElementById('orderState').value;
    socket.emit('update_order_state', {
      id_orden: orderId,
      estado: orderState
    });
  };

  return (
    <div>
      <button id="emit" onClick={emitNewOrder}>New Order</button>
      <input id="orderId" placeholder="Order ID" />
      <input id="orderState" placeholder="Order State" />
      <button id="updateOrder" onClick={updateOrderState}>Update Order</button>
      <div id="ordenes">
        {ordenes.map(orden => (
          <div key={orden.id_orden}>
            Id Orden: {orden.id_orden}, Descripción: {orden.descripcion}, Mesa: {orden.num_mesa}, Precio: {orden.precio}, Estado: {orden.estado}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pedir;