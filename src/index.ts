import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import cidadesRoutes from './routes/cidades.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001

app.use(cors());
app.use(express.json());

app.use('/', cidadesRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
