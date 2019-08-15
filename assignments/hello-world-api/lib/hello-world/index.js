const fs = require('fs');
const path = require('path');

const helloWorld = require('./data');

const supportedLocales = Object.keys(helloWorld);

const random = (low, high) => Math.floor(Math.random() * (high - low) + low);

const getHelloWorld = locale => helloWorld[locale];

const randomHelloWorld = () => {
    const locale = supportedLocales[random(0, supportedLocales.length)];
    return getHelloWorld(locale);
};

module.exports = {
    getHelloWorld,
    randomHelloWorld,
};
