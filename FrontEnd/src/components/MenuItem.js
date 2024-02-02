import AddItem from "./AddItem";

export default function MenuItem({titulo, desc, img, need, needDesc, price}){
    

    return(
        
            <div class="col-lg-4">
                <div class="position-relative mb-5">
                    <img class="img-fluid rounded-3 mb-3" src={img} />
                    <a class="h4 fw-bolder text-decoration-none link-dark stretched-link" href="#!">{titulo}</a>
                    <br /><br />
                    <NeedDesc va={needDesc} desc={desc}/>
                    <div class="container">
                        
                    </div>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Verify va={need}/>
                    <p style={{textAlign:"justify"}}>{price}</p>
                    </div>
                    
                </div>
            </div>
    )
}


function Verify({va}){
    if (va == 1) {
        return <AddItem />;
    }
}

function NeedDesc({va, desc}){
    if (va == 1) {
        return (<p style={{textAlign:"justify"}}>{desc}</p>)
    }
}