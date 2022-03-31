import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import axios from 'axios';

const app = express();

app.use(cors());
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
    const event = req.body;

    events.push(event);

    axios.post('http://localhost:4000/events', event);
    axios.post('http://localhost:4001/events', event);
    axios.post('http://localhost:4002/events', event);
    axios.post('http://localhost:4003/events', event);

    res.send({ status: 'send' });
});

app.get('/events', (_, res) => {
    res.send(events);
});

app.listen(4005, () => {
    console.log('Event Bus live : http://localhost:4005');
});
