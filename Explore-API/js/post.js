function post() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displyPosts(data));
}
function displyPosts(post) {
  const postContainer = document.getElementById("posts-container");
  for (const posts of post) {
    const postDiv = document.createElement("div");
    //  console.log(post);
    postDiv.classList.add("post");
    postDiv.innerHTML = `
     <h4>User- ${post.userId} </h4>
     <h5>Post: ${post.title}</h5>
     <p>Post Description: ${post.body}</p>
     `;
    postContainer.appendChild(postDiv);
  }
}

post();

