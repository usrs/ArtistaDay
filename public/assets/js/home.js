const getArtwork = () => {
  axios.get(`/api/items/:${id}`)
    .then(({ data }) => {
      document.getElementById('featured').innerHTML = `
      <img src="${data.productUrl}" 
      alt="${data.title}">
      <div class="right" id="nameBox">
          <p id="artistName">${data.artistName}
          </p>
          <p>Sale: ends July 8, 2020</p>
        </div>
      </div>
          <a href="${data.productUrl}" id="link">Visit product page</a>`
    })
    .catch(err => console.error(err))
}

getArtwork()
