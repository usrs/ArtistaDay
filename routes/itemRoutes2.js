// const router = require("express").Router();
// let fs = require("fs");
// const Sequelize = require("sequelize");
// const Op = Sequelize.Op;
// const { Artist, Upload, Item, Event } = require("../models");

// // Find most recent items
// router.get("/items/:artistid", (req, res) => {
//   // Find all items where artist id to uuid
//   Artist.findAll({
//     where: { artistid: req.params.artistid },
//     include: [{ model: Item }],
//   })
//     .then(async (data) => {
//       // Turn data into an array
//       data = await JSON.parse(JSON.stringify(data[0]));

//       // Now data is an array, we can loop through and filter out an object that we want
//       data = data.item.map((val) => {
//         return val.id;
//       });

//       Artist.findAll({
//         where: { artistId: { [Op.in]: data } },
//         attributes: [Sequelize.fn("MAX", Sequelize.col("id"))],
//         group: ["artistId"],
//         raw: true,
//       })
//         .then(async (object) => {
//           let temp = [];
//           object = object.map((value) =>
//             parseInt(JSON.stringify(value).split(/[\:}]/)[1])
//           );
//           object.sort((a, b) => a.id - b.id);
//           Item.findAll({
//             where: { id: { [Op.in]: object } },
//             attributes: ["id", "body", "createdAt"],
//             include: [{ model: Artist, attributes: ["name", "bio"] }],
//           })
//             .then((post) => res.json(post))
//             .catch((err) => console.error(err));
//         })
//         .catch((err) => console.error(err));
//     })
//     .catch((err) => console.error(err));
// });

// // Find all items 
// router.get("/items/findall/:artistId", (req, res) => {
//  Item.findAll({ where: { artistId: req.params.artistId } })
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => console.log(404));
// });

// // Get an item
// router.get("/items/getitem/:itemId", (req, res) => {
//  Item.findOne({ where: { id: req.params.itemId })
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => console.log(404));
// });


// // Add an  item- - Inprogress (Working on getting the image work)
// router.post("/items/addItem", async (req, res) => {
//   let id = req.rawHeaders.findIndex((item) => item === "Cookie");
//   id = req.rawHeaders[id + 1].split(/[\=;" "]/);

//   let temp;
//   let uuuid;
//   id.map((val, key) => {
//     if (val === "name") {
//       uuid = id[key + 1];
//     }
//     if (val === "io") {
//       temp = id[key + 1];
//     }
//   });
//   let check = false;
//   let postImage;
//   let path;
//   if (req.files) {
//     postImage = await req.files.postImage;

//     await postImage.mv(
//       `./public/assets/Image/+${temp}+` + postImage.name,
//       async (err) => {
//         if (err) {
//           console.log("Failed to upload");
//           console.log(err);
//         } else {
//           console.log("sucess to upload");
//         }
//       }
//     );
//     check = true;
//     path = `assets/Image/+${temp}+` + postImage.name;
//   }

//   path = check ? path : "#";
//   let body = { artistid: uuid, body: req.body.posttext, image: path };

//   Item.create(body)
//     .then((data) => {
//       data.dataValues = [];
//       // console.log(data.dataValues.comments = [])
//       // res.json(data)
//       Artist.findOne({where: { artistid: artistid }, attributes: ["name"]})
//         .then(({ name }) => {
//           res.json([{ data }, { name }]);
//         })
//         .catch((err) => console.error(err));
//     })
//     .catch((err) => console.error(err));
// });

// // Update item info - Inprogress (Working on getting the image work)
// router.put("/items/update/:artistId/:itemId", (req, res) => {
//   Item.update(req.body, { where: { id: req.params.postId } })
//     .then(() => res.sendStatus(200))
//     .catch((err) => console.error(err));
// });

// //delete an item
// router.delete("/items/delete/:artistId/:itemId", (req, res) => {
//   Item.destroy({
//     where: { id: req.params.itemId, artistId: req.params.artistId },
//   })
//     .then(() => res.sendStatus(200))
//     .catch((err) => console.error(err));
// });

// module.exports = router;
