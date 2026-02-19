import { Link } from "react-router"

export default function Navigationbutton({name, link}) {

    return(
        <Link to={link}>
            <button className="font-MomoSignature rounded-3xl p-4 text-2xl
            mx-15 bg-neutral-400/60 hover:bg-slate-900 hover:text-white hover:scale-115
            transition px-7">{name}</button>
        </Link>
    )
}