const mongoose = require("mongoose");

const LocationHistory = mongoose.model(
    "LocationHistory",
    new mongoose.Schema({
        sellerId: String,
        location:String,
        // location: {
        //     type:Map, of: { type: Number }},
        dateTime: Date,

    })
);

module.exports = LocationHistory;