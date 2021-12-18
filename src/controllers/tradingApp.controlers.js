const express = require("express");
const TradingApp = require("../models/tradingApp.model");
const router = express.Router();

router.post("/tradingApp", async (req, res) => {
    try {
        let tradingApp = new TradingApp(req.body);
        tradingApp = await tradingApp.save();
        res.status(200).json({
            status: 200,
            data: tradingApp,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.get("/tradingApp", async (req, res) => {
    try {
        let users = await TradingApp.find();
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

router.get("/tradingApp/:tradingAppId", async (req, res) => {
    try {
        let tradingApp = await TradingApp.findOne({
            _id: req.params.tradingAppId,
        });
        if (tradingApp) {
            res.status(200).json({
                status: 200,
                data: tradingApp,
            });
        }
        res.status(400).json({
            status: 400,
            message: "No tradingApp found",
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.put("/tradingApp/:tradingAppId", async (req, res) => {
    try {
        let tradingApp = await TradingApp.findByIdAndUpdate(req.params.tradingAppId, req.body, {
            new: true,
        });
        if (tradingApp) {
            res.status(200).json({
                status: 200,
                data: tradingApp,
            });
        }
        res.status(400).json({
            status: 400,
            message: "No tradingApp found",
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.delete("/tradingApp/:tradingAppId", async (req, res) => {
    try {
        let tradingApp = await TradingApp.findByIdAndRemove(req.params.tradingAppId);
        if (tradingApp) {
            res.status(200).json({
                status: 200,
                message: "TradingApp deleted successfully",
            });
        } else {
            res.status(400).json({
                status: 400,
                message: "No tradingApp found",
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
