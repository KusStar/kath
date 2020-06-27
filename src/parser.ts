import { Entry } from './ddl'

function toCacheMap(cacheStr: string) {
  return new Map<any, Entry>(JSON.parse(cacheStr))
}

function toJSON(cacheMap: Map<any, Entry>) {
  return JSON.stringify([...cacheMap])
}

export {
  toJSON,
  toCacheMap,
}
