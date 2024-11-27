const queries = {
    
    createMontura: `INSERT INTO monturas (name, price, img, color, description_summary) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    getAllMonturas: `SELECT * FROM monturas`,
}
module.exports = queries;