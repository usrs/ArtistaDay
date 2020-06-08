const getArtwork = () => {
  axios.get(`/api/items/:${id}`)
    .then(({ data }) => {
      document.getElementById('featured').innerHTML = `
      <img src="${item.productUrl}" 
      alt="${item.title}}">
      <div class="right" id="nameBox">
          <p id="artistName">${item.artistName}
          </p>
          <p>Sale: ends July 8, 2020</p>
        </div>
      </div>
          <a href="${item.productUrl}" id="link">Visit product page</a>`
    })
    .catch(err => console.error(err))
}

getArtwork()

const getArtists = () => {
  axios.get(api/artists)
  .then(({ data }) => {
    data.artists.forEach(artist => {
      let artistElem = document.createElement('div')
      artistElem.innerHTML = 
      <div class="col s4">
          <div class="card medium">
            <div class="card-image">
              <img src="${artist.artistPhoto}">
            </div>
            <div class="card-content">
              <p class="card-artist-name">:${artist.name}</p>
            </div>
            <div class="card-action">
                    <a class="waves-effect waves-light btn-small addBtn" a href=" /artists/{artist.name}">Visit Page</a>
                  </div>
                </div>
            </div>
          </div>
        </div> 
      
      document.getElementbyId('other-featured-artists-section').append(artistElem)
    })
  })

const getArtist = () => {
  axios.get(/api/artists/:id) 
  .then(({ data }) => {
    document.getElementById('featuredArtist').innerHTML = 
     <h1>${data.name}</h1>
    

    data.items.forEach(item => {
      let itemElem = document.createElement('div')
      itemElem.innerHTML = 
         <div class="col s4">
          <div class="card medium">
            <div class="card-image">
              <img src="${document.getElementById('productUrl').value}">
            </div>
            <div class="card-content">
              <p class="more-products-work-title">Title:${document.getElementById('title').value}</p>
            </div>
            <div class="card-action">
                <div class="row">
                    <p class="price">Price: ${document.getElementById('price').value}</p>
                  </div>
                </div>
            </div>
          </div>
        </div> 
      
      document.getElementById('featuredArtistItems').append(itemElem)

    })
  } )
}
