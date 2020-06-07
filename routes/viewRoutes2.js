const router = require("express").Router();
const { Artist, Item } = require("../models");

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/dashboard/:id", (req, res) => {
  Artist.findOne({ id: req.params.id, include: [Item] })
    .then((user) => {
      res.render('dashboard', { user: user.dataValues });
    })
    .catch((err) => console.error(err));
});


router.get("/artists", (req, res) => {
  Artist.findAll()
    .then((artists) => res.json(artists))
    .catch((err) => console.error(err));
});


router.get("/test", (req, res) => {
  res.render("test");
});
module.exports = router;

// router.get("/dashboard/:id", (req, res) => {
//   Artist.findOne({ id: req.params.id, include: [Item] })
//     .then((user) => {
//       res.render("dashboard", { user: user.dataValues });
//     })
//     .catch((err) => console.error(err));
// });