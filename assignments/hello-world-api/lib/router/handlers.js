const { SUCCESS, NOT_FOUND } = require('../contants');

const handlers = {};

handlers.hello = callback => {
    callback(SUCCESS, {
        greetings: 'Hello World',
    });
};

handlers.ping = callback => {
    callback(SUCCESS);
};

handlers.notFound = callback => {
    callback(NOT_FOUND);
};

module.exports = handlers;
