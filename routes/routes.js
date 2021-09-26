const { authJwt } = require("../middlewares");
const controller = require("../controllers/userController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.admin
  );

  app.get(
    "/api/test/manager",
    [authJwt.verifyToken, authJwt.isManager],
    controller.manager
  );

  app.get(
    "/api/test/salesperson",
    [authJwt.verifyToken, authJwt.isSalesperson],
    controller.salesperson
  );
};