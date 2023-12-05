import AddItem from "../components/AddItem";
import MainItem from "../components/MainItem";
import MenuItem from "../components/MenuItem";


export default function Menu(){
    return(
        <section class="py-5">
            <div class="container px-5 my-5">
                <MainItem 
                    titulo={"Atún Tentación con un Toque Asiático"} 
                    desc={"Una deliciosa creación que combina la frescura del atún con un toque cautivador de la cocina asiática. Cada bocado es una obra maestra de sabores equilibrados y texturas irresistibles que te transportarán a un viaje gastronómico lleno de elegancia y sorpresas."} 
                    style={{backgroundImage: "url('https://images.pexels.com/photos/6424962/pexels-photo-6424962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}
                />
                <div class="row gx-5 my-5">
                
                    <MenuItem 
                    titulo={"Risotto de Mariscos"} 
                    desc={"Un arroz cremoso y lleno de sabor, mezclado con una exquisita selección de mariscos que incluyen langostinos, calamares y mejillones."} 
                    img={"https://images.pexels.com/photos/998244/pexels-photo-998244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    need={1} needDesc={1} price={"¢8,500.00"}
                    />
                    <MenuItem 
                    titulo={"Filete de Salmón a la Miel"} 
                    desc={"Filete de salmón glaseado con una irresistible mezcla de miel y mostaza, logrando un equilibrio perfecto entre lo dulce y lo picante"} 
                    img={"https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                    need={1} needDesc={1} price={"¢8,500.00"}/>
                    
                    <MenuItem 
                    titulo={"Pappardelle de Cordero "} 
                    desc={"Pasta pappardelle perfectamente cocida, acompañada de un ragú cordero, creando un plato lleno de profundidad y complejidad de sabores."} 
                    img={"https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                    need={1} needDesc={1} price={"¢8,500.00"}/>

                    <MenuItem 
                    titulo={" Tacos de Pulpo"} 
                    desc={"Tacos de pulpo a la parrilla, con una salsa chimichurri vibrante que realza la frescura del pulpo. Se sirven en tortillas de maíz"} 
                    img={"https://images.pexels.com/photos/2338015/pexels-photo-2338015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                    need={1} needDesc={1} price={"¢8,500.00"}/>

                    <MenuItem 
                    titulo={" Pato a la Naranja"} 
                    desc={"Una interpretación moderna del clásico pato a la naranja, con una piel crujiente y una jugosa carne de pato bañada en una salsa de naranja agridulce"} 
                    img={"https://images.pexels.com/photos/5718104/pexels-photo-5718104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                    need={1} needDesc={1} price={"¢8,500.00"}/>

                    <MenuItem 
                    titulo={"Ensalada Mediterránea"} 
                    desc={"Una ensalada fresca y saludable que combina quinoa, tomates cherry, pepino, aceitunas y queso feta añadiendo profundidad y sabor a esta opción ligera pero satisfactoria"} 
                    img={"https://images.pexels.com/photos/8963467/pexels-photo-8963467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                    need={1} needDesc={1} price={"¢8,500.00"}/>

                    <MenuItem 
                    titulo={"Hamburguesa Tentación"} 
                    desc={"Una jugosa hamburguesa de carne de res premium, acompañada de cebolla caramelizada y queso Gouda ahumado que le aporta un sabor ahumado y suave."} 
                    img={"https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                    need={1} needDesc={1} price={"¢8,500.00"}/>
    
                    <MenuItem 
                    titulo={"Tacos de Short Rib"} 
                    desc={"Tacos irresistibles rellenos de short rib cocido a fuego lento hasta la perfección, desmenuzándose con cada bocado. La salsa barbacoa de café le proporciona una profundidad única"} 
                    img={"https://images.pexels.com/photos/7613564/pexels-photo-7613564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                    need={1} needDesc={1} price={"¢8,500.00"}/>

                    <MenuItem 
                    titulo={"Burrito de Cerdo Desmechado"} 
                    desc={"Un burrito generosamente relleno de cerdo desmechado, bañado en una salsa verde picante y acompañado de guacamole fresco y otros vegatales"} 
                    img={"https://images.pexels.com/photos/11136408/pexels-photo-11136408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                    need={1} needDesc={1} price={"¢8,500.00"}/>

                </div>
            </div>
        </section>
    )
}
