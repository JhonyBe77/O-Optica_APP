
# ✨ O-Q - Óptica App ✨

![Logo de O-Q](./public/images/readme/logo.png)

Bienvenido a **Óptica O-Q**, una solución integral para ópticos y clientes. Diseñada para facilitar la navegación de monturas, gestionar favoritos y garantizar una experiencia intuitiva, la app está optimizada para dispositivos móviles y ofrece funcionalidades completas con un diseño moderno y responsivo.

---

## 🚀 Características Principales

- 🧑‍💻 **Autenticación**: Registro e inicio de sesión seguro con JWT.
- 🔎 **Monturas por Categorías**: Busca entre Masculino, Femenino y Unisex.
- ❤️ **Favoritos**: Guarda y gestiona tus monturas favoritas.
- 📱 **Diseño Mobile First**: Optimizada para móviles y tabletas.
- ⚡ **Interfaz Rápida y Amigable**: Construida con tecnologías modernas para una experiencia fluida.

---

## 🌐 Arquitectura de la Aplicación

![Arquitectura de la App](./public/images/readme/arquitectura.png)

Nuestra aplicación utiliza un enfoque cliente-servidor para manejar eficientemente las solicitudes entre React (Frontend) y Node.js (Backend), conectado a una base de datos PostgreSQL.

---

## 📊 Modelo Relacional de la Base de Datos

![Modelo Relacional](./public/images/readme/modelo-relacional.png)

El modelo permite consultas eficientes para buscar monturas, añadir favoritos y gestionar datos de manera consistente.

---

## 🛠️ Tecnologías Utilizadas

### **Frontend**

- ![React Logo](https://cdn.worldvectorlogo.com/logos/react-2.svg) **React**: Creación de componentes y manejo del estado.
- **React Router**: Navegación entre vistas.
- **SASS**: Diseño estilizado y modular.
- **Axios**: Conexión con el backend mediante HTTP.

### **Backend**

- ![Node.js Logo](https://cdn.worldvectorlogo.com/logos/nodejs-1.svg) **Node.js** y **Express**: Creación de la API del servidor.
- ![PostgreSQL Logo](https://cdn.worldvectorlogo.com/logos/postgresql.svg) **PostgreSQL**: Base de datos relacional.
- **Sequelize**: Gestión ORM.
- **JWT**: Autenticación segura.

---

## 🖼️ Interfaz y Diseño

### Pantalla de Inicio de Sesión
![Pantalla de Inicio](./public/images/readme/interfaz-login.png)

### Categorías de Monturas
![Categorías](./public/images/readme/interfaz-categorias.png)

El diseño es **minimalista**, enfocado en la usabilidad, con colores alegres que refuerzan el concepto de "ver la vida de color de rosa".

---

## 🌐 Rutas de la API

| Método | Endpoint                  | Descripción                          |
|--------|---------------------------|--------------------------------------|
| GET    | `/user/profile`           | Obtiene el perfil del usuario.       |
| POST   | `/user/register`          | Registra un nuevo usuario.           |
| POST   | `/user/login`             | Inicia sesión y devuelve un token.   |
| GET    | `/montura/categoria/:cat` | Obtiene monturas de una categoría.   |
| POST   | `/favoritos`              | Agrega una montura a favoritos.      |
| GET    | `/favoritos`              | Lista todas las monturas favoritas.  |
| DELETE | `/favoritos/:id`          | Elimina una montura de favoritos.    |

---

## 📦 Instalación y Ejecución

### Requisitos Previos
- **Node.js** (v14+)
- **PostgreSQL**

### Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JhonyBe77/O-Optica_APP.git
   ```

2. Configura las variables de entorno en `server/.env`:
   ```
   DB_USER=tu_usuario
   DB_HOST=localhost
   DB_DATABASE=tu_base_de_datos
   DB_PASSWORD=tu_contraseña
   DB_PORT=5432
   JWT_SECRET=tu_secreto
   ```

3. Instala las dependencias:

   **Backend**:
   ```bash
   cd server
   npm install
   ```

   **Frontend**:
   ```bash
   cd client
   npm install
   ```

4. Ejecuta la aplicación:

   **Backend**:
   ```bash
   cd server
   npm start
   ```

   **Frontend**:
   ```bash
   cd client
   npm run dev
   ```

---

## 🧪 Pruebas y Documentación

- Puedes utilizar [Postman](https://www.postman.com/) para probar las rutas de la API.
- La documentación Swagger de la API está disponible en `/openapi.json`.
