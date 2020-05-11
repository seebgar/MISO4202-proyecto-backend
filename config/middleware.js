const express = require("express");
const jwt = require("jsonwebtoken");
const role = require("./role");

const protected = express.Router();
protected.use((req, res, next) => {
  jwt.verify(req.headers["access-token"], req.app.get("secretKey"), function (
    err,
    decoded
  ) {
    if (err) {
      res
        .status(401)
        .json({ status: "error", message: err.message, data: null });
    } else {
      if (
        role[decoded.role].find(function (url) {
          return req.path.match(url);
        })
      ) {
        req.body.userId = decoded.id;
        next();
      } else {
        res.status(401).json({
          status: "error",
          message: "No tiene permisos para consumir este recurso",
          data: null,
        });
      }
    }
  });
});

module.exports = {
  protected: protected,
};
