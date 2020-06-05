// Code snippet example to work from 

document.getElementById('addPet').addEventListener('click', event => {
  event.preventDefault()

  axios.post('/api/pets', {
    name: document.getElementById('name').value,
    breed: document.getElementById('breed').value,
    age: document.getElementById('age').value,
    userId: event.target.dataset.id
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