const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let tradingAppSchema = new Schema(
    {
        stockName: { type: String },
        stockPrise: { type: Number },
        stockNSE: { type: Number },
    },
    { timestamps: true, versionKey: false }
);

let TradingApp = mongoose.model("tradingApp", tradingAppSchema);

module.exports = TradingApp;

