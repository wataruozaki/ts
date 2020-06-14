function copy<T extends { name: string }, U extends keyof T>(
  value: T,
  key: U
): T {
  value[key];
  return value;
}
console.log(copy({ name: "Quill", age: 38 }, "name"));

class LightDatabase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}
const stringLightDatabase = new LightDatabase<string>();
// ここでstringsと決めたらstring
stringLightDatabase.add("apple");
stringLightDatabase.add("banana");
stringLightDatabase.add("grape");
stringLightDatabase.remove("banana");

console.log(stringLightDatabase.get());
interface TmpDataBase<T> {
  id: number;
  data: T[];
}
const TmpDataBase: TmpDataBase = {
  id: 3,
  data: [],
};
