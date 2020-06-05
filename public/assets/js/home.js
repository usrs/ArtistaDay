const goToProductPage = (id) => {
  return axios.get(`/api/items/:${id}`)
}

goToProductPage()

// function to load the featured artist of the day
const artistArray = {
  "Annie Leibovitz": ["033-rolling-stones.jpg", "Nicole-Kidman-Portrait-1990.jpg"], 
  "Sebastio Salgado": ["elephant.jpg", "Untitled-Mexico.1980.jpg"], "Henri Matisse": ["Femme A_Chapeau_1905", "Blue_Nude_II_1952.jpg"]
}
let featuredArtist = artistArray[Math.floor(Math.random() * artistArray.length)]
let featuredWork = featuredArtist[0]

function loadFeatured (featuredWork) {
  const displayArtwork 
}

for (i = 0; i < artistArray.length; i++) {
  for (j = 0; j < artistArray[i].length; j++) {
    console.log([i][j][0])
  }
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

  function loadNewCards(){
    let Artist = yesterday
    imageArray.pop()
    imageArray.unshift(yesterday)
  }
}
window.onload = loadFeatured()

window.onload = loadRecent()
