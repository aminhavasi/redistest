const express = require('express');
const fetch = require('node-fetch');
const redis = require('redis');
const port = 5100;
const redis_port = 6379;

const client = redis.createClient(redis_port);
const app = express();
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
