// Set an interval
// We have to schedule some twitters
// We have to tell the bot where to grab the login credentials
//Create a variable to be able to call the function below
//Set up an interval that will allow us to see a tweet every single twenty seconds

var Twit = require("twit");

var config = require("./config");
var T = new Twit(config);

tweetIt();
setInterval(tweetIt, 1000 * 20);

function tweetIt() {
  var r = Math.random() * 100;
  var tweet = {
    status: "Trying new things with twitter" + r + "Every 20 seconds",
  };

  T.post("statuses/update", tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Something is wrong");
    } else {
      console.log("It worked");
    }
  }
}
