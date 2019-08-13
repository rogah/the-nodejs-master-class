const path = require('path');

const SUCCESS_HTTP_CODE = 200;
const NOT_FOUND_HTTP_CODE = 404;

const HTTPS_KEY_FILE_PATH = path.resolve(__dirname, '../https/key.pem');
const HTTPS_CERT_FILE_PATH = path.resolve(__dirname, '../https/cert.pem');
const HELLO_WORLD_FILE_PATH = path.resolve(__dirname, '../assets/hello-world.json');

module.exports = {
    // HTTP codes
    SUCCESS_HTTP_CODE,
    NOT_FOUND_HTTP_CODE,
    
    // File paths
    HTTPS_KEY_FILE_PATH,
    HTTPS_CERT_FILE_PATH,
    HELLO_WORLD_FILE_PATH
};
