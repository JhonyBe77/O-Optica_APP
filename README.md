# ✨ O-Q - Óptica App ✨

Bienvenido a la aplicación **Óptica O-Q**, una solución completa para facilitar tanto el trabajo de ópticos como la experiencia del cliente. Esta app permite a los usuarios registrarse, iniciar sesión, navegar entre monturas categorizadas, guardar monturas como favoritas y buscar productos de manera sencilla. Con un enfoque *mobile first*, la app está diseñada para ser intuitiva y eficiente.

## 🚀 Características Principales

- **Registro e inicio de sesión de usuarios**: Permite a los usuarios registrarse, iniciar sesión y gestionar su cuenta.
- **Protección de rutas mediante autenticación JWT**: Los usuarios pueden acceder a sus perfiles, sus favoritos y a las categorías una vez autenticados.
- **Categorías de monturas**: Visualización de monturas clasificadas por categorías: Masculino, Femenino, Unisex.
- **Búsqueda en las categorías**: Los usuarios pueden buscar monturas por nombre o color en cada categoría.
- **Favoritos**: Posibilidad de agregar y quitar monturas favoritas, almacenando la selección del usuario.
- **Frontend moderno y responsivo**: Implementado en React y diseñado con SASS.

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React**: Para la creación de componentes y manejo del estado.
- **React Router**: Para gestionar la navegación entre las diferentes vistas de la aplicación.
- **SASS**: Utilizado para estilizar la app, garantizando un diseño limpio y escalable.
- **Axios**: Para realizar solicitudes HTTP y conectar con el backend.

### Backend
- **Node.js y Express**: Para gestionar las solicitudes del lado del servidor y servir las rutas de la API.
- **PostgreSQL**: Base de datos relacional para almacenar usuarios, monturas y favoritos.
- **Sequelize**: ORM utilizado para la gestión de la base de datos.
- **JWT (JSON Web Token)**: Utilizado para la autenticación segura de usuarios.

## 🌄 Estructura de Carpetas

```
client
 └── src
     └── components
         └── Main
             ├── ListaMonturas
             │    ├── ListaMonturas.jsx
             │    ├── ListaMonturas.scss
             │    ├── Card
             │    │    ├── Card.jsx
             │    │    ├── Card.scss
             │    ├── SearchBar
             │    │    ├── SearchBar.jsx
             │    │    ├── SearchBar.scss
             └── ...
```

## 🌐 Rutas de la API

### Usuarios
- **POST /user/register**: Registra un nuevo usuario.
- **POST /user/login**: Inicia sesión y devuelve un token JWT.

### Monturas
- **GET /montura/categoria/:categoria**: Obtiene las monturas de una categoría específica.
- **GET /montura/categoria?search=**: Filtra monturas por nombre o color en una categoría.

### Favoritos
- **POST /favoritos**: Agrega una montura a los favoritos del usuario.
- **GET /favoritos**: Obtiene todas las monturas favoritas del usuario.
- **DELETE /favoritos/:id_montura**: Elimina una montura de los favoritos.

## 📊 Instalación y Ejecución

### Requisitos Previos
- Node.js
- PostgreSQL

### Clonar el Repositorio
```bash
git clone https://github.com/JhonyBe77/O-Optica_APP.git
```

### Configuración del Backend
1. Crea un archivo `.env` en la carpeta `server` y define las siguientes variables de entorno:
   ```
   DB_USER=tu_usuario
   DB_HOST=localhost
   DB_DATABASE=tu_base_de_datos
   DB_PASSWORD=tu_contraseña
   DB_PORT=5432
   JWT_SECRET=tu_secreto_jwt
   ```

### Instalación de Dependencias

- **Backend**
  ```bash
  cd server
  npm install
  ```

- **Frontend**
  ```bash
  cd client
  npm install
  ```

### Ejecutar la Aplicación

- **Backend**
  ```bash
  cd server
  npm start
  ```

- **Frontend**
  ```bash
  cd client
  npm run dev
  ```

## 🍼 Pruebas con Postman
- Puedes utilizar [Postman](https://www.postman.com/) para probar las rutas del backend, como el registro e inicio de sesión de usuarios y la gestión de favoritos.

## 🎨 Diseño y UX
- La aplicación está diseñada pensando en un enfoque minimalista y moderno, con colores que transmiten una visión positiva y alegre, tal como refleja el nombre "De Color de Rosa".
- Se presta especial atención a la *usabilidad móvil*, asegurando una excelente experiencia de usuario en todos los dispositivos.

## 🛡️ Seguridad
- Todas las rutas protegidas requieren un **token JWT** para garantizar la seguridad de la información del usuario.



