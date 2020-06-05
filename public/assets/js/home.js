const goToProductPage = (id) => {
  return axios.get(`/api/items/:${id}`)
}

goToProductPage()

// function to load the featured artist of the day
function loadFeatured () {
  const artistArray = [
    { "Annie Leibovitz": ["Queen Elizabeth", "Rolling Stones"] }, { "Sebastio Salgado": ["elephant", "baobao tree"] }, { "Henri Matisse": ["Femme Au Chapeau", "Blue Nude"] }]
  const featuredArtist = artistArray[Math.floor(Math.random() * artistArray.length)]
  const displayedArtwork = imageArray[Math.floor(Math.random() * imageArray.length)]
}

// function to load recent artist cards
function loadRecent (id) {

const d = new Date()
const t = d.getTime()
const days = Math.floor(t / (86400000))

const imageArray = new Array('Annie Leibovitz: Queen Elizabeth', 'Sebastio Salgado: elephant', 'Henri Matisse: Femme Au Chapeau 1905')

let i = days % imageArray.length

const img = new Image()
img.src = imageArray[i]
}
window.onload = loadFeatured()

window.onload = loadRecent()
