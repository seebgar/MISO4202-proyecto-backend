"use strict";

const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.create = function (req, res, next) {
  userModel.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
    function (err, result) {
      if (err) next(err);
      else
        res.json({
          status: "success",
          message: "User added successfully!!!",
          data: req.body.email,
        });
    }
  );
};

exports.authenticate = function (req, res, next) {
  userModel.findOne({ email: req.body.email }, function (err, userInfo) {
    if (!userInfo) {
      res.status(401).json({
        status: "error",
        message: "Invalid email/password!!!",
        data: null,
      });
    } else {
      if (bcrypt.compareSync(req.body.password, userInfo.password)) {
        const token = jwt.sign({ id: userInfo._id }, req.app.get("secretKey"), {
          expiresIn: "1h",
        });
        res.json({
          status: "success",
          message: "user found!!!",
          data: { user: userInfo, token: token },
        });
      } else {
        res.status(401).json({
          status: "error",
          message: "Invalid email/password!!!",
          data: null,
        });
      }
    }
  });
};

exports.list = function (req, res, next) {
  userModel.find(function (err, response) {
    if (err) next(err);
    else
      res.json({
        status: "success",
        message: "User added successfully!!!",
        data: response,
      });
  });
};
