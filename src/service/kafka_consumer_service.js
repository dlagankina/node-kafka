import {kafka} from '../config.js'
const groupId = process.env.GROUP_ID;

const consumer = kafka.consumer(
    {
        groupId: groupId
    }
);

await consumer.connect();
await consumer.subscribe({
    topics: [process.env.TOPIC]
});

async function consume() {
    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log({
                key: (message.key||'').toString(),
                value: message.value.toString(),
                headers: message.headers,
            })
        },
    })
}

export default consume;