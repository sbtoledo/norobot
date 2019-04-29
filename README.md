# norobot

Connect/Express middleware that sets `X-Robots-Tag` header to `no-index, no-follow`. Useful to avoid indexing of non production environments.

## Install

```bash
$ npm install norobot
```

## Use

```javascript
const express = require('express')
const norobot = require('norobot')

const app = express()

// Enable X-Robots-Tag for all routes, if not in production
app.use(norobot('production' !== process.env.NODE_ENV))

// Disable X-Robots-Tag for a route
app.get('/', norobot, (request, response, next) => {
  response.send('Hello World!')
})
```

## License

[The MIT License](./LICENSE)
