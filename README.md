# norobot

Connect/Express middleware that sets `X-Robots-Tag` header to `no-index, no-follow`. Useful to avoid indexing of non production environments.

## Install

```bash
$ npm install --save norobot
```

## Usage

```javascript
import express from 'express'
import norobot from 'norobot'

const app = express()

// Enable X-Robots-Tag for all routes, if not in production
app.use(norobot('production' !== process.env.NODE_ENV))

// Enable X-Robots-Tag for a specific route
app.get('/', norobot, (request, response, next) => {
  response.send('Hello World!')
})
```

## License

[The MIT License](./LICENSE)
