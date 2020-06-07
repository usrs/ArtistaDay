// code snippet to customize


document.getElementById("login").addEventListener("click", (event) => {
  event.preventDefault();
  axios
    .get(`/api/login/${document.getElementById("artistName").value}`)
    .then(({ data }) => {
      localStorage.setItem("user", data.id);
      window.location = "/dashboard.html";
    })
    .catch((err) => console.error(err));
});


document.getElementById("register").addEventListener("click", (event) => {
  event.preventDefault();
  axios
    .post("/api/artists", {
      name: document.getElementById("artistName").value,
    })
    .then(({ data }) => {
      localStorage.setItem("user", data.id);
      window.location = "/dashboard.html";
    })
    .catch((err) => console.error(err));
});