"use strict";
exports.__esModule = true;
exports.RegisterRouter = void 0;
var express_1 = require("express");
var register_controller_1 = require("../controllers/register.controller");
var RegisterRouter = express_1.Router();
exports.RegisterRouter = RegisterRouter;
RegisterRouter.post('/', register_controller_1.registerUser);
