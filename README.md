# smart-rate-limit

A lightweight and efficient rate limiting library for Node.js applications.

## Features

- Simple and intuitive API
- Multiple rate limiting strategies
- In-memory storage with optional Redis support
- TypeScript support
- Zero dependencies

## Installation

```bash
npm install smart-rate-limit
```

## API

### `new RateLimit(options)`

**Options:**
- `windowMs` (number): Time window in milliseconds
- `maxRequests` (number): Maximum requests per window

### `check(key)`

Returns `true` if request is allowed, `false` otherwise.

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.