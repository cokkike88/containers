import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola mundo desde controllador test');
});

export default router;