import DDL, { Entry } from '../src/DDL'

function expectEntryToBe(entry: Entry | undefined, to: any) {
  expect(entry?.key).toEqual(to)
  expect(entry?.value).toEqual(to)
}

describe('ddl test', () => {
  const ddl = new DDL()
  const testValue = Date.now()
  const entry = new Entry(testValue, testValue)

  it('should ddl contruct with two sentinel nodes', () => {
    expect(ddl.head).not.toBeUndefined()
    expect(ddl.tail).not.toBeUndefined()
  })

  it('should `insert(...)` work', () => {
    expectEntryToBe(ddl.head.next, undefined)
    // insert
    ddl.insert(entry)
    // head
    expectEntryToBe(ddl.head.next, testValue)
    // tail
    expectEntryToBe(ddl.tail.prev, testValue)
  })

  it('should `delete(...)` work', () => {
    expect(entry.next).not.toBeUndefined()
    expect(entry.prev).not.toBeUndefined()

    ddl.delete(entry)
    // head
    expectEntryToBe(ddl.head.next, undefined)
    // tail
    expectEntryToBe(ddl.head.prev, undefined)
  })
})
