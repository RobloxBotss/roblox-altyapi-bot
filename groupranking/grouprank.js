/*INSERT GROUP ID USERNAME AND, PASSWORD BELOW*/

var groupId = 123456; // << Replace 123456 with your Group Id
var username = "username"; // << Put your account username inside of the quotes
var password = "password"; // << Put your account password insude of the quotes
var captcha = false; // << Put your account login with captcha system requirement

/*COOKIE ONLY*/

var cookie = ""; // << Put your account cookie inside of the quotes

/*INSERT GROUP ID AND PASSWORD ABOVE*/

const express = require("express");
const rbx = require("noblox.js");
const app = express();

app.use(express.static("public"));

async function startApp() {
  await rbx.setUsername(username);
  await rbx.setPassword(password);
  await rbx.setCookie(cookie);
  let currentUser = await rbx.getCurrentUser();
  console.log(currentUser.UserName);
}
startApp();

app.get("/ranker", (req, res) => {
  var User = req.param("userid");
  var Rank = req.param("rank");

  rbx.setRank(groupId, parseInt(User), parseInt(Rank));
  res.json("Ranked!");
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
