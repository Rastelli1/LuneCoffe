import styles from "./Header.module.css"
import NavBar from "../navBar/NavBar";
function Header(){
    return(
        <header className={styles.header}>
            <NavBar></NavBar>
        </header>
    );
}
export default Header;