//your JS code here. If required.
const fetchPost = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
  (res) => res.json()
); // 2

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users/1").then(
  (res) => res.json()
); // 3

const fetchComment = fetch(
  "https://jsonplaceholder.typicode.com/comments/1"
).then((res) => res.json()); // 4

Promise.all([fetchPost, fetchUser, fetchComment])
  .then(([post, user, comment]) => {
    console.log("🚀 ~ .then ~ comment:", comment);
    console.log("🚀 ~ .then ~ user:", user);
    console.log("🚀 ~ .then ~ post:", post);
  })
  .catch((error) => {
    console.log("🚀 ~ error:", error);
  });
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
