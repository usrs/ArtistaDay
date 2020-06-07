
const getUser = () => {
  axios.get(`/api/users/${localStorage.getItem('user')}`)
    .then(({ data }) => {
      document.getElementById('user').innerHTML = `
      <p>${data.name}</p>
      <p>${data.age}</p>
      `
      data.pets.forEach(pet => {
        let petElem = document.createElement('li')
        petElem.textContent = `
          Name: ${pet.name} | Breed: ${pet.breed} | Age: ${pet.age}
        `
        document.getElementById('pets').append(petElem)
      })
    })
}


document.getElementById('addPet').addEventListener('click', event => {
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



