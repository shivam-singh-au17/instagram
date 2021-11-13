const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let loginSchema = new Schema(
    {
        userUserName: { type: String },
        userPassword: { type: String },
    },
    { timestamps: true }
);

let Login = mongoose.model("loginData", loginSchema);

module.exports = Login;
