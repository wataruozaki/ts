class Parson {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }
}

const man = new Parson("taro");
console.log(man);
