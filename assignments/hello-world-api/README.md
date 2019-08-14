# Homework Assignment #1: Hello World API

RESTful JSON API which fetches "Hello World!" in different languages.

## Routes

* `GET /hello` fetches "Hello World!" in different languanges randomly.

* `GET /hello?locale=en_US` fetches "Hello World!" in different languanges randomly.

* `GET /ping` returns HTTP Status Code 200 if service is up and running.

## Payload

The payload schema type has `locale`, `language` and `phrase` properties, such as:
```json
{
    "locale": "en_US",
    "language": "English (United States of America)",
    "phrase": "Hello World!"
}
```

## Setting up

If you are using a different environment other than the default one (e.g. `developemnt`) then create a new environment configuration file inside `.env` directory located at the root level with the file name pattern as `${environment}.json` (e.g. staging.json, production.json).

Environment configuration example:

```json
{
    "name": "staging",
    "http": {
        "port": 3000
    },
    "https": {
        "port": 3001,
        "ssl": {
            "cert": "./.https/cert.pem",
            "key": "./.https/key.pem"
        }
    }
}
```

**Note**: In case you need a auto-generated SSL sertificate for local development run the following command and following the prompt instructions.

```
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

## Running

For local development simply run:

```
node index.js
```

To specify a different environemnt provide a `NODE_ENV` with the name of the targeted environment config.

```
NODE_ENV=staging node index.js
```

## Assignment Instructions

Please create a simple "Hello World" API. Meaning:

1. It should be a RESTful JSON API that listens on a port of your choice. 

2. When someone sends an HTTP request to the route /hello, you should return a welcome message, in JSON format. This message can be anything you want.

### Video Component

Make a screencast showing off the code you wrote for this assignment. Walk us through your file(s), line by line, explaining what the code means and why you wrote it the way you did. Then, execute your code from your terminal and show off the required functionality. You can use Postman, Curl, Wget or any other HTTP client you like to perform the actual HTTP requests. If you're comfortable doing so, please narrate as you go and explain what you're showing us.

### Turning it In

One of the first slides in this course is called "How to Turn in Homework" review that slide for details on how to send your assignment to us (and receive a grade).