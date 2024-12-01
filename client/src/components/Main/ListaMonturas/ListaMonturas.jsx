import React, { useEffect, useState } from "react";
import Card from "./Card/Card"; 
import { useParams } from "react-router-dom"; 
import { getMonturasByCategoria } from "../../../api/monturaService"; 
import { ClockLoader } from "react-spinners";


const ListaMonturas = () => {
    const { categoria } = useParams(); // pilla la categoría desde la URL
    const [monturas, setMonturas] = useState([]); // Estado para las monturas
    const [loading, setLoading] = useState(true); // Estado para la carga

    useEffect(() => {
        const fetchMonturas = async () => {
            try {
                setLoading(true); // carga las monturas
                const data = await getMonturasByCategoria(categoria); // Llamada a la API
                setMonturas(data); // Actualizamos el estado
            } catch (error) {
                console.error("Error al obtener monturas:", error);
            } finally {
                setLoading(false); // desactiva el estado de carga
            }
        };

        fetchMonturas();
    }, [categoria]); // para poder cambiar la categoría

    if (loading) {
        if (loading) {
            return (
                <div className="spinner-container">
                    <ClockLoader color="#FF69B4" size={50} />
                    <p className="mensaje">Cargando monturas...</p>
                </div>
            );
        }
    }
    

    return (
        <div className="lista-monturas">
            {monturas.length > 0 ? (
                monturas.map((montura) => <Card key={montura.id} data={montura} />)
            ) : (
                <p>No se encontraron monturas para la categoría "{categoria}"</p>
            )}
        </div>
    );
};

export default ListaMonturas;
