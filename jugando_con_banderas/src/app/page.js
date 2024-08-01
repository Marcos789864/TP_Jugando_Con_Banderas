import Image from "next/image";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.titulo}> 
        <h1>Bienvenido a Adivina la bandera</h1>
      </div>

      <div className={styles.card}>
        <h1>Jugar</h1>
      </div>
      <div className={styles.card}>
        <h1>Ayuda</h1>
      </div>
    </main>
  );
}