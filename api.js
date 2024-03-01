const btn = document.getElementById("btn");
const list = document.getElementById("list");

const url = "https://jsonplaceholder.typicode.com/users";

function fetchUsers() {
  list.innerHTML = `
        <p>Loading...</p>
    `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      list.innerHTML = "";
      // loop
      data.forEach((user) => {
        list.innerHTML += `
                <p>${user.name}</p>
            `;
      });
    });
}

btn.addEventListener("click", () => {
  fetchUsers();
});
