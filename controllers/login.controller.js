"use strict";
const jwt = require("jsonwebtoken");
var express = require("express");
const app = express();
const key = require(".././config/jwt");

//Key JWT
app.set("key", key.pass);

exports.login = function (req, res) {
  if (req.body.usuario === "asfo" && req.body.contrasena === "holamundo") {
    const payload = {
      check: true,
    };
    console.log("ingreso");
    console.log(app.get("key"));
    const token = jwt.sign(payload, app.get("key"), {
      expiresIn: 1440,
    });
    res.json({
      mensaje: "Autenticación correcta",
      token: token,
    });
  } else {
    res.json({ mensaje: "Usuario o contraseña incorrectos" });
  }
};
