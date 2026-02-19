import Navigationbutton from '/src/components/navbar/Navigationbutton.jsx'

export default function Navigation(){
    
    return(
        <div className="py-5">
            <Navigationbutton name="About" link="/"></Navigationbutton>
            <Navigationbutton name="Shop" link="Shop"></Navigationbutton>
            <Navigationbutton name="Cart" link="Cart"></Navigationbutton>
        </div>
    )
}