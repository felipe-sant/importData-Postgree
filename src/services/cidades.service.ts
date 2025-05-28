class CidadesService {
    async getAll() {
        return "read all"
    }

    async readInsidence(id: string) {
        return `read insidence ${id}`;
    }
}

export default CidadesService;