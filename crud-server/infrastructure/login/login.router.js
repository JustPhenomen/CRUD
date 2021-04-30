"use strict";
exports.__esModule = true;
exports.LoginRouter = void 0;
var express_1 = require("express");
var login_controller_1 = require("./login.controller");
var LoginRouter = express_1.Router();
exports.LoginRouter = LoginRouter;
LoginRouter.post('/', login_controller_1.loginUser);
