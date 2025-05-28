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
        const query = `
            SELECT i.*
            FROM incidencias i
            JOIN cidades c ON ST_Contains(i.geom, c.geom)
            WHERE c.id = ${id};
        `
        const result = await pool.query(query);
        if (result.rows.length === 0) {
            throw new Error("No incidences found for the given city ID");
        }
        return result.rows;
    }
}

export default CidadesService;