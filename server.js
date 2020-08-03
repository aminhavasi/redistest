const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');
const port = 5100;
const redis_port = 6379;

const client = redis.createClient(redis_port);
const app = express();

function setResponse(username, repose) {
    return `<h2>${username} has ${repose} Github repose </h2>`;
}
app.use(express.json());
app.get('/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const response = await fetch(`http://api.github.com/users/${username}`);
        const data = await response.json();

        const repos = data.public_repos;
        await client.set(username, repos, (err) => {
            if (err) console.log('err');
        });
        res.send(setResponse(username, repos));
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
