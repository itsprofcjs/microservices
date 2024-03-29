import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import axios from 'axios';

const app = express();

app.use(cors());
app.use(bodyParser.json());

const posts = {};

const handleEvent = (type, data) => {
    if (type === 'PostCreated') {
        const { id, title } = data;

        posts[id] = { id, title, comments: [] };
    }

    if (type === 'CommentCreated') {
        const { id, content, postId, status } = data;

        const post = posts[postId];

        post.comments.push({ id, content, status });
    }

    if (type === 'CommentUpdated') {
        const { id, content, postId, status } = data;

        const post = posts[postId];

        const comment = post.comments.find((comment) => comment.id === id);

        comment.status = status;
        comment.content = content;
    }
};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/events', (req, res) => {
    const { type, data } = req.body;

    handleEvent(type, data);

    res.send({});
});

app.listen(4002, async () => {
    console.log('Query listining on http://localhost:4002');

    const res = await axios.get('http://localhost:4005/events');

    for (const event of res.data) {
        console.log('Processing event:', event.type);

        handleEvent(event.type, event.data);
    }
});
