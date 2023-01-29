const postsList = document.getElementById("posts");

const posts = [
  {
    title: "First Ever Post!",
    content: "Woo! This entire blog was made by ChatGPT! Isn't that impressive?"
  },
];

for (let i = 0; i < posts.length; i++) {
  const post = posts[i];
  const postEl = document.createElement("li");
  postEl.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.content}</p>
  `;
  postsList.appendChild(postEl);
}
