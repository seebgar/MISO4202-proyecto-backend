const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const key = require(".././config/jwt");

//Key JWT
app.set("key", key.pass);

const protected = express.Router();
protected.use((req, res, next) => {
  jwt.verify(req.headers["access-token"], req.app.get("secretKey"), function (
    err,
    decoded
  ) {
    if (err) {
      res.json({ status: "error", message: err.message, data: null });
    } else {
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  });
});

module.exports = {
  protected: protected,
};
