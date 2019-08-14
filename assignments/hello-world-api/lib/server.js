const url = require('url');
const fs = require('fs');
const path = require('path');

const { route } = require('./router');

const KEY_FILE_PATH = path.resolve(__dirname, '../https/key.pem');
const CERT_FILE_PATH = path.resolve(__dirname, '../https/cert.pem');

const EMPTY_PAYLOAD = {};

const DEFAULT_SERVER_OPTIONS = {
    key: fs.readFileSync(KEY_FILE_PATH),
    cert: fs.readFileSync(CERT_FILE_PATH),
};

const getHttpsOptions = (options = {}) => ({
    ...DEFAULT_SERVER_OPTIONS,
    ...options,
});

const serveContent = (req, res) => {
    const { pathname, query } = url.parse(req.url, true);

    const context = {
        query,
    };

    const routeHandler = route(pathname);

    routeHandler(context, (statusCode = 200, payload = EMPTY_PAYLOAD) => {
        res.writeHead(statusCode, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(payload));
    });
};

module.exports = {
    serveContent,
    getHttpsOptions,
};
