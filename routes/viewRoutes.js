const router = require("express").Router();
const { Artist, Item } = require("../models");
const { join } = require("path")

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

// router.get("/dashboard", (req, res) => {
//   res.sendfile("public/dashboard.html");
// });

router.get('/dashboard', (req, res) => {
  res.sendFile(join(__dirname, '/../public/dashboard.html'))
})

module.exports = router;
