const fs = require('fs');

const { random } = require('./random');
const { HELLO_WORLD_FILE_PATH } = require('./contants');

const helloList = JSON.parse(fs.readFileSync(HELLO_WORLD_FILE_PATH));

const getHelloWorld = locale => {
    const localizedHello = helloList.find(hello => hello.locale === locale);
    return typeof(localizedHello) === 'object' ? localizedHello : null;
};

const randomHelloWorld = () => helloList[random(0, helloList.length - 1)];

module.exports = {
    getHelloWorld,
    randomHelloWorld,
};
