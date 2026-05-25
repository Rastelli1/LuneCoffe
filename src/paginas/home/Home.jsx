
import styles from "./Home.module.css";
import { ProductoListContainer } from "../../componentes/productos/ProductoListContainer";

function Home() {
  return (
    
    <div className={styles.inicio}>
      <div className={styles.portada}>
        <video src="./videos/video-Portada.mp4" autoPlay muted loop playsInline></video>
      </div>
      <div>        
        <ProductoListContainer
          Mensaje="¿No sabes que pedir hoy? Aca te dejamos algunas recomendaciones "
          recomendado={true}
        />
      </div>
    </div>
  
  );
}

export default Home;