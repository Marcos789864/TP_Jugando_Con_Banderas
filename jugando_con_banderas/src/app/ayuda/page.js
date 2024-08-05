"use client";
import styles from "../page.module.css";
import React from "react";

export default function Ayuda() {
    return (
        <main className={styles.main}>
            <div className={styles.titulo}>
                <h1>Reglas</h1>
            </div>

            <div className={styles.card}>
               
                <p>En pantalla te aparecerá una bandera y deberás ingresar el nombre del país. Si aciertas, ganarás 10 puntos; de lo contrario, perderás 1 punto.</p>
            </div>
        </main>
    );
}