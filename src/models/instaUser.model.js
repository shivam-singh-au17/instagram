const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let instaUserSchema = new Schema(
    {
        uid: String,
        token: String,
        email: String,
        name: String,
        gender: String,
        pic: String
    }
);

let InstaUser = mongoose.model("instaUser", instaUserSchema);

module.exports = InstaUser;

