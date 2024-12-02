import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [categoria, setCategoria] = useState(""); 

  // Función para enviar la busqueda del search
  const handleSearch = (e) => {
    e.preventDefault(); 
    onSearch(searchTerm, categoria); 
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        placeholder="Buscar por nombre o color..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="search-input"
      />
      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)} 
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
