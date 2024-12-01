const queries = require('../queries/monturas.queries');
const pool = require('../config/db_pgsql');

const getMonturasByCategoria = async (categoria) => {
    const query = `SELECT * FROM monturas WHERE categoria = $1`;
    const params = [categoria];

    let client;
    try {
        client = await pool.connect();
        const result = await client.query(query, params);
        return result.rows;
    } catch (err) {
        console.error('Error en getMonturasByCategoria (modelo):', err.message);
        throw err;
    } finally {
        client.release();
    }
};

const getAllMonturas = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllMonturas);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

const buscarMonturas = async (term, categoria) => {
    const query = queries.buscarMonturas(categoria); 
    const params = [`%${term}%`];
    if (categoria) params.push(categoria);

    let client;
    try {
        client = await pool.connect();
        const result = await client.query(query, params); 
        return result.rows;
    } catch (err) {
        console.error('Error en buscarMonturas (modelo):', err.message);
        throw err;
    } finally {
        client.release();
    }
};

module.exports = {
    getAllMonturas,
    buscarMonturas,
    getMonturasByCategoria, 
};
