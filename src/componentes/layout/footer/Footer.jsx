import styles from "./Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook,faInstagram,faCcVisa} from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <footer className={styles.footer} >

      <div className={styles.footerBox}>
          <div className={styles.redes}>
              <h1>Redes sociales</h1>
              <a href=""><FontAwesomeIcon icon={faInstagram} className={styles.icono}/></a>
              <a href=""><FontAwesomeIcon icon={faSquareFacebook} className={styles.icono} /></a>
              
          </div>

          <div className={styles.info}>
              <a href=""><img src=".\img\icono.png" alt="" /></a>
              <p>Direccion: Calle falsa 123</p>
              <p>Telefono: 0023-2034-2341</p>
              <p>Email: LuneCoffe@gmail.com</p>
          </div>

          <div className={styles.pagos}>
            <h2>Medios de pago</h2>
            <a href=""><FontAwesomeIcon icon={faCcVisa} className={styles.icono} /></a>
            <a href=""><FontAwesomeIcon icon={faCreditCard} className={styles.icono} /></a>
          </div>
      </div>
    </footer>
  );
}

export default Footer;