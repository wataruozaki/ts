// デコレーターファクトリー
// 勝手に定義できないのでデコレーターを返す関数をかく
function Logging(message: string) {
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  };
}

function Component(template: string, selector: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    // ここに指定される
    constructor: T
  ) {
    //class Userはしたの無名クラスに書き換わってえる
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        console.log("Component");
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
          mountedElement.innerHTML = template;
          mountedElement.querySelector("h1")!.textContent = instance.name;
        }
      }
    };
  };
}

function PropertyLogging(target: any, propertyKey: string) {
  console.log("propertyLogging");
  console.log(target);
  console.log(propertyKey);
}
function MethodLogging(
  target: any,
  propertyKey: string,
  descripter: PropertyDescriptor
) {
  console.log("MethodLogging");
  console.log(target);
  console.log(propertyKey);
  console.log(descripter);
}
function enumerable(isEnumerable: boolean) {
  return function (
    _target: any,
    _propertyKey: string,
    _descripter: PropertyDescriptor
  ) {
    return {
      enumerable: isEnumerable,
    };
  };
}

function AccesserLogging(
  target: any,
  propertyKey: string,
  descripter: PropertyDescriptor
) {
  console.log("AccesserLogging");
  console.log(target);
  console.log(propertyKey);
  console.log(descripter);
}
function ParameterLogging(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log("ParameterLogging");
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}

@Logging("Logging User")
@Component("<h1> {{ name }} </h1>", "#app")
class User {
  @PropertyLogging
  name = "Quill";
  constructor(private _age: number) {
    console.log("User was created!");
  }
  @AccesserLogging
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  @enumerable(false)
  @MethodLogging
  greeting(@ParameterLogging message: string) {
    console.log("Hello");
  }
}

const user1 = new User(32);
const user2 = new User(32);
const user3 = new User(32);
