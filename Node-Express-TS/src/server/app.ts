import express from 'express';
import * as cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const PORT = 8000;

app.get('/', (req, res) => res.status(200).send('Express wiht Typescript'));

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server running at http://localhost:${PORT}`);
})