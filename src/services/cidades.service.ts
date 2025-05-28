import pool from "../database/Pool";

class CidadesService {
    async getAll() {
        const query = `
            SELECT *
            FROM cidades
            ORDER BY nome;
        `
        const result = await pool.query(query)
        return result.rows;
    }

    async readInsidence(id: string) {
        return `read insidence ${id}`;
    }
}

export default CidadesService;