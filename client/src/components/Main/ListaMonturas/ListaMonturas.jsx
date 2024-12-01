import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import Search from "./Search"; // Importamos el componente Search
import axios from "axios"; // Para las solicitudes HTTP
import { ClockLoader } from "react-spinners";

const ListaMonturas = () => {
  const [monturas, setMonturas] = useState([]); // Estado para las monturas
  const [loading, setLoading] = useState(false); // Estado de carga

  // Función para buscar monturas
  const fetchMonturas = async (searchTerm = "", categoria = "") => {
    setLoading(true); // Activa el estado de carga
    try {
      const response = await axios.get("http://localhost:3000/montura/buscar", {
        params: {
          term: searchTerm, // Término de búsqueda
          categoria: categoria || undefined, // Categoría, solo si está seleccionada
        },
      });
      setMonturas(response.data); // Actualiza el estado con las monturas
    } catch (error) {
      console.error("Error al buscar monturas:", error);
      setMonturas([]); // Vacía el estado en caso de error
    } finally {
      setLoading(false); // Desactiva el estado de carga
    }
  };

  // useEffect inicial para cargar todas las monturas
  useEffect(() => {
    fetchMonturas(); // Cargar todas las monturas al montar el componente
  }, []);

  return (
    <div className="lista-monturas-container">
      <h1>Lista de Monturas</h1>
      {/* Contenedor del buscador */}
      <div className="search-container">
        <Search onSearch={fetchMonturas} />
      </div>

      {/* Mostrar estado de carga */}
      {loading ? (
        <div className="spinner-container">
          <ClockLoader color="#FF69B4" size={50} />
          <p className="mensaje">Cargando monturas...</p>
        </div>
      ) : (
        <div className="lista-monturas">
          {/* Mostrar monturas */}
          {monturas.length > 0 ? (
            monturas.map((montura) => <Card key={montura.id} data={montura} />)
          ) : (
            <p className="mensaje">No se encontraron monturas</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ListaMonturas;
