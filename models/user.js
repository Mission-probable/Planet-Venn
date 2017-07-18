
// dependency
var mongoose = require("mongoose");

//creates Schema class
var Schema = mongoose.Schema;

// create User schema
var UserSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        index: { unique: true },
        required: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    bestScore: {
        type: Number,

    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive"
    }
});

// creates User model
var User = mongoose.model("User", UserSchema);

// exports User model
module.exports = User;
