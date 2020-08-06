const http = require('http');
const express = require('express');
const app = express();
const httpServer = http.createServer(app);
const rfs = require('rotating-file-stream');
const morgan = require('morgan');
const path = require('path');
var accessLogStream = rfs.createStream('request.log', {
    interval: '1d',
    path: path.join(__dirname, 'src/log'),
    compress: true,
});

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));
require('dotenv').config();
app.use(express.json());

app.use('/api/auth', require('./src/routes/auth'));

httpServer.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});
