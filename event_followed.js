// Set an interval
// We have to schedule some twitters
// We have to tell the bot where to grab the login credentials
//Create a variable to be able to call the function below
//Set up an interval that will allow us to see a tweet every single twenty seconds
// Add a user steam
// anytime someone follows me, let's do something cool!

console.log("This bot will start soon");

var Twit = require("twit");

var config = require("./config");
var T = new Twit(config);

var stream = T.stream("user");

stream.on("follow", followed);

function followed(eventMsg) {
  console.log("This is the follow event");
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetIt("@" + screenName + "Thank you so much for follow me!");
}

//tweetIt();
//setInterval(tweetIt, 1000 * 20);

function tweetIt(txt) {
  // var r = Math.random() * 100;
  var tweet = {
    status: txt,
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
