import { MemoryStore } from "./adapters/memory.js";
import { SmartRateLimiter } from "./limiter.js";

export function createRateLimiter(options = {}) {
  const store = options.store || new MemoryStore();
  const limiter = new SmartRateLimiter({ ...options, store });

  return {
    allow: () => limiter.allow()
  };
}
