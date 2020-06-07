document.getElementById("login").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("test");
  signIn(event.target.artistName.value);
});

function signIn(val1) {
  axios
    .get(`/api/artists/${val1}/login`)
    .then(({ data }) => {
        sessionSet(data);
        window.location.replace("/dashboard");
      }
    })
    .catch((err) => console.error(err));
}

document.getElementById("register").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("register");
 {
    let newArtist = {
      name: event.target.artistName.value
      bio: event.target.bio.value,
      artistPhoto: event.target.artistPhoto.value,
      activated: 0,
    };
    axios.post('/api/artists/register', newArtist)
      .then(() => {
        socket.emit(
          "newArtistSignUp",
          `Artist ${event.target.name.value} has been added`
        );
      })
      .catch((err) => console.log(err));
    document.getElementById("signupForm").innerHTML = `
    <h1>Success!</h1>
    `;
    document.getElementById("signupForm").classList.add("signupSuccess");
//     setTimeout(() => {
//       signIn(event.target.username.value, event.target.password.value);
//     }, 2000);
//   } else {
//     console.log("Error");
//     document.getElementById("invalid").innerText = `Invalid! Please try again.`;
//   }
// });





// function sessionSet(data) {
//   var date = new Date();
//   var utcDate = new Date(date.toUTCString());
//   utcDate.setHours(utcDate.getHours() + 1);
//   var usDate = new Date(utcDate);
//   document.cookie = `name=${data}; expires = ${usDate.toUTCString()}`;
// }

// window.addEventListener("blur", (event) => {
//   sessionSet(document.cookie.split("=")[1]);
// });







// document.getElementById("register").addEventListener("click", (event) => {
//   event.preventDefault();
//   axios.post('/api/artists', {
//       name: document.getElementById("artistName").value,
//     })
//     .then(({ data }) => {
//       localStorage.setItem("user", data.id);
//       window.location = "/dashboard.html";
//     })
//     .catch((err) => console.error(err));
// });

// document.getElementById("login").addEventListener("click", (event) => {
//   event.preventDefault();
//   axios.get(`/api/artists/${document.getElementById("artistName").value}`)
//     .then(({ data }) => {
//       localStorage.setItem("user", data.id);
//       window.location = "/dashboard.html";
//     })
//     .catch((err) => console.error(err));
// });




