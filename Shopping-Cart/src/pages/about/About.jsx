
import ShoppingIcon from "/ShoppingIcon.png"

export default function About() {

    const AboutText = "Your one-stop shop for everything you need!"
    const AboutSubtext = "Add your favorite items to the cart and review them anytime before making your purchase."

    return (

        <div className="h-screen items-center">
            <div className="flex gap-20 justify-center items-center h-7/10">
                    <img className="size-75 self-center" src={ShoppingIcon}></img>
                    <div className="self-center">
                        <h1 className="text-6xl font-Caveat font-bold pb-5">{AboutText}</h1>
                        <h2 className="text-3xl font-Caveat">{AboutSubtext}</h2>
                    </div>
                
            </div>
        </div>

    )
}