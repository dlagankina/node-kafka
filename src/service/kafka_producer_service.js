// import { Kafka } from 'kafkajs'

// const clientId = process.env.CLIENT_ID;
// const server1 = process.env.SERVER_1;
// const topic = process.env.TOPIC

// const kafka = new Kafka({
//     clientId: clientId,
//     brokers: [server1],
//     connectionTimeout: 30000
// });

import {kafka} from '../config.js'

const producer = kafka.producer();
await producer.connect();

async function sendMessage(message) {    
    await producer.send({
      topic: process.env.TOPIC,
      messages: [{
        value: JSON.stringify(message)
      }
      ],
    });
    
    // await producer.disconnect();
}

export default sendMessage;