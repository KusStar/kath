import LRUCache from './LRU'
import { toJSON, toCacheMap } from './parser'
import { Entry } from './DDL'

function createCache(capacity: number, cache?: Map<any, Entry>) {
  return new LRUCache(capacity, cache)
}

export {
  createCache,
  LRUCache,
  toJSON,
  toCacheMap,
}
