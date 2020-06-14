// デコレーターファクトリー
// 勝手に定義できないのでデコレーターを返す関数をかく
function Logging(message: string) {
  return function (constructor: Function) {
    console.log(message);
    console.log(constructor);
  };
}

@Logging("Logging User")
class User {
  name = "Quill";
  constructor() {
    console.log("User was created!");
  }
}
const user1 = new User();
// コンソール
// Logging User
// [Function: User]
// User was created!
