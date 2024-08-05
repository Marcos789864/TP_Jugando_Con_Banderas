"use client";
import styles from "../page.module.css";
import React, { useEffect, useState } from "react";
import Card from "../components/card/page";

export default function Juego() {
    const urlApi = "https://countriesnow.space/api/v0.1/countries/flag/images";
    const [banderaSeleccionada, setBanderaSeleccionada] = useState(null);
    const [opciones, setOpciones] = useState([]);

    useEffect(() => {
        fetch(urlApi)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.data)) {
                    const paisSeleccionado = data.data[Math.floor(Math.random() * data.data.length)];
                    const nombresPais = data.data.map(pais => pais.name);
                    
                    const opcionesIncorrectas = nombresPais.filter(nombre => nombre !== paisSeleccionado.name)
                                                           .sort(() => 0.5 - Math.random())
                                                           .slice(0, 3);

                    const opcionesFinales = [...opcionesIncorrectas, paisSeleccionado.name]
                                             .sort(() => 0.5 - Math.random());

                    setBanderaSeleccionada(paisSeleccionado);
                    setOpciones(opcionesFinales);
                } else {
                    console.error('La propiedad data no es un array');
                }
            })
            .catch(error => console.log('Hubo un error: ' + error));
    }, []);

  
    const paisImagen = banderaSeleccionada ? banderaSeleccionada.flag : '';
    const opcionesValidas = Array.isArray(opciones) && opciones.length > 0 ? opciones : [];

    return (
        <main className={styles.main}>
            <div className={styles.card2}>
                {paisImagen && opcionesValidas.length > 0 ? (
                    <Card pais={paisImagen} opciones={opcionesValidas} />
                ) : (
                    <p>No hay países para mostrar.</p>
                )}
            </div>
        </main>
    );
}