// code to customize

const getOneArtist = () => {
  axios.get('/api/artists/:id')
    .then(({ data }) => {
      document.getElementById('dashGreeting').innerHTML = `
      <h5>${data.name}</h5>
      `
      data.items.forEach(item => {
        let itemElem = document.createElement('li')
        petElem.textContent = `
          Name: ${item.name} | URL: ${item.url} 
        `
        document.getElementById('pets').append(petElem)
      })
    })
}


document.getElementById('addItem').addEventListener('click', event => {
  event.preventDefault()

  axios.post('/api/pets', {
    name: document.getElementById('name').value,
    breed: document.getElementById('breed').value,
    age: document.getElementById('age').value,
    userId: localStorage.getItem('user')
  })
    .then(() => {
      let petElem = document.createElement('li')
      petElem.textContent = `Name: ${document.getElementById('name').value} | Breed: ${document.getElementById('breed').value} | Age: ${document.getElementById('age').value}`
      document.getElementById('pets').append(petElem)
      document.getElementById('name').value = ''
      document.getElementById('breed').value = ''
      document.getElementById('age').value = ''
    })
    .catch(err => console.error(err))
})

getUser()



