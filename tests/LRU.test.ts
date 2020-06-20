import LRUCache from '../src/LRU'

describe('LRUCache', () => {
  const cache = new LRUCache(10)
  const testKey = 'test key'
  const testValue = 'test value'

  it('should initialize', () => {
    expect(typeof cache).toBe('object')
  })

  it('should `size()` to be `0`', () => {
    expect(cache.size()).toEqual(0)
  })

  it('should get `undefined` when key is not found', () => {
    const value = cache.get(undefined)
    expect(value).toEqual(undefined)
  })

  it('should `put()` ', () => {
    cache.put(testKey, testValue)
    expect(cache.size()).toEqual(1)
  })

  it('should `get()` return correct just `put()`', () => {
    const value = cache.get(testKey)
    expect(value).toEqual(testValue)
  })
})
