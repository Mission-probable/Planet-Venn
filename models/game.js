
// dependency
var mongoose = require("mongoose");

//creates Schema class
var Schema = mongoose.Schema;

// create Game schema
var GameSchema = new Schema ({
    title: {
        type: String,
        index: { unique: true }
    }
});

// creates Game model
var Game = mongoose.model("Game", GameSchema);

// exports Game model
module.exports = Game;
