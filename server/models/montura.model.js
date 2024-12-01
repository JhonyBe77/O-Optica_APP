const queries = require('../queries/monturas.queries')
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
};
//isertar en base de datos
const insertMonturas = async (monturas) => {
    const query = `
        INSERT INTO monturas (name, price, img, color, description_summary)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;
    const resultados = [];
    const client = await pool.connect();
    try {
        for (const montura of monturas) {
            const { name, price, img, color, description_summary } = montura; 
            const result = await client.query(query, [name, price, img, color, description_summary]); 
            resultados.push(result.rows[0]);
        }
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        client.release();
    }
    return resultados;
};

const moturas = {
    getAllMonturas, insertMonturas
}

module.exports = moturas;