const { hello, ping } = require('./handlers');

const routes = {
    hello,
    ping,
};

module.exports = {
    routes,
};
