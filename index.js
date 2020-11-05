//console.log('The both will start soon')

var Twit = require("twit");

var config = require("./config");
var T = new Twit(config);

var tweet = {
  status: "#codingrainbow from index.js",
};

T.post("statuses/update", tweet, tweeted);

function tweeted(err, data, response) {
  if (err) {
    console.log("Something is wrong");
  } else {
    console.log("It worked");
  }
}
