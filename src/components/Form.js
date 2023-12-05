import Button from "./Button";
import FormInput from "./FormInput";

export default function Form({items, children}){
    return(
        <div class="row gx-5 justify-content-center">
            <div class="col-lg-8 col-xl-6">
                <form>
                {items.map((item) =>{
                    return(
                        <FormInput class="form-control" type="text">{item}</FormInput>
                    );
                })}
                {children}
                </form>
            </div>
        </div>
    )
}