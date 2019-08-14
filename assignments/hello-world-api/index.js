const http = require('http');
const https = require('https');

const { serveContent, getHttpsOptions } = require('./lib/server');
const config = require('./lib/config');

const httpServer = http.createServer(serveContent);

httpServer.listen(config.http.port, () => {
    console.log(`HTTP Server listening on port ${config.http.port}.`);
});

const httpsServer = https.createServer(getHttpsOptions(), serveContent);

httpsServer.listen(config.https.port, () => {
    console.log(`HTTPS Server listening on port ${3001}.`);
});
