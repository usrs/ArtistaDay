document.querySelector("form").addEventListener("submit", function (event) {
  // prevent browser form refeshing the page
  event.preventDefault() 

  // convert the photo into Base64 format
  const photo = document.querySelector('input[name="photo"]')
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
        photo: reader.result,
      }),
    })
  }
  reader.onerror = function (err) {
    console.log(err);
  }
  
})

document.getElementById('addImage').addEventListener('click', event => {
  event.preventDefault()

  axios.post('/api/upload', {
    name: document.getElementById('name').value,
    url: document.getElementById('url').value,
  })
    .then(() => {
      let imageElem = document.createElement('li')
      imageElem.textContent = `Name: ${document.getElementById('name').value}<br><img src="" alt="">`
      document.getElementById('images').append(imageElem)
      document.getElementById('name').value = ''
    })
    .catch(err => console.error(err))
})