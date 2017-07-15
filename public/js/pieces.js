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
var allRules = ["red", "blue", "green", "circle", "box", "star", "big", "small"];
shuffle(allRules);

checkRules();

// THis will check and make sure no 2 rules are from the same category
function checkRules() {
    if (allRules[1] === "red" || allRules[1] === "blue" || allRules[1] === "green") {
        var ruleColor1 = true;
    }
    if (allRules[1] === "circle" || allRules[1] === "box" || allRules[1] === "star") {
        var ruleShape1 = true;
    }
    if (allRules[1] === "big" || allRules[1] === "small") {
        var ruleSize1 = true;
    }   
    if (allRules[2] === "circle" || allRules[2] === "box" || allRules[2] === "star") {
        var ruleShape2 = true;
    }
    if (allRules[2] === "red" || allRules[2] === "blue" || allRules[2] === "green") {
        var ruleColor2 = true;
    }
    if (allRules[2] === "big" || allRules[2] === "small") {
        var ruleSize2 = true;
    } 
    if (ruleColor1 === true && ruleColor2 === true) {
        console.log("Cannot have both rules as colors");
        shuffle(allRules);
        checkRules();
    }
    if (ruleShape1 === true && ruleShape2 === true) {
        console.log("Cannot have both rules as shapes");
        shuffle(allRules);
        checkRules();
    }
    if (ruleSize1 === true && ruleSize2 === true) {
        console.log("Cannot have both rules as sizes");
        shuffle(allRules);
        checkRules();
    }
}


// This allows pieces to be draggable/droppable
$( function() {
    $("#category1").attr("data-rule", allRules[1]);
    $("#category2").attr("data-rule", allRules[2]);

    console.log("RULE 1 : " + $("#category1").attr("data-rule"));
    console.log("RULE 2 : " + $("#category2").attr("data-rule"));


    $(".piece").draggable();
    $("img").mouseup(function() {
        var itemShape = $(this).attr("data-shape");
        var itemColor = $(this).attr("data-color");
        var itemSize = $(this).attr("data-size");
        var alreadyPlaced = $(this).attr("data-spot");
        var id = this.id;
        var alreadyPlaced = $("#" + id).attr("data-placed");

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
                        if (right === 12) {
                            guessRules();
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
                        if (right === 12) {
                            guessRules();
                        }

                    } else {
                        wrong++;
                        $("#wrong").html(wrong);
                        console.log("Wrong");
                        // $("#" + id).draggable({ revert: "valid" });
                        $("#" + id).removeAttr("style");
                        $("#" + id).attr("style", "position: relative");
                    }
                }
            }
        });

        // This is just BOTH RULES objects
        $("#category3").droppable({
            drop: function() {
                var rule1 = $("#category1").attr("data-rule");
                var rule2 = $("#category2").attr("data-rule");

                if (alreadyPlaced === "false") {

                    if (rule1 === itemShape || rule1 === itemColor || rule1 === itemSize) {
                        gotboth = gotboth + 1;
                    } else {
                        gotboth = 0;
                    }
                        
                    if (rule2 === itemShape || rule2 === itemColor || rule2 === itemSize) {
                        gotboth = gotboth + 1;
                    } else {
                        gotboth = 0;
                    }

                    if (gotboth === 2) {
                        gotboth = 0;
                        alreadyPlaced = "true";
                        $("#" + id).attr("data-placed", "true");
                        console.log("Correct");
                        right++;
                        $("#right").html(right);
                        if (right === 12) {
                            guessRules();
                        }
                    } else {
                        gotboth = 0;
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

                if (alreadyPlaced === "false") {

                    if (rule1 != itemShape && rule1 != itemColor && rule1 != itemSize && rule2 != itemShape && rule2 != itemColor && rule2 != itemSize) {
                        alreadyPlaced = "true";
                        $("#" + id).attr("data-placed", "true");
                        console.log("Correct");
                        right++;
                        $("#right").html(right);
                        if (right === 12) {
                            guessRules();
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

function guessRules() {
    alert("All pieces placed");
    $("#rule1guess").fadeIn("slow");
    $("#rule2guess").fadeIn("slow");
}