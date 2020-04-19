const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const key = require(".././config/jwt");

//Key JWT
app.set("key", key.pass);

const protected = express.Router();
protected.use((req, res, next) => {
  const token = req.headers["access-token"];

  if (token) {
    jwt.verify(token, app.get("key"), (err, decoded) => {
      if (err) {
        return res.json({ mensaje: "Token inválida" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.send({
      mensaje: "Token no proveída.",
    });
  }
});

module.exports = {
  protected: protected,
};
