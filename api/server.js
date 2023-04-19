import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';

const app = express();

app.use(cors());
app.use(helmet());

//base endpoint
app.get('/', (req, res) => {

    res.sendFile(path.resolve() + '/index.html');
})

export default app;