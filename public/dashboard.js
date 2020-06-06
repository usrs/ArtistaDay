//Register &Login

document.getElementById('register').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/artists', {
    name: document.getElementById('name').value
  })
    .then(({ data }) => {
      localStorage.setItem('artist', data.id)
      window.location = '/dashboard.html'
    })
    .catch(err => console.error(err))
})

document.getElementById('login').addEventListener('click', event => {
  event.preventDefault()
  axios.get(`/api/login/${document.getElementById('name').value}`)
    .then(({ data }) => {
      localStorage.setItem('artist', data.id)
      window.location = '/dashboard.html'
    })
    .catch(err => console.error(err))
})



// Code snippet example to work from 
document.getElementById('addItem').addEventListener('click', event => {
  event.preventDefault()

  axios.post('/api/item', {
    title: document.getElementById('title').value,
    productUrl: document.getElementById('productUrl').value,
    artistId: event.target.dataset.id
  })
    .then(() => {
      let itemElem = document.createElement('div')
      itemElem.innerHTML = `
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
      
      `
      // `Name: ${document.getElementById('name').value} | Breed: ${document.getElementById('breed').value} | Age: ${document.getElementById('age').value}`
      // document.getElementById('pets').append(petElem)
      // document.getElementById('name').value = ''
      // document.getElementById('breed').value = ''
      // document.getElementById('age').value = ''
    })
    .catch(err => console.error(err))
})

const getArtist = () => {
  axios.get(`/api/artists/:id`) 
  .then(({ data }) => {
    document.getElementById('featuredArtist').innerHTML = `
     <h1>${data.name}</h1>
    `

    data.items.forEach(item => {
      let itemElem = document.createElement('div')
      itemElem.innerHTML = `
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
      `
      document.getElementById('featuredArtistItems').append(itemElem)    

    })
  } )
}


const getArtists = () => {
  axios.get(`/api/artists`)
  .then(({ data }) => {
    data.artists.forEach(artist => {
      let artistElem = document.createElement('div')
      artistElem.innerHTML = `
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
      `
      document.getElementbyId('other-featured-artists-section').append(artistElem)
    })
  })