const http = require('http');

const httpServer = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({ greetings: 'Hello World!' }));
});

httpServer.listen(3000, () => {
    console.log(`HTTP Server listening on port ${3000}.`);
});
