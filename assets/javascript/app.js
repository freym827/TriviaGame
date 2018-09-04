var timer = $(".timer");
//setting variables for all questions
var questionbox = $(".questionbox");
var question1 = $(".question1");
var question2 = $(".question2");
var question3 = $(".question3");
var question4 = $(".question4");
var question5 = $(".question5");
var question6 = $(".question6");
var question7 = $(".question7");
var question8 = $(".question8");
var question9 = $(".question9");
var question10 = $(".question10");
var question11 = $(".question11");
var btn = $(".btn");
//setting variables to handle responses 
var midbox = $(".midbox");
var yepnope = $(".yepnope");
var result = $(".result");
var midimage = $(".midimage");
//current question and counting right and wrong answers
var questionnumber = 1;
var rightanswers = 0;
var wronganswers = 0;
//clocks created so they can be stopped
var timeout = function() {};
var midtime = function() {};

//starting game and handling if timer goes to 0
var clockstart = function() {
    var seconds = 30;
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
//when time runs out
var runout = function() {
    wronganswers++;
    questionbox.css("display", "none");
    var yntext = "OUT OF TIME!"
    var correct = false;
    midboxsetup(correct, yntext);
}
//when all questions are done
var endgame = function() {
    $(".endbox").css("display", "block");
    $(".correctans").text("Correct Answers: " + rightanswers);
    $(".wrongans").text("Wrong Answers: " + wronganswers);
    $(".endbutton").css("display", "block");
    rightanswers = 0;
    wronganswers = 0;
    questionnumber = 1;
}

//gifs and text for when each question has been answered, plus formatting for gif.
//then moving on to the next question after about 6 seconds automatically
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
    if(questionnumber === 6) {
        var resulttext = "The doctor be a good man and thorough";
        var img = "assets/images/maude.gif";
        var imgw = 455;
        var imgh = 250; 
    }
    if(questionnumber === 7) {
        var resulttext = "All of the above";
        var img = "assets/images/shabbos.gif";
        var imgw = 498;
        var imgh = 273; 
    }
    if(questionnumber === 8) {
        var resulttext = "Vietnam War";
        var img = "assets/images/vietnam.gif";
        var imgw = 337;
        var imgh = 200; 
    }
    if(questionnumber === 9) {
        var resulttext = "Sprinkled in the Pacific Ocean";
        var img = "assets/images/donny.gif";
        var imgw = 500;
        var imgh = 268; 
    }
    if(questionnumber === 10) {
        var resulttext = "There are rules in bowling";
        var img = "assets/images/overtheline.gif";
        var imgw = 500;
        var imgh = 270; 
    }
    if(questionnumber === 11) {
        var resulttext = "That creep can roll, man";
        var img = "assets/images/thejesus.gif";
        var imgw = 450;
        var imgh = 299; 
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
        if(questionnumber < 12) {
        clockstart();
        displayquestion();
        } else {
            endgame();
        }
        }, 6100);
}
//displaying the current question
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
    } else if(questionnumber === 6) {
        question6.css("display", "block");
    } else if(questionnumber === 7) {
        question7.css("display", "block");
    } else if(questionnumber === 8) {
        question8.css("display", "block");
    } else if(questionnumber === 9) {
        question9.css("display", "block");
    } else if(questionnumber === 10) {
        question10.css("display", "block");
    } else if(questionnumber === 11) {
        question11.css("display", "block");
    }
}

//start button
btn.on("click", function() {
    $(".endbox").css("display", "none");
    btn.css("display", "none");
    timer.css("display", "block");
    displayquestion();
    clockstart();
});
//when wrong answer is clicked
$(".answerwrong").on("click", function() {
    clockstop(timeout);
    wronganswers++;
    var yntext = "Wrong Answer!"
    var correct = false;
    midboxsetup(correct, yntext);
});
//when right answer is clicked
$(".answerright").on("click", function() {
    clockstop(timeout);
    rightanswers++;
    var yntext = "Correct!"
    var correct = true;
    midboxsetup(correct, yntext);
});