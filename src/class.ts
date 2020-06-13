class Parson {
  constructor(public name: string, private age: number) {}
  incrementAge() {
    this.age += 1;
  }

  greeting(this: Parson) {
    console.log(`Hello My name is ${this.name}, ${this.age} years old.`);
  }
}

class Teacher extends Parson {
  constructor(name: string, age: number, public sublect: string) {
    super(name, age);
  }

  greeting(this: Teacher) {
    console.log(`Hello My name is ${this.name}, ${this.age} years old.`);
    // .ageにエラー
    // Parson.age: number
    //   プロパティ 'age' はプライベートで、クラス 'Parson' 内でのみアクセスできます
  }
}
const teacher = new Teacher("Qiill", 38, "math");

teacher.greeting();

// コンソール
