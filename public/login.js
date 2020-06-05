// Code snippet to reference 

document.getElementById('register').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/users', {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value
  })
    .then(({ data }) => {
      localStorage.setItem('user', data.id)
      window.location = '/dashboard.html'
    })
    .catch(err => console.error(err))
})

document.getElementById('login').addEventListener('click', event => {
  event.preventDefault()
  axios.get(`/api/login/${document.getElementById('lname').value}`)
    .then(({ data }) => {
      localStorage.setItem('user', data.id)
      window.location = '/dashboard.html'
    })
    .catch(err => console.error(err))
})