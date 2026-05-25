import styles from "./NavBar.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function NavBar(){
    return(
        
        <nav className={styles.navBar}> 
           <ul>
            <li> <Link to="/">Home</Link></li>
            <li><Link to="/Productos">Menu</Link></li>
            <li className={styles.navlogo}>
                <Link to="/">
                    <img src="/img/icono.png" alt="/" />
                </Link>
                
            </li>
            
            <li><Link to="/carrito">Carrito</Link></li>
            <li> <Link to="/nosotros">Nosotros</Link></li>
            </ul> 
                
        </nav>
            
        
    )
}
export default NavBar;