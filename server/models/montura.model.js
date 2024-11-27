const queries = require('../queries/user.queries') // Queries SQL
const pool = require('../config/db_pgsql')

const getAllMonturas = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllMonturas)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const moturas = {
    getAllMonturas
}

module.exports = moturas;