interface Engineer {
  name: string;
  role: string;
}

interface Blogger {
  name: string;
  follower: number;
}

interface EnginerBlogger extends Engineer, Blogger {}
const quill: EnginerBlogger = {
  name: "Quill",
  role: "front-end",
  follower: 1000,
};

type NumberBoolean = number | boolean;
type stringNumber = string | number;
type mix = NumberBoolean & stringNumber;

function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
  if (typeof x === "string") {
    x.toUpperCase();
  }
  return x;
}
// オーバーロードした物はinterfaceで定義する必要がある
interface TmpFunc {
  (x: string): number;
  (x: number): number;
}
const upperHello = function (x: string | number) {
  return 0;
};

interface FuncA {
  (a: number, b: string): number;
  (a: string, b: number): number;
}
interface FuncB {
  (a: string): number;
}
let intersectionFunc: FuncA & FuncB;
intersectionFunc = function (a: number | string, b?: number | string) {
  return 0;
};

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
(document.getElementById("input") as HTMLInputElement).value =
  "initial input value";

interface Designer {
  name: string;
  [index: string]: string;
}

const designer: Designer = {
  name: "Quill",
  role: "web",
};

interface DownloadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    };
  };
}

const downloadedData: DownloadedData = {
  id: 1,
};

console.log(downloadedData.user?.name?.first);
const userdata = downloadedData.user ?? "no-user";
type id = DownloadedData["id"];
