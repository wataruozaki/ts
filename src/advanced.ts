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
type mix = NumberBoolean & stringNumber; //共通しているnumber型になる
