import express from 'express';
import router from './routes/articleRoutes.js';

const app = express();

const PORT = 3000;

app.use(express.json());
app.use('/articles', router);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});