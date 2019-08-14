const { getHelloWorld, randomHelloWorld } = require('../hello-world');

const HTTP_CODE_SUCCESS = 200;
const HTTP_CODE_NOT_FOUND = 404;

const isLocaleProvided = context =>
    typeof(context.query) === 'object' && typeof(context.query.locale) === 'string';

const handlers = {};

handlers.hello = (context, callback) => {
    if (!isLocaleProvided(context)) {
        return callback(HTTP_CODE_SUCCESS, randomHelloWorld());
    }

    const helloWorld = getHelloWorld(context.query.locale);

    helloWorld ? callback(HTTP_CODE_SUCCESS, helloWorld) : callback(HTTP_CODE_NOT_FOUND);
};

handlers.ping = (context, callback) => {
    callback(HTTP_CODE_SUCCESS);
};

handlers.notFound = (context, callback) => {
    callback(HTTP_CODE_NOT_FOUND);
};

module.exports = handlers;
