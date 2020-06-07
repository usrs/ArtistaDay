
const router = require("express").Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { Artist, Item, Event, Upload } = require("../models");

//artist login
router.get("/artists/:artistName/login", (req, res) => {
  Artist.findOne({
    where: { artistName: req.params.artistName},
  })
    .then((data) =>
      data === null ? res.json(0) : res.json(data.dataValues.uuid)
    )
    .catch((err) => console.error(err));
});

// Get all artist items
router.get("/artists/items/:artistid", (req, res) => {
  User.findAll({ where: { uuid: req.params.artistid },
    include: [
      {
        model: Item,
        include: [
          {
            model: Upload
          }
        ]
      }
    ],
  })
    .then(async (data) => {
      data = await JSON.parse(JSON.stringify(data));
      let artistInfo = {
        name: data[0].name,
        bio: data[0].bio,
        artistPhoto: data[0].artistPhoto,
        artidId: data[0].artistId
      };
      let upload = data[0].uploads
      let items = data[0].items.map((val) => {
        return {
          title: val.title,
          productUrl: val.url,
        };
      });
      res.json(aboutArtist);
    })
    .catch((err) => console.error(err));
});

// Add an artist account
router.post("/artists/register", (req, res) => {
  User.findOrCreate({
    where: { name: req.body.name },
    defaults: req.body,
  })
    .then((data) =>
      data[data.length - 1]
        ? res.sendStatus(200)
        : res.json("Artist account already existed")
    )
    .catch((err) => console.error(err));
});

// Update artist info 
router.put('/artists/update/:artistName/:uuid', (req,res) =>
{
    Artist.update(req.body, { where: {artistName: req.params.artistName , id : req.params.uuid }})
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// Delete a artist requires to 2 fields, name and artist id 
router.delete('/artists/delete/:artistName/:uuid', (req,res) => {
    Artist.destroy({where : {artistName: req.params.password, uuid: req.params.uuid}})
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router;