const express = require("express");

const blogsdataRoutes = express.Router();

const dbo = require("../config/db");

const ObjectId = require("mongodb").ObjectId;


blogsdataRoutes.route("/user").get(function (req, res) {
    let db_connect = dbo.getDb("user");
    db_connect
        .collection("userData")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});


blogsdataRoutes.route("/user/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
        .collection("userData")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

blogsdataRoutes.route("/user").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        userProPic: req.body.userProPic,
        userName: req.body.userName,
        userTitle: req.body.userTitle

    };
    db_connect.collection("user").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});


blogsdataRoutes.route("/update/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
        $set: {
            userProPic: req.body.userProPic,
            userName: req.body.userName,
            userTitle: req.body.userTitle
        },
    };
    db_connect
        .collection("userData")
        .updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
            response.json(res);
        });
});


blogsdataRoutes.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("userData").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.status(obj);
    });
});

module.exports = blogsdataRoutes;
