import { toJSON ,toCacheMap } from '../src/parser'

describe('parser test', () => {
  const timestamp = Date.now()
  const testMap = new Map()
  const testString = `[["test",${timestamp}]]`
  testMap.set('test', timestamp)

  it('should `toJSON(...)` work', () => {
    expect(toJSON(testMap)).toEqual(testString)
  })

  it('should `toCacheMap(...)` work', () => {
    expect(toCacheMap(testString)).toEqual(testMap)
  })

  it('should `toJSON(...)` and `toCacheMap(...)` both work', () => {
    expect(toCacheMap(toJSON(testMap))).toEqual(testMap)
    expect(toJSON(toCacheMap(testString))).toEqual(testString)
  })
})
