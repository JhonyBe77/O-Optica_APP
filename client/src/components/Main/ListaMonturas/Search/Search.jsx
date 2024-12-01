import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const [categoria, setCategoria] = useState(""); // Estado para la categoría

  // Función para manejar el envío del formulario
  const handleSearch = (e) => {
    e.preventDefault(); // Evitar recargar la página
    onSearch(searchTerm, categoria); // Llamar a la función pasada desde el padre
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        placeholder="Buscar por nombre o color..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado del término
        className="search-input"
      />
      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)} // Actualiza el estado de la categoría
        className="category-select"
      >
        <option value="">Todas las categorías</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="Unisex">Unisex</option>
      </select>
      <button type="submit" className="search-button">
        Buscar
      </button>
    </form>
  );
};

export default Search;
