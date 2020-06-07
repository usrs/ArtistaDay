const { join } = require("path");
const router = require("express").Router();

let isLogin = false;

router.get("/", (req, res) => {
  // if(!isLogin)
  res.sendFile(join(__dirname, "../public/home.html"));
  // else
  // res.sendFile(join(__dirname, "../public/profile.html"));
});

router.get("/event", (req, res) => {
  res.sendFile(join(__dirname, "../public/event.html"));
});

router.get("/product", (req, res) => {
  res.sendFile(join(__dirname, "../public/product.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(join(__dirname, "../public/login.html"));
});


router.get("/dashboard", (req, res) => {
  console.log(req.body);
  if (isLogin === true) {
    res.sendFile(join(__dirname, "../public/dashboard.html"));
  } else {
    res.sendFile(join(__dirname, "../public/login.html"));
  }
});

module.exports = router;
