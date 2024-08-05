"use client";
import styles from "../page.module.css";
import React, { useEffect, useState } from "react";

export default function Juego() {
    const urlApi = "https://countriesnow.space/api/v0.1/countries/flag/images";
    const [listaPais, setListaPais] = useState([]);
    const [paisSeleccionado, setPaisSeleccionado] = useState(null);
    const [nombreIngresado, setNombreIngresado] = useState("");
    const [puntaje, setPuntaje] = useState(0);

    useEffect(() => {
        fetch(urlApi)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data.data)) { //verificamos si es un array
                    setListaPais(data.data); //Seteamos la lista de Paises con la data de la api
                    seleccionarPaisAleatorio(data.data); //Agarramos un pais random
                } else {
                    console.error('La propiedad data no es un array');
                }
            })
            .catch(error => console.log('Hubo un error: ' + error));
    }, []);

    const seleccionarPaisAleatorio = (data) => {
        const randomIndex = Math.floor(Math.random() * data.length); //sirve para que el random tenga un rango de numeros para elegir dentro del array
        setPaisSeleccionado(data[randomIndex]);
    };

    const manejarCambioInput = (e) => {
        setNombreIngresado(e.target.value);
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (paisSeleccionado && nombreIngresado.toLowerCase() === paisSeleccionado.name.toLowerCase()) { //para que tome el nombre como sea
            setPuntaje(prevPuntaje => prevPuntaje + 10);
            
        } else {
            setPuntaje(prevPuntaje => prevPuntaje - 1);
        
        }
        setNombreIngresado(""); 
        seleccionarPaisAleatorio(listaPais); 
    };

    return (
        <main className={styles.main2}>
            <div className={styles.card2}>
                {paisSeleccionado ? ( //esto sirve para validar que no pase en caso de que el pais seleccionado es null o undefined
                    <div>
                        <img src={paisSeleccionado.flag} alt={paisSeleccionado.name} />
                        <form onSubmit={manejarEnvio}>
                            <input
                                type="text"
                                value={nombreIngresado}
                                onChange={manejarCambioInput}
                                placeholder="Ingresa el nombre del país"
                            />
                            <button type="submit">Verificar</button>
                        </form>
                        <p>Puntaje: {puntaje}</p>
                    </div>
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        </main>
    );
}