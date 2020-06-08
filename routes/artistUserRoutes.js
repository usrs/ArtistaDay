
const router = require("express").Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { Artist, Item, Event, Upload } = require("../models");

//artist login
router.get("/artists/:username/:password/login", (req, res) => {
  Artist.findOne({ where : { username: req.params.username, password: req.params.password }})
    .then((data) =>
      data === null ? res.json(0) : res.json(data.dataValues.id)
    )
    .catch((err) => console.error(err));
});

// Add an artist account
router.post("/artists/register", (req, res) => {
  User.findOrCreate({
    where: { username: req.body.username },
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
router.put('/artists/update/:id', (req,res) =>
{
    Artist.update(req.body, { where: {  id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})


// Get all artist items
router.get("/artists/items/:username", (req, res) => {
  User.findAll({ where: { username: req.params.username },
    include: [
      {
        model: Item
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
      let items = data[0].items.map((val) => {
        return {
          title: val.title,
          productUrl: val.productUrl,
        };
      });
      res.json(data);
    })
    .catch((err) => console.error(err));
});


// Delete a artist requires to 2 fields, name and artist id 
router.delete('/artists/delete/:username/:password', (req,res) => {
    Artist.destroy({where : {username: req.params.username, password: req.params.password}})
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router;