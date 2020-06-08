// redirect to product page  when view button is clicked
document.getElementById('viewBtn').addEventListener("click", (event) => {
  window.location.replace("/product");
})



const getMyArtist = () => {
  axios.get(`api/artists`)
  .then(({ data }) => {
  
  })
}
const getArtists = () => {
  axios.get('api/artists')
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
  });
