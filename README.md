# kath

> Another in-memory caching

Under Construction.

## Installation

```shell
$ yarn add kath
```
## Usage

```javascript
const { createCache } = require('kath');

const cache = createCache(10);

cache.put('key', 'value');

console.log(cache.get('key'));

// key
```

## API

### createCache(capacity: number, cache?: Map<any, Entry>): LRUCache

- `capacity` - The capacity of the cache.
- `cache` - Create with a existing cache.

### LRUCache

```typescript
class LRUCache extends DDL {
    private _capacity;
    private _cache;
    constructor(capacity: number, cache?: Map<any, Entry>);
    get(key: any): any;
    put(key: any, value: any): void;
    data(): Map<any, Entry>;
    private moveToHead;
}
```

### toCacheMap(cacheStr: string): Map<any, Entry>

Parse JSON string to `Map<string, Entry>`.

### toJSON(cacheMap: Map<any, Entry>): string

Stringify cache map to JSON string.

## License

[MIT](LICENSE)
