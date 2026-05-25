import { useState } from "react";
import styles from "./NosotrosCard.module.css";
export function NosotrosCard({nombre,imagen,puesto,descripcion}){
    return(
        <div  className={styles.card}>
            <h2>{nombre}</h2>
            <h3>{puesto}</h3>
            <img src={imagen} alt="" />
            <p>{descripcion}</p>
        </div>
    );
}