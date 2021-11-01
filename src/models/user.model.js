const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema(
    {
        userProPic: { type: String },
        userName: { type: String },
        userTitle: { type: String },
    },
    { timestamps: true }
);

let User = mongoose.model("user", userSchema);

module.exports = User;