const pool = require('./config/db_pgsql');

const testConnection = async () => {
    try {
        const res = await pool.query('SELECT NOW()');
        console.log('Conexión exitosa:', res.rows[0]);
    } catch (err) {
        console.error('Error conectando a la base de datos:', err);
    } finally {
        pool.end(); // Cerramos la conexión
    }
};

testConnection();
