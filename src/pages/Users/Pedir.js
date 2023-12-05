import { ButtonLink } from "../../components/Button"
import MenuItem from "../../components/MenuItem"

export default function Pedir(){
    return(
    <div class="container py-5">
      <div class="row d-flex justify-content-center my-4" >
        <div class="col-md-8" >
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Pedido - 4 items</h5>
            </div>
            <div class="card-body" >
              <div class="row" >
  
                        <div class="row gx-2 my-3" style={{display: "flex",justifyContent: "space-between"}}>
                        
                            <MenuItem 
                            titulo={"Risotto de Mariscos"} 
                            desc={"Un arroz cremoso y lleno de sabor, mezclado con una exquisita selección de mariscos que incluyen langostinos, calamares y mejillones."} 
                            img={"https://images.pexels.com/photos/998244/pexels-photo-998244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                            price={"¢8,500.00"}
                            />

                            <MenuItem 
                            titulo={"Filete de Salmón a la Miel"} 
                            desc={"Filete de salmón glaseado con una irresistible mezcla de miel y mostaza, logrando un equilibrio perfecto entre lo dulce y lo picante"} 
                            img={"https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                            price={"¢8,500.00"}

                            />
                            
                            <MenuItem 
                            titulo={" Tacos de Pulpo"} 
                            desc={"Tacos de pulpo a la parrilla, con una salsa chimichurri vibrante que realza la frescura del pulpo. Se sirven en tortillas de maíz"} 
                            img={"https://images.pexels.com/photos/2338015/pexels-photo-2338015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                            price={"¢8,500.00"}/>

                            <MenuItem 
                            titulo={"Hamburguesa Tentación"} 
                            desc={"Una jugosa hamburguesa de carne de res premium, acompañada de cebolla caramelizada y queso Gouda ahumado que le aporta un sabor ahumado y suave."} 
                            img={"https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                            price={"¢8,500.00"}/>

                </div>
  
              <hr class="my-4" />
  
            </div>
          </div>
        </div>
        <div class="col-ma">
          <div class="card mb-4">
            <div class="card-header py-3">
              <h5 class="mb-0">Total</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>¢8,500.00</span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total a pagar</strong>
                    <strong>
                      <p class="mb-0">(incluyendo IVA)</p>
                    </strong>
                  </div>
                  <span><strong>¢8,500.00</strong></span>
                </li>
              </ul>
  
              <ButtonLink to={"/pedido"} className="btn btn-success btn-lg btn-block" style={{marginRight: "20px"}}>Enviar Comprobante</ButtonLink>
              <button type="button" class="btn btn-warning btn-lg btn-block" style={{marginRight: "20px"}}>
                Editar Orden
              </button>
              <button type="button" class="btn btn-danger btn-lg btn-block">
                Cancerlar Pedido
              </button>
            </div>
          </div>
        </div>
      </div>
      <div/>
    </div>
    </div>
    )
}