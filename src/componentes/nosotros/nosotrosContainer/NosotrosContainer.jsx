import { PersonalList } from "../nostrosList/PersonalList";
import styles from "./NosotrosContainer.module.css";
import React, { useState, useEffect } from 'react';
export function NosotrosContainer ({ Mensaje }){

        const [personal, setPersonal] = useState([]);
        const [error, setError] = useState(null);
        const [cargando, setCargando] = useState(true);
    
        useEffect(() => {
    
            fetch("/data/Nosotros.json")
    
                .then((respuesta) => {
    
                    if (!respuesta.ok) {
                        throw new Error('No se pudo cargar la información de los productos');
                    }
    
                    return respuesta.json();
                })
    
                .then((datos) => {

                    setPersonal(datos);
                })
    
                .catch((error) => {
                    setError(error.message);
                })
    
                .finally(() => {
                    setCargando(false);
                });
    
        }, []);
    
        if (cargando) {
            return <p>Cargando productos, por favor espere...</p>;
        }
    
        if (error) {
            return <p>Error: {error}</p>;
        }
        return (
                <div >
                    <h2 className={styles.subtitulo}>{Mensaje}</h2>
        
                    <div className={styles.card}>
                        <PersonalList personal={personal} />
                    </div>
                </div>
            );
    
}