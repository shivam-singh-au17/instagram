const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let watchListDataSchema = new Schema(
    {
        stockName: { type: String },
        stockPrise: { type: Number },
        stockNSE: { type: Number },
    },
    { timestamps: true, versionKey: false }
);

let WatchListData = mongoose.model("watchListData", watchListDataSchema);

module.exports = WatchListData;

