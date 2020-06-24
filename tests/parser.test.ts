import { toJSON ,toMap } from '../src/parser'

describe('parser test', () => {
  const timestamp = Date.now()
  const testMap = new Map()
  const testString = `[["test",${timestamp}]]`
  testMap.set('test', timestamp)

  it('should `toJSON(...)` work', () => {
    expect(toJSON(testMap)).toEqual(testString)
  })

  it('should `toMap(...)` work', () => {
    expect(toMap(testString)).toEqual(testMap)
  })

  it('should `toJSON(...)` and `toMap(...)` both work', () => {
    expect(toMap(toJSON(testMap))).toEqual(testMap)
    expect(toJSON(toMap(testString))).toEqual(testString)
  })
})
