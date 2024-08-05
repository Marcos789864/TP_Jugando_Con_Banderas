"use client";
import styles from './page.module.css';
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
    <div className={styles.titulo}> 
      <h1>Bienvenido a Adivina la bandera</h1>
    </div>

    <div className={styles.card}>
      
       <Link href="/juego"> Jugar</Link>
      
     
    </div>
    <div className={styles.card}>
      <h1>Ayuda</h1>
    </div>
  </main>
  );
}