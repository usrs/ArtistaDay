const getArtists = () => {
  fetch('api/artists')
    .then((response) => response.json())
    .then((artists) => {
      console.log(artists)
      const featuredArtist = artists[Math.floor(Math.random() * artists.length)]
      console.log(featuredArtist)
      const id = featuredArtist.id
      fetch(`/api/items/:${id}`)
        .then((response) => response.json())
        .then((item) => {
          console.log(item)
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
        </div>`
        })
        .catch(err => console.error(err))
    })
    .catch(err => console.error(err))
}

window.onload = getArtists()

const loadCards = () => {
  fetch('api/artists')
    .then((response) => response.json())
    .then((artists) => {
      artists.forEach(artist => {
        const artistElem = document.createElement('div')
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
                    <a class="waves-effect waves-light btn-small addBtn" a href="/artists/{artist.name}">Visit Artist Page</a>
                  </div>
                </div>
            </div>
          </div>
        </div> `

        document.getElementById('recentArt').append(artistElem)
      })
    })
}

window.onload = loadCards()
