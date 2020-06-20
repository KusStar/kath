export class Entry {
  value: any
  key: any
  next?: Entry
  prev?: Entry

  constructor(key?: any, value?: any) {
    this.key = key
    this.value = value
  }
}

export default class DoublyLinkedList {
  head: Entry
  tail: Entry

  constructor() {
    // two sentinel nodes
    this.head = new Entry()
    this.tail = new Entry()

    this.head.next = this.tail
    this.tail.prev = this.head
  }

  insert(node: Entry) {
    if (this.head.next) {
      this.head.next.prev = node
    }
    node.next = this.head.next

    node.prev = this.head
    this.head.next = node
  }

  delete(node: Entry) {
    if (node.prev && node.next) {
      node.prev.next = node.next
      node.next.prev = node.prev
    }
  }

}
