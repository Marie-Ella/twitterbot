console.log('The bot is starting.');

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

//counter
var amount = formatMoney(amount);
var startDate = new Date(2017, 0, 01);
var currentDate = new Date();
var seconds = (currentDate - startDate) / 1000;
var modifier = seconds * .7029024;
var current = modifier;
update();
function update() {
    amount = formatMoney(current);
}
setInterval(function(){
    current += .7029024;
    update();
},1000);
function formatMoney(amount) {
    var pounds = Math.floor(amount).toString().split('');
    var cents = (Math.round((amount%1)*100)/100).toString().split('.')[1];
    if(typeof cents == 'undefined'){
        cents = '00';
    }else if(cents.length == 1){
        cents = cents + '0';
    }
    var str = '';
    for (i=pounds.length-1; i>=0; i--) {
        str += pounds.splice(0,1);
        if(i%3 == 0 && i != 0) {
            str += ",";
        }
    }
    return '£' + str + '.' + cents;
}

// random
  var sentences = [

  'EEA immigrants have contributed ' + amount + ' to the UK’s economy so far in 2017.',

  'Just in 2017 EEA immigrants have contributed ' + amount + ' to the UK’s economy.',

  'In 2017 EEA immigrants have made an estimated net contribution of ' + amount + ' to the UK’s economy.',

  'So far in 2017 EEA immigrants have contributed about ' + amount + ' to the United Kingdom’s economy.',

  '“Between 2001 and 2011 recent EEA immigrants contributed to the fiscal system 34% more than they took out, with a net fiscal contribution of about 22.1 billion GBP,” study says.',

  'Figures show that for every £1 EEA immigrants get in benefits in the UK they pay £1.34 into the the system.',

  'Study says: “Rather than being a drain on the UK’s fiscal system, immigrants arriving since the early 2000s have made substantial net contributions to its public finances”',

  'The net contribution of EEA immigrants to the UK in 2017 so far amounts to ' + amount + ' .',

  'EEA immigrants have made a net contribution of about ' + amount + ' in 2017 alone.',

  'The net contribution made by EEA immigrants to the UK’s economy comes to about ' + amount + ' so far for this year.'

    ],
    maxSentences = sentences.length;

    function getRandomSentence() {
        var index = Math.floor(Math.random() * (maxSentences - 1));
        return sentences[index];
    }

//  tweets
//
T.post('statuses/update', { status: getRandomSentence()}, tweeted);

function tweeted (err, data, response) {
if (err) {
 console.log(err);
}
else {
 console.log("It works.");
 }
}
