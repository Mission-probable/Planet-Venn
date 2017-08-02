let moves = 0;
var itemShape = "";
var itemColor = "";
var itemSize = "";
var id = 0;
var alreadyPlaced = "";
var currentUserEmail = "";

function getUserEmail() {
    currentUserEmail = $("#userEmail").val();
}

// This shuffles and picks 2 rules to use to play
function shuffle(a) {
	var j, x, i;
	for (i = a.length; i; i--) {
	    j = Math.floor(Math.random() * i);
	    x = a[i - 1];
	    a[i - 1] = a[j];
	    a[j] = x;
	}	
}
var allRules = ["red", "blue", "green", "satellite", "alien", "sun", "big", "small"];
shuffle(allRules);
checkRules();

// This checks to make sure no 2 rules are the same type (ie, both cannot be colors)
function checkRules() {
    if (allRules[1] === "red" || allRules[1] === "blue" || allRules[1] === "green") {
        if (allRules[2] != "red" && allRules[2] != "blue" && allRules[2] != "green") {
            return;
        } else {
            shuffle(allRules);
            checkRules();
        }
    }

    if (allRules[1] === "satellite" || allRules[1] === "alien" || allRules[1] === "sun") {
        if (allRules[2] != "satellite" && allRules[2] != "alien" && allRules[2] != "sun") {
            return;
        } else {
            shuffle(allRules);
            checkRules();
        }
    }

    if (allRules[1] === "big" || allRules[1] === "small") {
        if (allRules[2] != "big" && allRules[2] != "small") {
            return;
        } else {
            shuffle(allRules);
            checkRules();
        }
    }
}

function startGame() {

    // This allows pieces to be draggable/droppable
    $(function() {
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("FINAL - RULE 1 is " + allRules[1]);
        console.log("FINAL - RULE 2 is " + allRules[2]);

        $("#category1").attr("data-rule", allRules[1]);
        $("#category2").attr("data-rule", allRules[2]);

        rule1 = $("#category1").attr("data-rule");
        rule2 = $("#category2").attr("data-rule");
        state = $(this).attr("data-placed");

        $(".piece").draggable();
        $(".piece").mousedown(function() {
            var dontduplicate = 0;
            itemShape = $(this).attr("data-shape");
            itemColor = $(this).attr("data-color");
            itemSize = $(this).attr("data-size");
            id = this.id;
            alreadyPlaced = $("#" + id).attr("data-placed");

            // This is just for RULE 1 AND RULE 2 objects
            $("#category3").droppable({
                drop: function() {
                    if (alreadyPlaced === "false") {
                        if (rule1 === itemShape || rule1 === itemColor || rule1 === itemSize) {
                            if (rule2 === itemShape || rule2 === itemColor || rule2 === itemSize) {
                                alreadyPlaced = "true";
                                $("#" + id).attr("data-placed", "true");
                                animate();
                            } else {
                                $("#" + id).removeAttr("style");
                                $("#" + id).attr("style", "position: relative");
                            }
                        } else {
                                $("#" + id).removeAttr("style");
                                $("#" + id).attr("style", "position: relative");
                        }
                        moves++;
                        $("#moves").html(moves);
                        dontduplicate = 1;
                    }
                }
            });

            // This is just for RULE 1 objects
            $("#category1").droppable({
                drop: function() {
                    if (alreadyPlaced === "false" && dontduplicate === 0) {
                        if (rule2 === itemShape || rule2 === itemColor || rule2 === itemSize) {
                            $("#" + id).removeAttr("style");
                            $("#" + id).attr("style", "position: relative");
                        } else if (rule1 === itemShape || rule1 === itemColor || rule1 === itemSize) {
                            alreadyPlaced = "true";
                            $("#" + id).attr("data-placed", "true");
                            animate();
                        } else {
                            $("#" + id).removeAttr("style");
                            $("#" + id).attr("style", "position: relative");
                        }
                        moves++;
                        $("#moves").html(moves);
                    }
                }
            });
        
            // This is just for RULE 2 objects
            $("#category2").droppable({
                drop: function() {
                    if (alreadyPlaced === "false" && dontduplicate === 0) {
                        if (rule1 === itemShape || rule1 === itemColor || rule1 === itemSize) {
                            $("#" + id).removeAttr("style");
                            $("#" + id).attr("style", "position: relative");
                        } else if (rule2 === itemShape || rule2 === itemColor || rule2 === itemSize) {
                            alreadyPlaced = "true";
                            $("#" + id).attr("data-placed", "true");
                            animate();
                        } else {
                            $("#" + id).removeAttr("style");
                            $("#" + id).attr("style", "position: relative");
                        }
                        moves++;
                        $("#moves").html(moves);
                    }
                }
            });

            // This is just for objects that don't go into either category
            $("#category4").droppable({
                drop: function() {
                    if (alreadyPlaced === "false" && dontduplicate === 0) {
                        if (rule1 != itemShape && rule1 != itemColor && rule1 != itemSize && rule2 != itemShape && rule2 != itemColor && rule2 != itemSize) {
                            // $("#" + id).position( { of: $(this), my: 'center', at: 'center' } );
                            alreadyPlaced = "true";
                            $("#" + id).addClass("rotate blackhole");
                            $("#" + id).attr("data-placed", "true");
                            animate();
                        } else {
                            $("#" + id).removeAttr("style");
                            $("#" + id).attr("style", "position: relative");
                        }
                        moves++;
                        $("#moves").html(moves);
                    }
                }
            });
        });
    });
}

function animate() {
    if (itemShape === "alien" && alreadyPlaced === "true") {
        $("#" + id).attr("src", "./images/alien.gif");
    } else if (itemShape === "satellite" && alreadyPlaced === "true") {
        $("#" + id).attr("src", "./images/sat.gif");
    } else if (itemShape === "sun" && alreadyPlaced === "true") {
        $("#" + id).attr("src", "./images/sun.gif");
    }
}

function stopAnimate() {
    for (var i = 0; i < 12; i++) {
        var shape = $("." + i).attr("data-shape");
        
        if (shape === "alien") {
            $("." + i).attr("src", "./images/alien_still.gif");
        } else if (shape === "satellite") {
            $("." + i).attr("src", "./images/sat_still.gif");
        } else if (shape === "sun") {
            $("." + i).attr("src", "./images/sun_still.gif");
        }
        $("#" + i).attr("data-placed", "false");
    }
}

function ruleGuess() {
    var rule1 = $("#category1").attr("data-rule");
    var rule2 = $("#category2").attr("data-rule");
    var rule1guess = $("#rule1guess").text().toLowerCase();
    var rule2guess = $("#rule2guess").text().toLowerCase();

    if (rule1 === rule1guess && rule2 === rule2guess) {
        var score = $("#moves").html();
        $(".blackhole").addClass("rotateAway");

         $.ajax({
            method: "POST",
            url: "/api/save/" + currentUserEmail,
            data: {
                score: score
            }
        });
        return true;
    } else {
        moves++;
        $("#moves").html(moves);
        return false;
    }
}

function getScores() {
    $.ajax({
        method: "GET",
        url: "/api/saved/" + currentUserEmail
    }).done(function(data) {
        console.log("pieces 225 get scores data: ", data.scores);
          for (var i = 0; i < data.scores.length; i++) {
            $("#myScores").append(`<p>Date: ${data.scores[i].date} </p>`);
        }
        for (var i = 0; i < data.scores.length; i++) {
            $("#myScores").append(`<p>score: ${data.scores[i].score} </p>`);
        }

    });
}

function resetPieces() {
    // This returns it to it's original position
    $(".piece").removeAttr("style");
    $(".piece").removeClass("rotateAway rotate blackhole");
    stopAnimate();
    // This enables it to be picked up and moved around again
    $(".piece").attr("style", "position: relative");
    $(".piece").attr("data-placed", "false");
    moves = 0;
    $("#moves").html(moves);
}

//  This resets all pieces to it's original position
$(document).on("click", "#resetPieces", function() {
    event.preventDefault();
    resetPieces();
});

function playAgain() {
    resetPieces();
    shuffle(allRules);
    checkRules();
    startGame();
};

// For the shine.js
function makeItShine() {
    var shine = new Shine(document.getElementById('homepagelogo'));

    var config = new shinejs.Config({
        numSteps: 10,
        opacity: 1,
        offsetPow: 2,
        shadowRGB: new shinejs.Color(1, 62, 107)
    });

    window.addEventListener('mousemove', function(event) {
        shine.light.position.x = event.clientX;
        shine.light.position.y = event.clientY;
        shine.config = config;
        shine.draw();
    }, false);
}



