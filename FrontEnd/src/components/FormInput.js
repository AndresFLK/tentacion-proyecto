
export default function FormInput({children, ...props }){
    return(
        <div class="form-floating mb-3">
            <input {...props}/>
            <label>{children}</label>
        </div>
    )
}