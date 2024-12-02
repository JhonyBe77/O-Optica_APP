import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import Card from "./Card/Card";
import Search from "./Search";
import axios from "axios";
import { ClockLoader } from "react-spinners";

const ListaMonturas = () => {
  const { categoria } = useParams(); 
  const [monturas, setMonturas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentCategoria, setCurrentCategoria] = useState(categoria || ""); 
  
  const fetchMonturas = async (searchTerm = "", categoria = "") => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/montura/buscar", {
        params: {
          term: searchTerm,
          categoria: categoria || undefined,
        },
      });
      setMonturas(response.data);
    } catch (error) {
      console.error("Error al buscar monturas:", error);
      setMonturas([]);
    } finally {
      setLoading(false);
    }
  };

  // para cargar monturas cuando cambia de categoría
  useEffect(() => {
    setCurrentCategoria(categoria); 
    fetchMonturas("", categoria); // cambia monturas según la nueva categoría
  }, [categoria]);

  return (
    <div className="lista-monturas-container">
      <h1>
       {currentCategoria || "Todas"} 
      </h1>
      <div className="search-container">
        <Search onSearch={fetchMonturas} />
      </div>
      {loading ? (
        <div className="spinner-container">
          <ClockLoader color="#FF69B4" size={50} />
          <p className="mensaje">Cargando monturas...</p>
        </div>
      ) : (
        <div className="lista-monturas">
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
