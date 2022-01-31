const blogs = [
  { title: "why is apple best", liked_by: 50 },
  { title: "why budget samsung phones suck", liked_by: 60 },
];

let user = {
  name: "crystal",
  age: 25,
  email: "crystal@hmail.com",
  location: "berlin",
  //   blogs: ["why is apple best", "why budget samsung phones suck"],
  blogs: [
    { title: "why is apple best", liked_by: 50 },
    { title: "why budget samsung phones suck", liked_by: 60 },
  ],
  login() {
    console.log("user has logged in");
  },
  logout() {
    console.log("user logged out");
  },
  logBlogs() {
    // console.log(this.blogs);
    console.log("this user has written the following blogs");
    this.blogs.forEach((blog) => {
      console.log(blog.title, blog.liked_by);
    });
  },
};
// console.log(user);
// console.log(user.name);

// user.age += 5;
// console.log(user.age);

// console.log(user["email"]);

// user["name"] = "chun-li";
// console.log(user["name"]);

// user.login();

// const fname = "name";

// user.logBlogs();
user.logBlogs();
console.log(this);
