import express from 'express';
import cors from 'cors';
import cidadesRoutes from './routes/cidades.routes';

const app = express();
const port = process.env.PORT || 3001

app.use(cors());
app.use(express.json());

app.use('/', cidadesRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
