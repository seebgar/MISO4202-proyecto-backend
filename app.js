const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config/database");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const key = require("./config/jwt");

// Connect to database
mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("--> Connected to database!");
});
mongoose.connection.on("error", (err) => {
  console.log("*--> Database error: " + err);
});

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//jwt
app.set("secretKey", key.pass); // jwt secret token

//* https://miso4202-back.herokuapp.com

app.use("/", indexRouter);
app.use("/users", usersRouter);

/* API ROUTES */
var router = express.Router();
app.use("/api", router);
require("./routes/api/insumo")(router);
require("./routes/api/producto")(router);
require("./routes/api/proveedor")(router);
require("./routes/api/insumo")(router);
require("./routes/api/user")(router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
