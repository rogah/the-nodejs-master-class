const http = require('http');

const { runServer } = require('./lib/server');

const httpServer = http.createServer(runServer);

httpServer.listen(3000, () => {
    console.log(`HTTP Server listening on port ${3000}.`);
});
