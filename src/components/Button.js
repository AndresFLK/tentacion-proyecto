
import { Link } from "react-router-dom"


export default function Button({children, ...props}){
    return(
        <button {...props} type="submit">{children}</button>
    )
}

export function ButtonLink({ to, children, ...props }){
    return(
        <Link to={to} {...props} type="submit">{children}</Link>
    )
}