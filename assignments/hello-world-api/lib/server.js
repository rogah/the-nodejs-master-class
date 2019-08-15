const url = require('url');
const fs = require('fs');
const path = require('path');

const { route } = require('./router');
const { https } = require('./config');

const EMPTY_PAYLOAD = {};

const defaultHttpsOptions = {
    key: https.ssl.key,
    cert: https.ssl.cert,
};

const getHttpsOptions = (options = {}) => ({
    ...defaultHttpsOptions,
    ...options,
});

const onRouteProcess = (statusCode = 200, payload = EMPTY_PAYLOAD) => {
    res.writeHead(statusCode, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(payload));
};

const serveContent = (req, res) => {
    const { pathname, query } = url.parse(req.url, true);

    const context = {
        query,
    };

    const routeHandler = route(pathname);

    routeHandler(context, onRouteProcess);
};

module.exports = {
    serveContent,
    getHttpsOptions,
};
