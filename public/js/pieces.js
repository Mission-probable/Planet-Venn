let right = 0;
let wrong = 0;
var gotboth = 0;
var only = 0;

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
var allRules = ["red", "blue", "green", "sat", "alien", "sun", "big", "small"];
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

    if (allRules[1] === "sat" || allRules[1] === "alien" || allRules[1] === "sun") {
        if (allRules[2] != "sat" && allRules[2] != "alien" && allRules[2] != "sun") {
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

// This allows pieces to be draggable/droppable
$(function() {
    console.log("FINAL - RULE 1 is " + allRules[1]);
    console.log("FINAL - RULE 2 is " + allRules[2]);

    $("#category1").attr("data-rule", allRules[1]);
    $("#category2").attr("data-rule", allRules[2]);

    $("img").draggable();
    $("img").mousedown(function() {
        var itemShape = $(this).attr("data-shape");
        var itemColor = $(this).attr("data-color");
        var itemSize = $(this).attr("data-size");
        var id = this.id;
        var alreadyPlaced = $("#" + id).attr("data-placed");
        console.log(alreadyPlaced);

        // This is just for RULE 1 objects
        $("#category1").droppable({
            drop: function() {
                var rule1 = $("#category1").attr("data-rule");
                var rule2 = $("#category2").attr("data-rule");

                if (alreadyPlaced === "false") {
                    
                    if (rule2 === itemShape || rule2 === itemColor || rule2 === itemSize) {
                        wrong++;
                        $("#wrong").html(wrong);
                        console.log("Wrong");
                        $("#" + id).removeAttr("style");
                        $("#" + id).attr("style", "position: relative");
                    } else if (rule1 === itemShape || rule1 === itemColor || rule1 === itemSize) {
                        alreadyPlaced = "true";
                        $("#" + id).attr("data-placed", "true");
                        console.log("Correct");
                        right++;
                        $("#right").html(right);
                    } else {
                        wrong++;
                        $("#wrong").html(wrong);
                        console.log("Wrong");
                        $("#" + id).removeAttr("style");
                        $("#" + id).attr("style", "position: relative");
                    }
                }
            }
        });
    
        // This is just for RULE 2 objects
        $("#category2").droppable({
            drop: function() {
                var rule1 = $("#category1").attr("data-rule");
                var rule2 = $("#category2").attr("data-rule");

                if (alreadyPlaced === "false") {

                    if (rule1 === itemShape || rule1 === itemColor || rule1 === itemSize) {
                        wrong++;
                        $("#wrong").html(wrong);
                        console.log("Wrong");
                        $("#" + id).removeAttr("style");
                        $("#" + id).attr("style", "position: relative");
                    } else if (rule2 === itemShape || rule2 === itemColor || rule2 === itemSize) {
                        alreadyPlaced = "true";
                        $("#" + id).attr("data-placed", "true");
                        console.log("Correct");
                        right++;
                        $("#right").html(right);
                    } else {
                        wrong++;
                        $("#wrong").html(wrong);
                        console.log("Wrong");
                        $("#" + id).removeAttr("style");
                        $("#" + id).attr("style", "position: relative");
                    }
                }
            }
        });

        // This is just for RULE 1 AND RULE 2 objects
        $("#category3").droppable({
            drop: function() {
                if (alreadyPlaced === "false") {
                    var rule1 = $("#category1").attr("data-rule");
                    var rule2 = $("#category2").attr("data-rule");

                    if (rule1 === itemShape || rule1 === itemColor || rule1 === itemSize) {
                        if (rule2 === itemShape || rule2 === itemColor || rule2 === itemSize) {
                            alreadyPlaced = "true";
                            $("#" + id).attr("data-placed", "true");
                            console.log("Correct");
                            right++;
                            $("#right").html(right);
                        } else {
                            wrong++;
                            $("#wrong").html(wrong);
                            console.log("Wrong");
                            $("#" + id).removeAttr("style");
                            $("#" + id).attr("style", "position: relative");
                        }
                    } else {
                            wrong++;
                            $("#wrong").html(wrong);
                            console.log("Wrong");
                            $("#" + id).removeAttr("style");
                            $("#" + id).attr("style", "position: relative");
                    }
                }
            }
        });

        // This is just for objects that don't go into either category
        $("#category4").droppable({
            drop: function() {
                var rule1 = $("#category1").attr("data-rule");
                var rule2 = $("#category2").attr("data-rule");

                if (rule1 != itemShape && rule1 != itemColor && rule1 != itemSize && rule2 != itemShape && rule2 != itemColor && rule2 != itemSize) {
                    alreadyPlaced = "true";
                    $("#" + id).attr("data-placed", "true");
                    console.log("Correct");
                    right++;
                    $("#right").html(right);
                } else {
                    wrong++;
                    $("#wrong").html(wrong);
                    console.log("Wrong");
                    $("#" + id).removeAttr("style");
                    $("#" + id).attr("style", "position: relative");
                }
            }
        });
    });
});

//  This resets all pieces to it's original position
$(document).on("click", "#resetPieces", function() {
    event.preventDefault();
    // This returns it to it's original position
    $(".piece").removeAttr("style");
    // This enables it to be picked up and moved around again
    $(".piece").attr("style", "position: relative");
    right = 0;
    wrong = 0;
    $("#wrong").html(wrong);
    $("#right").html(right);
});

$(document).on("click", "#guesstherules", function() {
    event.preventDefault();
    
    var rule1 = $("#category1").attr("data-rule");
    var rule2 = $("#category2").attr("data-rule");
    var rule1guess = $("#rule1guess").val();
    var rule2guess = $("#rule2guess").val();

    if (rule1 === rule1guess && rule2 === rule2guess) {
        alert("CONGRADULATIONS, YOU HAVE GUESSED CORRECTLY!!!");
    } else {
        alert("Sorry, but you are not correct");
    }
    
});

// function guessRules() {
//     alert("All pieces placed");
//     $("#rule1guess").fadeIn("slow");
//     $("#rule2guess").fadeIn("slow");
// }