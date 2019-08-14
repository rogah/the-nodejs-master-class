const fs = require('fs');
const path = require('path');

const helloWorld = require('./data');

const random = (low, high) => Math.floor(Math.random() * (high - low) + low);

const getHelloWorld = locale => helloWorld[locale];

const randomHelloWorld = () => {
    const locales = Object.keys(helloWorld);
    const locale = locales[random(0, locales.length)];
    return getHelloWorld(locale);
};

module.exports = {
    getHelloWorld,
    randomHelloWorld,
};
