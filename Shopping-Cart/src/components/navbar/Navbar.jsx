import NavButton from './NavButton.jsx'

export default function Navbar(){
    
    return(
        <div className="py-5">
            <NavButton name="About" link="/"></NavButton>
            <NavButton name="Shop" link="Shop"></NavButton>
            <NavButton name="Cart" link="Cart"></NavButton>
        </div>
    )
}