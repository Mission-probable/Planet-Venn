const helpers = {
    
    userScores: function() {
        var userId = "";

        $.ajax({
            method: "GET",
            url: "/saved/" + userId,
        }).done(function(data) {
            console.log("user scores data: ", data);
        })
    },
    topScores: function() {
        $.ajax({
            method: "GET",
            url: "/scores"
        }).done(function(data) {
            console.log("top 5 data: ", data);
        })
    }
};

export default helpers;
