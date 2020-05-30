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
    .catch(err=> console.error(err))
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

//code to delete item from cart
// document.addEventListener('click', event => {
//   if (event.target.className === 'removeFromCart') {
//     axios.delete(`/api/artists/${event.target.dataset.id}`)
//       .then(() => {
//         event.target.parentNode.remove()
//       })
//   }
// })

//code to delete item from wishlist
// document.addEventListener('click', event => {
//   if (event.target.className === 'removeFromWish') {
//     axios.delete(`/api/artists/${event.target.dataset.id}`)
//       .then(() => {
//         event.target.parentNode.remove()
//       })
//   }
// })
