import DDL, { Entry } from './DDL'

export default class LRUCache extends DDL {

  private _capacity: number
  private _cache: Map<any, Entry>

  constructor(capacity: number, cache?: Map<any, Entry>) {
    super()

    this._capacity = capacity
    this._cache = cache ?? new Map<any, Entry>()
  }

  get(key: any) {
    const node = this._cache.get(key)

    if (!node) {
      return undefined
    }

    this.moveToHead(node)

    return node.value
  }

  put(key: any, value: any) {
    const node = this._cache.get(key)

    if (node) {
      node.value = value
      this.moveToHead(node)

      return
    }

    if (this._cache.size == this._capacity) {
      const lastNode = this.tail

      if (lastNode) {
        this.delete(lastNode)
        this._cache.delete(lastNode.key)
      }
    }

    const newNode = new Entry(key, value)

    this.insert(newNode)

    this._cache.set(key, newNode)
  }

  data() {
    return this._cache
  }

  private moveToHead(node: Entry) {
    this.delete(node)
    this.insert(node)
  }

}
