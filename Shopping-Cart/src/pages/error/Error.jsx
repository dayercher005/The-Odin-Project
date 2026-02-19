import { Link } from "react-router"

export default function Error() {

    return(
        <div className="flex flex-col justify-center items-center gap-7 h-screen bg-linear-to-br from-pink-500 to-sky-600 ">
            <h1 className="text-5xl font-MomoSignature py-5">Oh no, this page doesn't exist!</h1>
            <Link to = "/">
                <button className="font-Caveat text-4xl px-5 py-3 rounded-2xl bg-neutral-400/60 hover:bg-slate-900 hover:text-white
                hover:scale-110 transition p-2">Back to About</button>
            </Link>
        </div>
    )
}