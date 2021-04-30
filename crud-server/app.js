"use strict";
exports.__esModule = true;
var express = require("express");
var session = require("express-session");
var register_router_1 = require("./infrastructure/register/routes/register.router");
var passport = require("passport");
var passport_1 = require("./config/passport");
var login_router_1 = require("./infrastructure/login/login.router");
var cors = require("cors");
var user_router_1 = require("./infrastructure/user/router/user.router");
var PORT = 8000;
var app = express();
passport_1.PassportStategy(passport);
app.use(cors());
app.use(session({
    secret: '3FTxSsGXyruRvt7wYM6fLy2GKW3Q955W',
    resave: true,
    saveUninitialized: true
}));
app.use(express.json({
    type: ['application/json', 'text/plain']
}));
app.use('/register', register_router_1.RegisterRouter);
app.use('/login', login_router_1.LoginRouter);
app.use('/user', user_router_1.UserRouter);
app.listen(PORT, function () { return console.log("Server started at " + PORT); });
