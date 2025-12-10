export class SmartRateLimiter {
  constructor({
    key = "global",
    window = 1000,
    limit = 5,
    burst = 3,
    store,
  }) {
    this.key = key;
    this.window = window;
    this.limit = limit;
    this.burst = burst;
    this.store = store;
  }

  _now() {
    return Date.now();
  }

  allow() {
    const now = this._now();
    const data = this.store.get(this.key) || {
      timestamps: [],
      tokens: this.burst,
      lastRefill: now
    };

    // refill tokens
    const elapsed = now - data.lastRefill;
    const refillTokens = elapsed / this.window;
    if (refillTokens > 0) {
      data.tokens = Math.min(this.burst, data.tokens + refillTokens);
      data.lastRefill = now;
    }

    // sliding window
    data.timestamps = data.timestamps.filter(ts => now - ts < this.window);

    if (data.timestamps.length < this.limit && data.tokens >= 1) {
      data.tokens -= 1;
      data.timestamps.push(now);
      this.store.set(this.key, data);
      return { allowed: true };
    }

    const retryAfter = this.window - (now - data.timestamps[0]);
    return { allowed: false, retryAfter };
  }
}
