
const logOut = () => {
  console.log("hello");
  var date = new Date();

  var utcDate = new Date(date.toUTCString());
  utcDate.setHours(utcDate.getHours());
  var usDate = new Date(utcDate);
  document.cookie = `name=''; expires = ${usDate.toUTCString()}`;
  window.location.replace("/");
};

function loggedInStatus() {
  if (!document.cookie.split("=")[1]) {
  } else {
    axios
      .get(`/api/artists/${document.cookie.split("=")[1]}`)
      .then(({ data }) => {
        artistUpload(
          data.Artist.Name,
          data.Artist.Bio
        );
        document.getElementById("loggedIn").innerHTML = `
              Logged in as ${data.Artist.Name} 
              <button id='logOut' onclick='logOut()'>Log Out</button>
              `;
      })
      .catch((err) => console.log(err));
  }
}

function artistItems( )
{ 
    artistItem.forEach(item => { 
        
        $('.artistItems').prepend(
            `  
            <div class="myItems" data-id="${item.id}">
            <h3 class ="username">  ${name} : <span class ="postbody">${item.title}</span></h3>
            
            <div class="image"> 
            <img src="${item.productUrl}" alt="" class="postImage">
               </div>
            <hr />
          </div>`)
            })  
}
    
// Add new item

document.getElementById('addItem').addEventListener('click', event =>
{
  event.preventDefault()

  let formData = new FormData(document.getElementById('POSTIT'))
  // formData.append('files', )
  if(document.getElementById('file').value.length > 0 || document.getElementById('posttext').value !== '')
  {
  axios.post('api/items/additem', formData)
  .then(({ data }) => {
    if(!recent)
    {
      $('.main').scrollTop(0)
      userPost([data[0].data],data[1].firstName,data[1].lastName)
    }
    else
    {
      loggedInStatus()
    }
  
  })
  .catch(err => console.error(err))
  
  // console.log(formData)

  document.getElementById('file').value = null
  document.getElementById('posttext').value = ''
}

document.getElementById('posttext').focus()

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



