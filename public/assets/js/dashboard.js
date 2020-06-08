const getArtist = () => {
  axios.get(`/api/artists/${localStorage.getitem('user')}`)
  .then()
}

function artistItems( )
{ 
    artistItem.forEach(item => { 
        
        $(".artistItems").prepend(
          `  
            <div class="col s4">
          <div class="card large">
            <div class="card-image">
              <img src="${data.">
            </div>
            <div class="card-content">
              <p class="more-products-work-title">Artwork Title</p>
            </div>
            <div class="card-action">
              <a class="waves-effect waves-light btn-small addBtn">Add to Cart</a>
            </div>
          </div>
        </div>
`
        );
            })  
}
    
// Add new item

document.getElementById('addItem').addEventListener('click', event =>
{
  event.preventDefault()

  let formData = new FormData(document.getElementById('artistForm'))
  // formData.append('files', )
  if(document.getElementById('file').value.length > 0 || document.getElementById('itemtext').value !== '')
  {
  axios.post('api/items/additem', formData)
  .then(({ data }) => {
    if(!recent)
    {
      $('.main').scrollTop(0)
      artistUpload([data[0].data],data[1].firstName,data[1].lastName)
    }
    else
    {
      loggedInStatus()
    }
  
  })
  .catch(err => console.error(err))
  
  // console.log(formData)

  document.getElementById('file').value = null
  document.getElementById('artworkTitle').value = ''
}

document.getElementById('artworkTitle').focus()

})






// const getOneArtist = () => {
//   axios.get('/api/artists/:id')
//     .then(({ data }) => {
//       document.getElementById('dashGreeting').innerHTML = `
//       <h5>${data.name}</h5>
//       `
//       data.items.forEach(item => {
//         let itemElem = document.createElement('li')
//         petElem.textContent = `
//           Name: ${item.name} | URL: ${item.url} 
//         `
//         document.getElementById('pets').append(petElem)
//       })
//     })
// }


// document.getElementById('addItem').addEventListener('click', event => {
//   event.preventDefault()

//   axios.post('/api/pets', {
//     name: document.getElementById('name').value,
//     breed: document.getElementById('breed').value,
//     age: document.getElementById('age').value,
//     userId: localStorage.getItem('user')
//   })
//     .then(() => {
//       let petElem = document.createElement('li')
//       petElem.textContent = `Name: ${document.getElementById('name').value} | Breed: ${document.getElementById('breed').value} | Age: ${document.getElementById('age').value}`
//       document.getElementById('pets').append(petElem)
//       document.getElementById('name').value = ''
//       document.getElementById('breed').value = ''
//       document.getElementById('age').value = ''
//     })
//     .catch(err => console.error(err))
// })

// getUser()



