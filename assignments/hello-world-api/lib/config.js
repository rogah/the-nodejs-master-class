const fs = require('fs');
const path = require('path');

const environmentName = typeof(process.env.NODE_ENV) === 'string'
    ? process.env.NODE_ENV.toLowerCase()
    : 'development';

const { name, http, https } = require(`../.env/${environmentName}`);

const sslCertFilePath = path.resolve(__dirname, '..', https.ssl.cert);
const sslKeyFilePath = path.resolve(__dirname, '..', https.ssl.key);

const ssl = {
    cert: fs.readFileSync(sslCertFilePath),
    key: fs.readFileSync(sslKeyFilePath),
};

module.exports = {
    name,
    http,
    https: {
        ...https,
        ssl,
    },
};
