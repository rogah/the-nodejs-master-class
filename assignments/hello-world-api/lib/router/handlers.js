const { getHelloWorld, randomHelloWorld } = require('../hello-world');
const { SUCCESS_HTTP_CODE, NOT_FOUND_HTTP_CODE } = require('../contants');

const isLocaleProvided = context => typeof(context.query) === 'object' && typeof(context.query.locale) === 'string';

const isUndefined = value => typeof(value) === 'undefined';

const handlers = {};

handlers.hello = (context, callback) => {
    if (isLocaleProvided(context)) {
        const helloWorld = getHelloWorld(context.query.locale);
        
        if (isUndefined(helloWorld)) {
            callback(NOT_FOUND_HTTP_CODE);
            
        } else {
            callback(SUCCESS_HTTP_CODE, helloWorld);
        }
    } else {
        callback(SUCCESS_HTTP_CODE, randomHelloWorld());
    }
};

handlers.ping = (context, callback) => {
    callback(SUCCESS_HTTP_CODE);
};

handlers.notFound = (context, callback) => {
    callback(NOT_FOUND_HTTP_CODE);
};

module.exports = handlers;
