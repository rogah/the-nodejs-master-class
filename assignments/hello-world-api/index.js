const http = require('http');
const https = require('https');

const { runServer, getHttpsOptions } = require('./lib/server');

const httpServer = http.createServer(runServer);

httpServer.listen(3000, () => {
    console.log(`HTTP Server listening on port ${3000}.`);
});

const httpsServer = https.createServer(getHttpsOptions(), runServer);

httpsServer.listen(3001, () => {
    console.log(`HTTPS Server listening on port ${3001}.`);
});
