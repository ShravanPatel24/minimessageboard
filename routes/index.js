var express = require("express");
var router = express.Router();
const messages = [
  {
    text: "hi dear",
    user: "John",
    added: new Date(),
  },
  {
    text: "hi",
    user: "Rahul",
    added: new Date(),
  },
  {
    text: "hi dear",
    user: "Pradeep",
    added: new Date(),
  },
  {
    text: "hello",
    user: "Shravan",
    added: new Date(),
  },
];
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});
router.get("/new", function (req, res) {
  res.render("form", { title: "NewMessage" });
});
router.post("/new", function (req, res) {
  let user = req.body.user;
  let message = req.body.message;
  messages.push({ text: message, user: user, added: new Date() });
  res.redirect("/");
});

module.exports = router;
