export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    // take all the properties of update and override in this.data
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
