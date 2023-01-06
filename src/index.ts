import clone from "just-clone";
type MapInputType<T, K> = Map<T, K>;
type ArrayInputType<T, K> = [T, K][];
type ConstructorParamType<T, K> =
  | MapInputType<T, K>
  | ArrayInputType<T, K>
  | undefined;
export class ImmutableMap<T, K> {
  data: Map<T, K> = new Map();
  constructor(param?: ConstructorParamType<T, K>) {
    if (!param) {
      this.data = new Map();
    }
    if (Array.isArray(param)) {
      this.data = new Map(param);
    }
    if (param instanceof Map) {
      this.data = new Map(param);
    }
    this.size = this.data.size;
  }
  size = this.data.size;
  private setSize() {
    this.size = this.data.size;
  }
  getMap = () => {
    return new Map(this.data);
  };
  values = () => {
    return Array.from(this.data.values());
  };
  keys = () => {
    return Array.from(this.data.keys());
  };
  /**
   *
   * @returns
   * Returnes a copy of an specified element from an ImmutableMap.
   */
  get = (key: T) => {
    const el = this.data.get(key);
    if (!el) return undefined;
    const copy: K = clone(el) as K;
    return copy;
  };
  /**
   * Set an element for specified key, if key already exist it will overrites it
   * Returns a new ImmutableMap Object
   */
  set(key: T, entry: K) {
    const copy = new Map(this.data);
    copy.set(key, entry);
    this.data = new Map(copy);
    this.setSize();
    return new ImmutableMap(copy);
  }
  /**
   * Sets many elements provided as an array containing key value tuples [key,value]
   * Returns new ImmutableMap
   */
  setMany(array: [T, K][]) {
    const copy = new Map(this.data);
    for (const [key, value] of array) {
      copy.set(key, value);
    }
    this.data = copy;
    this.setSize();
    return new ImmutableMap(copy);
  }
  /**
   * Removes an key value pair from an Map,
   * Returns a new ImmutableMap
   */
  delete = (key: T) => {
    const copy = new Map(this.data);
    copy.delete(key);
    this.data = copy;
    this.setSize();
    return new ImmutableMap(copy);
  };
  deleteMany = (keys: T[]) => {
    const copy = this.getMap();
    for (const key of keys) {
      copy.delete(key);
    }
    this.data = copy;
    this.setSize();
    return new ImmutableMap(copy);
  };
  /**
   *
   * Runs a provided callback fn in read mode for each element in a Map,
   *
   */
  forEach = (callback: (entry: K, key: T, index: number) => void) => {
    const keys = this.keys();
    let i = 0;
    for (const key of keys) {
      callback(this.get(key) as K, key, i);
      i++;
    }
  };
  has = (key: T) => {
    return this.data.has(key);
  };
  includes = (predicate: (el: K) => boolean): boolean => {
    return !!this.values().find(predicate);
  };
  find = (predicate: (el: K) => boolean): K | undefined => {
    return this.values().find(predicate);
  };
  map = (callbackFn: (value: K, index: number, array: K[]) => unknown) => {
    const values = this.values();
    return values.map(callbackFn);
  };
  some = (predicate: (value: K, index: number, array: K[]) => unknown) => {
    return this.values().some(predicate);
  };
  every = (predicate: (value: K, index: number, array: K[]) => boolean) => {
    return this.values().every(predicate);
  };
}

const mpmPackage = { ImmutableMap };
export default mpmPackage;
