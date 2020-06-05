const goToProductPage = (id) => {
  return axios.get(`/api/items/:${id}`)
}

goToProductPage()

// function to load the featured artist of the day
function loadFeatured () {
  const artistArray = [
    { "Annie Leibovitz": ["Queen Elizabeth", "Rolling Stones"] }, { "Sebastio Salgado": ["elephant", "baobao tree"] }, { "Henri Matisse": ["Femme Au Chapeau", "Blue Nude"] }]
  let featuredArtist = artistArray[Math.floor(Math.random() * artistArray.length)]
  const displayedArtwork = imageArray[Math.floor(Math.random() * imageArray.length)]
}

// function to load recent artist cards
/* need to write function which loads the recently featured artists into cards, but every 24 hours, removes the featured artist from 4 days ago, then shifts all of the remaining cards down and adds in the featured artist from yesterday */

function loadRecent (id) {
  const d = new Date()
  const t = d.getTime()
  const days = Math.floor(t / (86400000))

  const imageArray = ['Annie Leibovitz: Queen Elizabeth', 'Sebastio Salgado: elephant', 'Henri Matisse: Femme Au Chapeau 1905']

  const img
  img.src = imageArray[i]
  const i = days % imageArray.length

  function loadNew(){
    let featuredArtist = yesterday
    imageArray.pop()
    imageArray.unshift(yesterday)
  }
}
window.onload = loadFeatured()

window.onload = loadRecent()
