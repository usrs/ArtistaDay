document.querySelector('chocolat-image').addEventListener('click', () => {
  api.open()
})

const getArtwork = () => {
  axios.get(`/api/items/:${id}`)
    .then(({ data }) => {
      document.getElementById('featured').innerHTML = `
      <img src="${item.productUrl}" 
      alt="${item.title}}">
      <div class="right" id="nameBox">
          <p id="artistName">${item.artistName}
          </p>
          <p>Sale: ${event.endDate}</p>
        </div>
      </div>
          <a class="chocolat-image" href="${item.productUrl}">Lightbox Preview</a>
          <a href="${item.productUrl}" id="link">Visit product page</a>`
    })
    .catch(err => console.error(err))
}

getArtwork()
