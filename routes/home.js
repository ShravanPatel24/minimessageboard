var express = require("express");
var router = express.Router();
const messages = [
  {
    text: "Hello",
    user: "John",
    added: new Date().toDateString(),
  },
  {
    text: "Hello",
    user: "Rahul",
    added: new Date().toDateString(),
  },
  {
    text: "Hello",
    user: "Pradeep",
    added: new Date().toDateString(),
  },
  {
    text: "Hello",
    user: "Shravan",
    added: new Date().toDateString(),
  },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home", { title: "Mini MessageBoard", messages: messages });
});
router.get("/index", function (req, res, next) {
  res.render("index", { title: "Mini MessageBoard", messages: messages });
});
router.get("/new", function (req, res) {
  res.render("form", { title: "NewMessage" });
});
router.post("/new", function (req, res) {
  let user = req.body.user;
  let message = req.body.message;
  messages.push({ text: message, user: user, added: new Date().toDateString() });
  res.redirect("/index");
});

module.exports = router;
