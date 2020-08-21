import express from 'express';
import testController from '../controllers/testController';

let app = express();

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

app.use('/test', testController);

export default app;