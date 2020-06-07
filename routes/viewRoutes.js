const router = require("express").Router();
const { Artist, Item } = require("../models");

router.get("/", (req, res) => {
  res.sendFile("../public/index.html");
});

router.get("/dashboard/:id", (req, res) => {
  User.findOne({ id: req.params.id, include: [Pet] })
    .then((user) => {
      res.render("dashboard", { user: user.dataValues });
    })
    .catch((err) => console.error(err));
});

router.get("/dashboard", (req, res) => {
  res.sendfile("public/dashboard.html");
});

module.exports = router;
