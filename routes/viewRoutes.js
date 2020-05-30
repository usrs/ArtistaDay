const router = require('express').Router()
const { Artist } = require('../controller')

router.get('/', (req, res) => {
  res.render('index', {
    startDate: '2020-07-12 00:00:00',
    endDate: '2020-07-12 11:59:59',
    title: 'ArtistADay',
    artistId: 1,
    discount: 40
  })
})

router.get('/artists', (req, res) => {
  Artist.getArtists(artists => {
    res.render('artists', { artists })
  })
})
module.exports = router
