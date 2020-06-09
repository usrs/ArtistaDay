const loadCards = () => {
  fetch('api/images')
    .then((response) => response.json())
    .then((images) => {
      images.forEach(image => {
        const imageElem = document.createElement('div')
        imageElem.innerHTML =
          `<div class="col s3">
          <div class="card medium">
            <div class="card-image">
              <img src="${image.url}">
            </div>
            <div class="card-content">
              <p class="card-image-name">:${image.name}</p>
            </div>
            <div class="card-action">
                    <a class="waves-effect waves-light btn-small addBtn" a href="/items/${image.id}">Visit image Page</a>
                  </div>
                </div>
            </div>
          </div>
        </div> `

        document.getElementById('featured').append(imageElem)
      })
    })
}

window.onload = loadCards()
