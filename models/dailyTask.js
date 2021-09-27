const mongoose = require("mongoose");

const DailyTask = mongoose.model(
    "DailyTask",
    new mongoose.Schema({
        sellerId: String,
        dailyInventory: {
            type: Map, of:
                new mongoose.Schema({
                    name: { type: String },
                    price: { type: Number },
                    quantity: { type: Number },
                }),
        },
        dailyRoute: {
            type: Map, of: { type: [Number] },
        },
        dailySalesProgression: Number,
        dailySalesTarget: Number,
        dailyShops: {
            type: Map, of:
                new mongoose.Schema({
                    title: { type: String },
                    address: { type: String },
                    cp: { type: String },
                    isCovered: { type: Boolean },
                    telephone: { type: String },
                    location: { type: [Number] },
                }),
        },
        name: String,
    })
);

module.exports = DailyTask;