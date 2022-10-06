import dotenv from 'dotenv'
dotenv.config();

import { Kafka } from 'kafkajs'

const clientId = process.env.CLIENT_ID;
const server1 = process.env.SERVER_1;
const topic = process.env.TOPIC

const kafka = new Kafka({
    clientId: clientId,
    brokers: [server1],
    connectionTimeout: 30000
});

export {
    kafka
};