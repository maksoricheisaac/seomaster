
import Hero from './Hero'
import Navbar from './Navbar'

const Header = ({children}) => {
    return (
        <header style={{"backgroundColor": "#2124B1"}} className="relative z-0">
            <Navbar />
            {children}  
        </header>
    )
}   

export default Header