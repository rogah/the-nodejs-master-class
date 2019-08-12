const url = require('url');

const runServer = (req, res) => {
    const { pathname } = url.parse(req.url, true);

    const path = pathname.replace(/^\/+|\/+$/g, '');

    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({ greetings: 'Hello World!' }));
};

module.exports = {
    runServer,
};
