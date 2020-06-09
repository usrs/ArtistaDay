import { response } from "express"

document.getElementById('addItemForm').addEventListener("submit", function (event) {
  // prevent browser from refeshing the page
  event.preventDefault()

  // convert the photo into Base64 format
  const photo = document.querySelector('input[type="file"]')
  const name = document.getElementById('artworkTitle').value
  let link = ''
  console.log(name)
  // const photo = document.getElementById('imgPath').textContent
  console.log(photo)
  const reader = new FileReader()
  reader.readAsDataURL(photo.files[0])
  reader.onload = function () {
    // submit the file to the server
    fetch("/api/imgur", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: document.getElementById('artworkTitle').value,
        photo: reader.result,
      }),
    }).then(response => response.json())
      .then(data => {
        imgurCallback(data)
      })
  }
  console.log(link, name)
  fetch("/api/images", {
    method: "POST",
    body: JSON.stringify({
      name: document.getElementById('artworkTitle').value,
      url: link
    }),
  }).catch(err => {
    console.log(err.message)
  })

  reader.onerror = function (err) {
    console.log(err);
  }
})
function imgurCallback(data, callback) {
  link = data
  callback(response)
}
// document.getElementById('addImage').addEventListener('click', event => {
//   event.preventDefault()

//   axios.post('/api/upload', {
//     name: document.getElementById('artworkTitle').value,
//     url: data.link,
//   })
//     .then(() => {
//       console.log(data.link)
//     })
//     .catch(err => console.error(err))
// })