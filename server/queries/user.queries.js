const queries = {

    createUser: `INSERT INTO users (nombre, password, email, rol) VALUES ($1, $2, $3, $4) RETURNING *`,
    getAllUsers: `SELECT * FROM usuarios`,
    
    createMontura: `INSERT INTO users (nombre, precio, img, color, descripcion) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    getAllMonturas: `SELECT * FROM monturas`,
}
module.exports = queries;