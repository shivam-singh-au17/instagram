
const { MongoClient } = require("mongodb");

const Db = "mongodb+srv://Shivammz20:Shivam@mz20@cluster0.fhq73.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            if (db) {
                _db = db.db("myFirstDatabase");
                console.log("Successfully connected to MongoDB.");
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
};


