const router = require("express").Router();
const { Image } = require("../models");

router.get("/", (req, res) => {
  Image.findAll()
  .then(image => {
    res.render("home", {name: image.name, url: image.url});
  })
  .catch(err => console.error(err))
});

router.get("/dashboard/:id", (req, res) => {
  User.findOne({ id: req.params.id, include: [Pet] })
    .then((user) => {
      res.render("dashboard", { user: user.dataValues });
    })
    .catch((err) => console.error(err));
});

router.get("/test", (req, res) => {
  res.render("test");
});
module.exports = router;
