const url = require('url');

const { route } = require('./router');
const { SUCCESS } = require('./contants');

const EMPTY_PAYLOAD = {};

const runServer = (req, res) => {
    const { pathname } = url.parse(req.url, true);

    const routeHandler = route(pathname);

    routeHandler((statusCode = SUCCESS, payload = EMPTY_PAYLOAD) => {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(statusCode);
        res.end(JSON.stringify(payload));
    });
};

module.exports = {
    runServer,
};
