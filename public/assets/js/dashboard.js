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
I think it would be something like that
the one thing I wasn't sure about was on the card if we want the action section to be a button that goes to the artist page how to write that url or route in
oh oops and the url in axios.get needs to be corrected
axios.get(/api/artists)
so that function would create a card element for each artist in the artist table.
I wrote another one that would get each artist and then populate that artists items here: const getArtist = () => {
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