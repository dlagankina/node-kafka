import {kafka} from './config.js';

import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/messages_handler.js'
import consume from './service/kafka_consumer_service.js'

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use('/message', router)

await consume();

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})