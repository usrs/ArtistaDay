document.getElementById('addItemForm').addEventListener("submit", function (event) {
  // prevent browser from refeshing the page
  event.preventDefault() 

  // convert the photo into Base64 format
  const photo = document.querySelector('input[type="file"]')
  const name = document.getElementById('artworkTitle').value
  console.log(name)
  // const photo = document.getElementById('imgPath').textContent
  console.log(photo)
  const reader = new FileReader()
  reader.readAsDataURL(photo.files[0])
  reader.onload = function () {
    console.log(reader.result)

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
    })
  }
  reader.onerror = function (err) {
    console.log(err);
  }
})

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