# norobot

Connect/Express middleware to disable robots indexing. It just sets `X-Robots-Tag` header to `no-index, no-follow`, useful to avoid indexing of staging environments by search engines.

## Install

```bash
$ npm install norobot
```

## Use

```js
var express = require('express');
var norobot = require('norobot');

// Create Express application
var application = express();

// Disable X-Robots-Tag for a route
application.get('/', norobot, function (request, response) {
    response.send('Hello World!');
});

// If not in production, enable X-Robots-Tag for entire application
application.use(norobot('production' !== process.env.NODE_ENV));
```

## TODO

- Enable norobot only for requests from robots
