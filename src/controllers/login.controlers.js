const express = require("express");
const Login = require("../models/login.model");
const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        let login = new Login(req.body);
        login = await login.save();
        res.status(200).json({
            status: 200,
            data: login,
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.get("/login", async (req, res) => {
    try {
        let users = await Login.find();
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

router.get("/login/:loginId", async (req, res) => {
    try {
        let login = await Login.findOne({
            _id: req.params.loginId,
        });
        if (login) {
            res.status(200).json({
                status: 200,
                data: login,
            });
        }
        res.status(400).json({
            status: 400,
            message: "No login found",
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.put("/login/:loginId", async (req, res) => {
    try {
        let login = await Login.findByIdAndUpdate(req.params.loginId, req.body, {
            new: true,
        });
        if (login) {
            res.status(200).json({
                status: 200,
                data: login,
            });
        }
        res.status(400).json({
            status: 400,
            message: "No login found",
        });
    } catch (err) {
        res.status(400).json({
            status: 400,
            message: err.message,
        });
    }
});

router.delete("/login/:loginId", async (req, res) => {
    try {
        let login = await Login.findByIdAndRemove(req.params.loginId);
        if (login) {
            res.status(200).json({
                status: 200,
                message: "Login deleted successfully",
            });
        } else {
            res.status(400).json({
                status: 400,
                message: "No login found",
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


