import AddItem from "./AddItem";

export default function MenuItem({titulo, desc, price}){
    

    return(
        
            <div class="col-lg-11" style={{paddingLeft: "15px"}}>
                <div class="position-relative mb-5">
                    <a class="h4 fw-bolder text-decoration-none link-dark stretched-link" href="#!">{titulo}</a>
                    <br /><br />
                    <p>{desc}</p>
                    <div class="container">
                        
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                    
                    <p style={{textAlign:"justify"}}>{price}</p>
                    </div>
                </div>
            </div>
    )
}

