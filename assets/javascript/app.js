var timer = $(".timer");
var questionbox = $(".questionbox");
var question1 = $(".question1");
var question2 = $(".question2");
var question3 = $(".question3");
var question4 = $(".question4");
var question5 = $(".question5");
var btn = $(".btn");
var midbox = $(".midbox");
var yepnope = $(".yepnope");
var result = $(".result");
var midimage = $(".midimage");

var questionnumber = 1;
var rightanswers = 0;
var wronganswers = 0;

var timeout = function() {};
var midtime = function() {};

var clockstart = function() {
    var seconds = 10;
    timer.text("Time Remaining: " + seconds + " Seconds")
    timeout = setInterval(function(){ 
        seconds--; 
        timer.text("Time Remaining: " + seconds + " Seconds")
        if(seconds === 0) {
            clockstop(timeout);
            runout();
        }
        }, 1000);
}

var clockstop = function(whichclock) {
    clearInterval(whichclock);
}

var runout = function() {
    wronganswers++;
    questionbox.css("display", "none");
    var yntext = "OUT OF TIME!"
    var correct = false;
    midboxsetup(correct, yntext);
}

var endgame = function() {
    $(".endbox").css("display", "block");
    $(".correctans").text("Correct Answers: " + rightanswers);
    $(".wrongans").text("Wrong Answers: " + wronganswers);
    $(".endbutton").css("display", "block");
    rightanswers = 0;
    wronganswers = 0;
    questionnumber = 1;
}

var midboxsetup = function(correct, yntext) {
    questionbox.css("display", "none");
    if(questionnumber === 1) {
        var resulttext = "Mixing With Vodka and Kahlua";
        var img = "assets/images/whiterussian.gif";
        var imgw = 250;
        var imgh = 300;
    }
    if(questionnumber === 2) {
        var resulttext = "The Eagles";
        var img = "assets/images/opinion.gif";
        var imgw = 300;
        var imgh = 220;
    }
    if(questionnumber === 3) {
        var resulttext = "If you're not into the whole brevity thing";
        var img = "assets/images/dancingdude.gif";
        var imgw = 400;
        var imgh = 200;
    }
    if(questionnumber === 4) {
        var resulttext = "... it is no dream";
        var img = "assets/images/walter.gif";
        var imgw = 200;
        var imgh = 300; 
    }
    if(questionnumber === 5) {
        var resulttext = "At least National Socialism is an ethos";
        var img = "assets/images/nihilists.gif";
        var imgw = 600;
        var imgh = 300; 
    }
    questionnumber++;
    if(correct) {
        resulttext = "";
    } else {
        resulttext = "The correct answer was: " + resulttext;
    }
    yepnope.text(yntext);
    result.text(resulttext);
    midimage.attr("src", img);
    midimage.width(imgw);
    midimage.height(imgh);
    midbox.css("display", "block");
    
    midtime = setInterval(function(){ 
        clockstop(midtime);
        midbox.css("display", "none");
        if(questionnumber < 6) {
        clockstart();
        displayquestion();
        } else {
            endgame();
        }
        }, 6100);
}

var displayquestion = function() {
    if(questionnumber === 1) {
        question1.css("display", "block");
    } else if(questionnumber === 2) {
        question2.css("display", "block");
    } else if(questionnumber === 3) {
        question3.css("display", "block");
    } else if(questionnumber === 4) {
        question4.css("display", "block");
    } else if(questionnumber === 5) {
        question5.css("display", "block");
    }
}

btn.on("click", function() {
    btn.css("display", "none");
    timer.css("display", "block");
    displayquestion();
    clockstart();
});

$(".answerwrong").on("click", function() {
    clockstop(timeout);
    wronganswers++;
    var yntext = "Wrong Answer!"
    var correct = false;
    midboxsetup(correct, yntext);
});

$(".answerright").on("click", function() {
    clockstop(timeout);
    rightanswers++;
    var yntext = "Correct!"
    var correct = true;
    midboxsetup(correct, yntext);
});