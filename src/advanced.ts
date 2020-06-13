// type Engineer = {}
interface Engineer {
  name: string;
  role: string;
}
// type Blogger = {}
interface Blogger {
  name: string;
  follower: number;
}

// type EnginerBlogger = Engineer & Blogger;
interface EnginerBlogger extends Engineer, Blogger {}
const quill: EnginerBlogger = {
  name: "Quill",
  role: "front-end",
  follower: 1000,
};

type NumberBoolean = number | boolean;
type stringNumber = string | number;
type mix = NumberBoolean & stringNumber;

function toUpperCase(x: string | number) {
  if (typeof x === "string") {
    x.toUpperCase();
  }
  return " ";
}
type NomadWorker = Engineer | Blogger;
function discribeProfile(nomadWorker: NomadWorker) {
  console.log(nomadWorker.name);
  if ("role" in nomadWorker) {
    console.log(nomadWorker.role);
  }
  if ("follower" in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}
class Dog {
  kind: "dog" = "dog";
  speak() {
    console.log("bow-wow");
  }
}
class Bird {
  kind: "bird" = "bird";
  speak() {
    console.log("tweet-tweet");
  }
  fly() {
    console.log("flutter");
  }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  switch (pet.kind) {
    case "bird":
      pet.fly();
      break;
  }
  if (pet instanceof Bird) {
    pet.fly();
  }
}
havePet(new Bird());

// タグ付きユニオン
// switchでタグをつけるように分岐できる。
