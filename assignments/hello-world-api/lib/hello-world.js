const fs = require('fs');

const { random } = require('./random');
const { HELLO_WORLD_FILE_PATH } = require('./contants');

const helloWorld = JSON.parse(fs.readFileSync(HELLO_WORLD_FILE_PATH));

const getHelloWorld = locale => helloWorld[locale];

const randomHelloWorld = () => {
    const locales = Object.keys(helloWorld);
    const locale = locales[random(0, locales.length - 1)];
    return getHelloWorld(locale);
};

module.exports = {
    getHelloWorld,
    randomHelloWorld,
};
