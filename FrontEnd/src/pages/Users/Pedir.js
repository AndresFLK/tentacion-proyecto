import { ButtonLink } from "../../components/Button"
import MenuItem from "../../components/MenuItem"

export default function Pedir(){
    return(
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
                  <form>
                    <input />
                  </form>                      
                  </div>
                  <hr class="my-4" />
                </div>
                <button className="btn btn-success btn-lg btn-block" style={{marginRight: "20px"}}>Enviar Pedido</button>
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
                  <MenuItem 
                    titulo={"Hamburguesa Tentaciónsss"} 
                    desc={"Una jugosa hamburguesa de carne de res premium, acompañada de cebolla caramelizada y queso Gouda ahumado que le aporta un sabor ahumado y suave."} 
                    img={""} 
                    price={"¢8,500.00"}
                  />                       
                  </div>
                  <hr class="my-1" />
                </div>
              
            </div>
          </div>
        </div>
      <div/>
      </div>
      
    </div>
    )
}