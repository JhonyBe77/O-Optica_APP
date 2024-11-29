const API_URL = "http://localhost:3000/user"; // Cambia localhost y puerto si es necesario

export const getAllBlogs = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al obtener las monturas");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener las monturas:", error);
    return [];
  }
};