const queries = {

    createUser: `INSERT INTO users (nombre, password, email, rol) VALUES ($1, $2, $3, $4) RETURNING *`,
    getAllUsers: `SELECT * FROM usuarios`,
    
}
module.exports = queries;