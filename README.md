# smart-rate-limit

A lightweight and efficient rate limiting library for Node.js applications.
[NPM registery link](https://www.npmjs.com/package/@akshat91420/smart-rate-limit)

## Features

- Simple and intuitive API
- Multiple rate limiting strategies
- In-memory storage with optional Redis support
- TypeScript support
- Zero dependencies

## Installation

```bash
npm install @akshat91420/smart-rate-limit
```

## API

### `new RateLimit(options)`

**Options:**
- `windowMs` (number): Time window in milliseconds
- `maxRequests` (number): Maximum requests per window

### `check(key)`

Returns `true` if request is allowed, `false` otherwise.
## Usage

```javascript
const RateLimit = require('@akshat91420/smart-rate-limit');

const limiter = new RateLimit({
    windowMs: 60 * 1000, // 1 minute
    maxRequests: 10
});

if (limiter.allow('user-id-123')) {
    // Request allowed
} else {
    // Request denied
}
```

### `allow(key)`

Returns `true` if request is allowed within the rate limit, `false` if limit is exceeded.
## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.