import { NosotrosContainer } from "../../componentes/nosotros/nosotrosContainer/NosotrosContainer";
import styles from "./Nosotros.module.css";
function Nosotros (){
     return (
        
        <div className={styles.general}>
            <h1 >Nuestra historia</h1>
            <img src="../public/img/personal_local/Local.png" alt="Local" />
            <p className={styles.texto}>
                En Lune Coffe creemos que cada taza cuenta una historia. Todo comenzó con un sueño sencillo: crear un lugar cálido donde las personas pudieran sentirse como en casa, compartir momentos y disfrutar del aroma único de un buen café recién hecho. Lo que empezó como una pequeña idea entre pasión, recetas caseras y muchas ganas de crecer, hoy se convirtió en un espacio pensado para reunir amigos, familias y amantes del café.

                Nuestra meta siempre fue mucho más que servir bebidas; buscamos crear experiencias. Queremos que cada visita sea un momento especial, desde la primera sonrisa al entrar hasta el último sorbo de café. Trabajamos cada día para ofrecer productos de calidad, atención cercana y un ambiente acogedor donde todos puedan relajarse y disfrutar.

                Seguimos creciendo con la misma ilusión del primer día, incorporando nuevas propuestas, sabores y sueños, pero sin perder aquello que nos define: la pasión por el café y el deseo de compartir momentos inolvidables con nuestra comunidad.
            </p>
            
            <div className={styles.personal}> 
                 <NosotrosContainer Mensaje="Nuestro Equipo"/>
             </div>
        </div>
      
      );
}
    
export default Nosotros;