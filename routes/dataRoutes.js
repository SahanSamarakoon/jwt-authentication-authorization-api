const { authJwt } = require("../middlewares");
const controller = require("../controllers/taskController");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/task/salesperson",
        authJwt.verifyToken,
        controller.findTask
    );

    app.patch(
        "/api/task/salesperson/updateInventory",
        authJwt.verifyToken,
        controller.updateInventory
    );

    app.patch(
        "/api/task/salesperson/checkShop",
        authJwt.verifyToken,
        controller.checkShop
    );

    app.patch(
        "/api/task/salesperson/updateSalesProgress",
        authJwt.verifyToken,
        controller.updateSalesProgress
    );

    app.post(
        "/api/task/salesperson/addPayment",
        authJwt.verifyToken,
        controller.addPayment
    );

    app.post(
        "/api/task/payments",
        authJwt.verifyToken,
        controller.payments
    );

    app.patch(
        "/api/task/salesperson/updateLocation",
        authJwt.verifyToken,
        controller.updateLocation
    );

};



