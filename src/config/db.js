require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);


// const db = process.env.DB_URL
const db = "mongodb+srv://Shivammz20:Shivam@mz20@cluster0.fhq73.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connect = () => {

    return mongoose.connect(db, {
        keepAlive: 1,
        connectTimeoutMS: 30000,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err) => {

        if (err) {
            console.log("ERROR", err);
        }

    });
}


module.exports = connect;



