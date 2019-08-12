const { routes } = require('./routes');
const { notFound } = require('./handlers');

const route = path => {
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    return typeof(routes[trimmedPath]) !== 'undefined' ? routes[trimmedPath] : notFound;
};

module.exports = { route };
