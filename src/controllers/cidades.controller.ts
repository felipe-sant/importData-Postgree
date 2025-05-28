import { Request, Response } from "express";
import CidadesService from "../services/cidades.service";

class CidadesController {
    private cidadeService: CidadesService

    constructor() {
        this.cidadeService = new CidadesService();
    }

    // GET cidades
    async getAll(_: Request, res: Response) {
        try {
            const result = await this.cidadeService.getAll();
            res.status(200).json({ result });
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }

    // GET cidades/:id
    async readInsidence(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({ message: "ID is required" });
            }
            const result = await this.cidadeService.readInsidence(id);
            res.status(200).json({ result }); // Placeholder response
        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default CidadesController;