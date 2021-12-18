const express = require("express");
const WatchList = require("../models/watchLiist.model");
const router = express.Router();

router.post("/watchList", async (req, res) => {
    try {
        let watchList = new WatchList(req.body);
        watchList = await watchList.save();
        res.status(200).json({
            status: 200,
            data: watchList,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.get("/watchList", async (req, res) => {
    try {
        let users = await WatchList.find();
        res.status(200).json({
            status: 200,
            data: users,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.get("/watchList/:watchListId", async (req, res) => {
    try {
        let watchList = await WatchList.findOne({
            _id: req.params.watchListId,
        });
        if (watchList) {
            res.status(200).json({
                status: 200,
                data: watchList,
            });
        }
        res.status(400).json({
            status: 400,
            message: "No watchList found",
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.put("/watchList/:watchListId", async (req, res) => {
    try {
        let watchList = await WatchList.findByIdAndUpdate(req.params.watchListId, req.body, {
            new: true,
        });
        if (watchList) {
            res.status(200).json({
                status: 200,
                data: watchList,
            });
        }
        res.status(400).json({
            status: 400,
            message: "No watchList found",
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.delete("/watchList/:watchListId", async (req, res) => {
    try {
        let watchList = await WatchList.findByIdAndRemove(req.params.watchListId);
        if (watchList) {
            res.status(200).json({
                status: 200,
                message: "WatchList deleted successfully",
            });
        } else {
            res.status(400).json({
                status: 400,
                message: "No watchList found",
            });
        }
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

module.exports = router;

