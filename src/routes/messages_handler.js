import express from 'express';
import sendMessage from '../service/kafka_producer_service.js';

const router = express.Router()

router.post('/', async (req, res, next) => {
    console.log('got message');
    await sendMessage(req.body);
    res.send('ok');
})

export default router