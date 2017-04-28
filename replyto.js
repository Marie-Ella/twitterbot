// trigger event
function tweetEvent(tweet) {
  //get their twitter handle
  var from = tweet.source.screen_name;
    name = tweet.source.name;
    screenName = tweet.source.screen_name;
  // function that replies back to the user who tweeted
  if (from === 'Number10gov') {
  T.post('statuses/update', { status: '@Number10gov' + ' Meanwhile EU immigrants have made a net contribution of ' + amount + ' in 2017 alone.'}, tweeted);
}
}
