const { getHelloWorld, randomHelloWorld } = require('../hello-world');
const { SUCCESS_HTTP_CODE, NOT_FOUND_HTTP_CODE } = require('../contants');

const handlers = {};

handlers.hello = callback => {
    const helloWorld = randomHelloWorld();
    callback(SUCCESS_HTTP_CODE, {
        hello: helloWorld.phrase,
    });
};

handlers.ping = callback => {
    callback(SUCCESS_HTTP_CODE);
};

handlers.notFound = callback => {
    callback(NOT_FOUND_HTTP_CODE);
};

module.exports = handlers;
