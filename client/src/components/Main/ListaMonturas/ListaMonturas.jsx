import React, { useEffect, useState } from "react";
import Card from "./Card/Card"; // Importamos el componente Card
import { useParams } from "react-router-dom"; // Para capturar la categoría de la URL
import { getMonturasByCategoria } from "../../../api/monturaService"; // API para obtener datos de monturas

const ListaMonturas = () => {
    const { categoria } = useParams(); // Capturamos la categoría desde la URL
    const [monturas, setMonturas] = useState([]); // Estado para las monturas
    const [loading, setLoading] = useState(true); // Estado para la carga

    useEffect(() => {
        const fetchMonturas = async () => {
            try {
                setLoading(true); // Activamos el estado de carga
                const data = await getMonturasByCategoria(categoria); // Llamada a la API
                setMonturas(data); // Actualizamos el estado
            } catch (error) {
                console.error("Error al obtener monturas:", error);
            } finally {
                setLoading(false); // Desactivamos el estado de carga
            }
        };

        fetchMonturas();
    }, [categoria]); // Efecto se ejecuta al cambiar la categoría

    if (loading) return <p>Cargando monturas...</p>; // Mensaje mientras carga

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
