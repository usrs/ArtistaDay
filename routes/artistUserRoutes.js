
const router = require("express").Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { User, Post, Comment } = require("../models");


router.get("/artists/:artistName/login", (req, res) => {
  User.findOne({
    where: { artistName: req.params.artistName},
  })
    .then((data) =>
      data === null ? res.json(0) : res.json(data.dataValues.uuid)
    )
    .catch((err) => console.error(err));
});

// Get all artist items
router.get("/artists/items/:artistid", (req, res) => {
  User.findAll({
    where: { uuid: req.params.artistid },
    include: [
      {
        model: Item
      }
    ],
  })
    .then(async (data) => {
      data = await JSON.parse(JSON.stringify(data));
      let artistInfo = {
        FirstName: data[0].firstName,
        LastName: data[0].lastName,
        Bio: data[0].bio,
        artistPhoto: data[0].artistPhoto,
        artidId: data[0].artistId,
      };
      let items = data[0].items.map((val) => {
        return {
          title: val.title,
          productUrl: val.url,
        };
      });
      res.json(data);
    })
    .catch((err) => console.error(err));
});

// Add an artist
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



module.exports = router;