const url = require('url');
const fs = require('fs');

const { route } = require('./router');
const {
    SUCCESS_HTTP_CODE,
    HTTPS_KEY_FILE_PATH,
    HTTPS_CERT_FILE_PATH
} = require('./contants');

const EMPTY_PAYLOAD = {};

const DEFAULT_SERVER_OPTIONS = {
    key: fs.readFileSync(HTTPS_KEY_FILE_PATH),
    cert: fs.readFileSync(HTTPS_CERT_FILE_PATH),
};

const getHttpsOptions = (options = {}) => ({
    ...DEFAULT_SERVER_OPTIONS,
    ...options,
});

const runServer = (req, res) => {
    const { pathname } = url.parse(req.url, true);

    const routeHandler = route(pathname);

    routeHandler((statusCode = SUCCESS_HTTP_CODE, payload = EMPTY_PAYLOAD) => {
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(statusCode);
        res.end(JSON.stringify(payload));
    });
};

module.exports = {
    runServer,
    getHttpsOptions,
};
