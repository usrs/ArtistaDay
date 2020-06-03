document.getElementById('artistInput').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/artists', {
    artist: document.getElementById('artistInput').value
  })
    .then(({ data }) => {
      let artistElem = document.createElement('li')
      artistElem.innerHTML = `
        ${document.getElementById('artistInput').value}
        <button class="addToCart>Add to Cart</button>
        <button class="addToWish>Add to Wishlist</button>
      `
      document.getElementById('box').append(artistElem)
    })
    .catch(err => console.error(err))
})

// code to add item to cart
// document.addEventListener('click', event => {
//   if (event.target.className === 'addToCart') {
//     axios.put('/artists', {
//       artistElem
//     })  
// .then(({ data }) => {
//   let cartElem = document.createElement('li')
//   cartElem.innerHTML = `
//       ${document.getElementById('artistInput').value}
//       <button class="removeFromCart>Remove From Cart</button>
//     `
//   document.getElementById('box').append(artistElem)
// })
//       })
//       .catch(err=> console.error(err))
//   }
// })

// code to add item to wishlist
// document.addEventListener('click', event => {
//   if (event.target.className === 'addToWish') {
//     axios.put('/artists')
//       {.then(({ data }) => {
// let wishElem = document.createElement('li')
// wishElem.innerHTML = `
//         ${document.getElementById('artistInput').value}
//         <button class="removeFromWish>Remove From Wishlist</button>
//       `
// document.getElementById('box').append(artistElem)
//     })
//       })
//       .catch(err => console.error(err))
//   }
// })


Chocolat(document.querySelectorAll('.chocolat-image'), {
  // link to artist's product page
})

const images = [
  { src: 'img/a.jpg', title: 'image caption a' },
  { src: 'img/b.jpg', title: 'image caption b' },
  // ...
]

const { api } = Chocolat(images, {
  // options here
})

// open directly...
api.open()
