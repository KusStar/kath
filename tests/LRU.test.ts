import LRUCache from '../src/LRU'

describe('LRUCache', () => {
  const cache = new LRUCache(10)
  const testKey = 'test key'
  const testValue = Date.now()

  it('should initialize', () => {
    expect(typeof cache).toBe('object')
  })

  it('should `size()` to be `0`', () => {
    expect(cache.data().size).toEqual(0)
  })

  it('should get `undefined` when key is not found', () => {
    const value = cache.get(undefined)
    expect(value).toEqual(undefined)
  })

  it('should `put()` works', () => {
    cache.put(testKey, testValue)
    expect(cache.data().size).toEqual(1)
  })

  it('should `get()` return correct just `put()`', () => {
    const value = cache.get(testKey)
    expect(value).toEqual(testValue)
  })

  it('should `get()` return `newValue` just `put()`', () => {
    const newValue = Date.now()
    cache.put(testKey, newValue)

    const value = cache.get(testKey)
    expect(value).toEqual(newValue)
    expect(cache.data().size).toEqual(1)
  })
})
