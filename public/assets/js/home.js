const loadFeatured = () => {
  axios.get(`/api/items/:${id}`)
    .then(({ data }) => {
      document.getElementById('featured').innerHTML = `
      <img src="${item.productUrl}" 
      alt="${item.title}}">
      <div class="right" id="nameBox">
          <p id="artistName">${item.artistName}</p>
      </div>
        <div id="timer">
          <iframe
            src="http://free.timeanddate.com/countdown/i7bh83bf/n840/cf100/cm0/cu4/ct0/cs0/ca0/co1/cr0/ss0/cac000/cpc000/pcfff/tc66c/fs100/szw192/szh81/tatSale%20Ends%20in/tac000/tptTime%20since%20Event%20started%20in/tpc000/iso2020-06-10T00:00:00"
            allowTransparency="true" frameborder="0" width="192" height="81"></iframe>
        </div>
          <a href="${item.productUrl}" id="link">Visit product page</a>`
    })
    .catch(err => console.error(err))
}

window.onload = loadFeatured()

const loadCards = () => {
  axios.get('api/artists')
  .then(({ data }) => {
    data.artists.forEach(artist => {
      let artistElem = document.createElement('div')
      artistElem.innerHTML = 
      `<div class="col s3">
          <div class="card medium">
            <div class="card-image">
              <img src="${artist.artistPhoto}">
            </div>
            <div class="card-content">
              <p class="card-artist-name">:${artist.name}</p>
            </div>
            <div class="card-action">
                    <a class="waves-effect waves-light btn-small addBtn" a href=" /artists/{artist.name}">Visit Artist Page</a>
                  </div>
                </div>
            </div>
          </div>
        </div> `
      
      document.getElementbyId('recentArt').append(artistElem)
    })
  })

  window.onload = loadCards()
    

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
  } 
