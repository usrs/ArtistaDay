const router = require("express").Router();
const { Image } = require("../models");

// GET all images
router.get("/images", (req, res) => {
  Image.findAll()
    .then((images) => res.json(images))
    .catch((err) => console.error(err))
})

// // GET one image
// router.get("/images/:id", (req, res) => {
//   Image.findOne({ id: req.params.id })
//     .then((image) => res.json(image))
//     .catch((err) => console.error(err));
// });

// POST one image
router.post("/images", (req, res) => {
  Image.create(req.body)
    .then(() => res.sendStatus(200))
    .catch((err) => console.error(err));
});

// PUT one image
router.put("/images/:id", (req, res) => {
  Image.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch((err) => console.error(err));
});

// DELETE one image
router.delete("/images/:id", (req, res) => {
  Image.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch((err) => console.error(err));
});

module.exports = router
