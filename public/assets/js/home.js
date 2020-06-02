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
