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


// This allows pieces to be draggable/droppable
$( function() {
    $("#category1").attr("data-rule", allRules[1]);
    $("#category2").attr("data-rule", allRules[2]);

    console.log($("#category1").attr("data-rule"));
    console.log($("#category2").attr("data-rule"));


    $(".piece").draggable();
    $("img").mouseup(function() {
        var itemShape = $(this).attr("data-shape");
        var itemColor = $(this).attr("data-color");
        var itemSize = $(this).attr("data-size");
        var alreadyPlaced = $(this).attr("data-spot");
        var id = this.id;
        var alreadyPlaced = $("#" + id).attr("data-placed");

        // This is just for BLUE objects
        $("#category1").droppable({
            drop: function() {
                var rule1 = $("#category1").attr("data-rule");
                var rule2 = $("#category2").attr("data-rule");

                if (alreadyPlaced === "false") {
                    
                    if (rule2 === itemShape || rule2 === itemColor || rule2 === itemSize) {
                        wrong++;
                        $("#wrong").html(wrong);
                        console.log("Wrong");
                        // $("#" + id).draggable({ revert: "valid" });
                        $("#" + id).removeAttr("style");
                        $("#" + id).attr("style", "position: relative");
                    } else if (rule1 === itemShape || rule1 === itemColor || rule1 === itemSize) {
                        alreadyPlaced = "true";
                        $("#" + id).attr("data-placed", "true");
                        console.log("Correct");
                        right++;
                        $("#right").html(right);
                        // $("#" + id).draggable("disable");
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
    
        // This is just for MOON objects
        $("#category2").droppable({
            drop: function() {
                var rule1 = $("#category1").attr("data-rule");
                var rule2 = $("#category2").attr("data-rule");

                if (alreadyPlaced === "false") {

                    if (rule1 === itemShape || rule1 === itemColor || rule1 === itemSize) {
                        wrong++;
                        $("#wrong").html(wrong);
                        console.log("Wrong");
                        // $("#" + id).draggable({ revert: "valid" });
                        $("#" + id).removeAttr("style");
                        $("#" + id).attr("style", "position: relative");
                    } else if (rule2 === itemShape || rule2 === itemColor || rule2 === itemSize) {
                        alreadyPlaced = "true";
                        $("#" + id).attr("data-placed", "true");
                        console.log("Correct");
                        right++;
                        $("#right").html(right);
                        // $("#" + id).draggable("disable");
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

        // This is just for BLUE & MOON objects
        $("#category3").droppable({
            drop: function() {
                var rule1 = $("#category1").attr("data-rule");
                var rule2 = $("#category2").attr("data-rule");

                console.log("Rule 1 is " + rule1);
                console.log("Rule 2 is " + rule2);
                console.log("Item Shape is " + itemShape);
                console.log("Item Color is " + itemColor);
                console.log("Item Size is " + itemSize);

                if (rule1 === itemShape || rule1 === itemColor || rule1 === itemSize && alreadyPlaced === "false") {
                    gotboth = gotboth + 1;
                    console.log("Gotboth is " + gotboth);
                } else {
                    gotboth = 0;
                    console.log("Gotboth is " + gotboth);
                }
                    
                if (rule2 === itemShape || rule2 === itemColor || rule2 === itemSize && alreadyPlaced === "false") {
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
                    // $("#" + id).draggable("disable");
                    if (right === 12) {
                        guessRules();
                    }
                } else {
                    gotboth = 0;
                    wrong++;
                    $("#wrong").html(wrong);
                    console.log("Wrong");
                    // $("#" + id).draggable({ revert: "valid" });
                    $("#" + id).removeAttr("style");
                    $("#" + id).attr("style", "position: relative");
                }        
            }
        });

        // This is just for objects that don't go into either category
        $("#category4").droppable({
            drop: function() {
                var rule1 = $("#category1").attr("data-rule");
                var rule2 = $("#category2").attr("data-rule");
                
                console.log("Rule 1 is " + rule1);
                console.log("Rule 2 is " + rule2);
                console.log("Item Shape is " + itemShape);
                console.log("Item Color is " + itemColor);
                console.log("Item Size is " + itemSize);

                if (rule1 != itemShape && rule1 != itemColor && rule1 != itemSize && rule2 != itemShape && rule2 != itemColor && rule2 != itemSize) {
                    alreadyPlaced = "true";
                    $("#" + id).attr("data-placed", "true");
                    console.log("Correct");
                    right++;
                    $("#right").html(right);
                    // $("#" + id).draggable("disable");
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