const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user");
db.role = require("./role");
db.task = require("./dailyTask");
db.payment = require("./payment");
db.locationHistory = require("./locationHistory");

db.ROLES = ["admin", "manager", "salesperson"];

module.exports = db;